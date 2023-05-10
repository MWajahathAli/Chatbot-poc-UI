import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
        const Hello = () =>{
        const message = createChatBotMessage("Here are the Questions",{
            // widget: "Api"
            widget:"todos"
        });
        setState((prev) => ({
            ...prev,
            messages : [...prev.messages, message]
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