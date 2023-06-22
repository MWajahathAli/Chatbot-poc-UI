import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

/* The Action Provider defines the bots response after the message is parsed*/
const ActionProvider = ({ createChatBotMessage, setState, children }) => { 
          const Hello = (data) =>{
          console.log("This is data "+ data)         
          const message1 = createClientMessage(data);
          const message = createChatBotMessage("Select Suitable Option",{
            widget:"todos"
          });
       
        setState((prev) => ({
            ...prev,
            messages : [...prev.messages,message1, message]
        }))
      
    }
    
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {Hello},
        });
      })}
    </div>
  );
};

export default ActionProvider;