import React from "react";
import './Options.css'

const Options = ({props,actions}) =>{

    const options = [
        {
            text : "Finance",
            handler : actions.Hello,
            id : 1,
        },
        {  text : "HR", handler:() =>{
        }, id : 2 },
        { text : "Health",  handler:() =>{}, id : 3}
    ]

    const buttonsmarkup = options.map((Option) => (
        <button key={Option.id} onClick ={Option.handler} className = "option-button">
            {Option.text}
        </button>
    ))

    return (
        <div className="options-container">
            {buttonsmarkup}
        </div>
    )
}


export default Options