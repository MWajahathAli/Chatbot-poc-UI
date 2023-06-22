import React, { useState, useEffect } from "react";
import './Options.css'
import { useSelector, useDispatch } from "react-redux";
import { login } from './user';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles'
// 1st. argument is the text value, 2nd. argument is the name of the registered custom message.

/* component for the getting the options from the backend */
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
   
   
  useEffect(()=>{
    console.log("hello");
   initial();
  },[])
  
    const optHandle = async (data) => {
        dispatch(login({email: data.categoryId}));
       console.log(opt.length)        
        actions.Hello(data.categoryName)
    }

    /*function to get the All sub categories */
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
         
        }
    }

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
                            {show  && (<div className="paragraph"><Box sx={{ width: '100%',color:'#000' }}>
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