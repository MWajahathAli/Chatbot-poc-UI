import React, { useState, useEffect } from "react";

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
         
        }
    }
   
    useEffect(   () => {
        initial();
        console.log(JSON.stringify(states));
      
    
    },[]);
    
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