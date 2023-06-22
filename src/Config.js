import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './Options';
import Api from './Api';
import Header from './Header'
import CoBotAvatar from './BotAvatar';

/* The config controls the every configurable ascept of the chatbot*/
const config = {
  initialMessages: [createChatBotMessage(`Hello How Can I help you`,{
    widget : "todos"
    
  })],
  botName : "HR Chat Bot",
  /* Both are the custom components for the custom header and custom bot Avatar*/
  customComponents :{
    header: () => <Header/>,
    botAvatar: (props)=><CoBotAvatar {...props}/>
  },
  state :{
    Id:' hello',
    todos :[],
    cat:[],
  },

  /* To use the own components in the chatbot first we need to define in the widget section of the config*/
  widgets: [
    {
      widgetName: "todos",
      widgetFunc : (props) => <Options {...props}/>,
    },

    {
        widgetName: "Api",
        widgetFunc : (props) => <Api {...props}/>,
        MapSateToProps : ["todos"]

    },
],
};

export default config;

