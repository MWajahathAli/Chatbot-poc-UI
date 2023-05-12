import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { useSelector } from "react-redux";
import { catOption } from './user';
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
 
  const option = useSelector((state) => state.user.value1);

        const Hello = (data) =>{
          console.log("This is data "+ data)
          // console.log("ActionProvider "+JSON.stringify(option));
        
            const message1 = createClientMessage(data);
          

          // console.log("ActionProvider "+JSON.stringify(option))
        const message = createChatBotMessage("Select Suitable Option",{
            // widget: "Api"
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