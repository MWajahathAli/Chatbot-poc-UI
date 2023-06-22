import React from 'react';

/* The message parser controls how the bot reads input and decides which action to invoke.*/
const MessageParser = ({ children, actions }) => {

  const parse = (message) => {
    console.log(message);
  
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;