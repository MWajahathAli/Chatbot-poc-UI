import React from "react";
import Api from "./Api";
import './Options.css'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { login } from './user';
const Options = ({props,actions}) =>{

    const id = useSelector((state) => state.user.value);



    const dispatch = useDispatch()
    
    const [opt,setOpt] = useState([]);
    const [show,setShow]=useState(false)
    // const [id,setId] =useState();
   
  useEffect(()=>{
    console.log("Values ")
   

    // console.log(props.Id)
   initial()


  },[])

    const optHandle = (id) => {
        dispatch(login({email: id}))
        
       console.log(opt.length)
        // setId((state) => ({...state, Id: id}));
        actions.Hello()
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
            console.log('From Method' +JSON.stringify(response))
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
          onClick ={()=>optHandle(Option.categoryId)} 
         className = "option-button">
            {Option.categoryName}
        </button>
      
    ))

    

    return (
        <div className="options-container">
            {buttonsmarkup}
             {opt.length === 1 && (
                <div> {
                    opt.map( s => (
                        s.questionsAndAnswers.map(data =>(
                            <button key={data.id} > {data.question}</button>
                            
                            

                         
                        ))
                    ))}
                    
                </div> )}
             
        </div>
    )
}


export default Options