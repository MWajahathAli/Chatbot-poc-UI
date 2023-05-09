import React, { useState} from "react";
import { useEffect } from "react";
import axios from "axios";

const Api = (props) =>{

    const [states,setState] = useState([]);

    const initial= async () => {
        let url = `http://localhost:8080/cat/allSubCat`;
        let data ={
            "categoryId":0
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
            setState((state) => ({...state, todos: response}))
            alert("success");
          } else {
            const error = new Error();
            error.message = "some error occured";
            throw error;
          }
        } catch (e) {
          // alert(`error: ${e.message}`);
        }
    }
   
    useEffect(   () => {
        //  fetch("http://localhost:8080/SubCat")
        // .then((res) => res.json())
        // .then((data) =>{
        //     const five = data.slice(0,6)
        //     setState((state) => ({...state, todos: five}));
        // });
        initial();
        console.log(JSON.stringify(states));
      
    
    },[]);
    //console.log(props.todos);
    const renderTodos = () =>{
        if(typeof states.todos != 'undefined'){
            return states.todos.map(todo =>{
                return (
                <li key={todo.categoryId}>{todo.categoryName}</li>
            )})
        }
    }

   console.log(states.todos);
   return (
        <div>
         {
            renderTodos()
         }
        </div>
   )
     
}

export default Api