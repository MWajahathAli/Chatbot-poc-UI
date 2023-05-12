import React from "react";
import Api from "./Api";
import './Options.css'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { login,catOption } from './user';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles'
import MessageParser from './MessageParser'
import { createClientMessage } from 'react-chatbot-kit';
// 1st. argument is the text value, 2nd. argument is the name of the registered custom message.

const Options = ({props,actions}) =>{

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

    const id = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    
    const [opt,setOpt] = useState([]);
    const [show,setShow]=useState(false)
    // const [id,setId] =useState();
   
  useEffect(()=>{
    console.log("hello");
   initial();
  },[])
  
    const optHandle = async (data) => {
        dispatch(login({email: data.categoryId}));
        // await dispatch(catOption({catoption: data.categoryName}));
  
       console.log(opt.length)
        // setId((state) => ({...state, Id: id}));
        actions.Hello(data.categoryName)
    }


    const initial= async () => {
        let url = `http://localhost:8080/cat/allSubCat`;
        let data ={
            "categoryId":id.email
        }
      
        try {
          const rawResponse = await fetch(url, {
            
            method : 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
           
            body: JSON.stringify(data),
          });
          if (rawResponse.ok) {
            let response = await rawResponse.json();
            
            setOpt(response)
        
          } else {
            const error = new Error();
            error.message = "some error occured";
            throw error;
          }
        } catch (e) {
          // alert(`error: ${e.message}`);
        }
    }



    // const options = [
    //     {
    //         text : opt.map(categoryName => categoryName),
    //         handler:() =>{
    //              actions.Hello();
    //         },
    //         id : 1,
    //     },
    //     {  text : "HR", handler:() =>{}, id : 2 },
    //     { text : "Health",  handler:() =>{}, id : 3}
    // ]

    const buttonsmarkup = opt.map((Option) => (
        <button key={Option.categoryId}
          onClick ={()=>optHandle(Option)} 
         className = "option-button">
            {Option.categoryName}
        </button>
      
    ))

    


    return (
        <div className="options-container">
            {buttonsmarkup}
           {/* <MessageParser/> */}
           
             {opt.length === 1 && (
                <div> {
                    opt.map( s => (
                     <div key={s.categoryId}>{
                        s.questionsAndAnswers.map(data =>(
                          <div>
                            <button className = "option-button" key={data.id} onClick={()=>setShow(true)} > {data.question}</button>
                            {show == true && (<div className="paragraph"><Box sx={{ width: '100%',color:'#000' }}>
                             <Stack spacing={2}> <Item><div style={{color:'#000'}}><li >{data.answer}</li></div></Item> </Stack>
                           </Box> </div>)}
                            </div>
                            
                        ))}</div>
                    ))}
                    
                </div> )}
             
        </div>
    )
}


export default Options