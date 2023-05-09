import React, { useState} from "react";
import { useEffect } from "react";
import axios from "axios";

const Api = (props) =>{

    const [states,setState] = useState([]);
   
    useEffect(  () => {
         fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) =>{
            const five = data.slice(0,6)
            setState((state) => ({...state, todos: five}));
        });
    },[]);
    //console.log(props.todos);
    const renderTodos = () =>{
        if(typeof states.todos != 'undefined'){
            return states.todos.map(todo =>{
                return (
                <li key={todo.id}>{todo.title}</li>
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