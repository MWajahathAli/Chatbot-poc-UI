import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './Options';
import Api from './Api';

const config = {


  initialMessages: [createChatBotMessage(`Hello How Can I help you`,{
    widget : "todos"
  })],
  botName : "HR Bot",
  state :{
    Id:' hello',
    todos :[],
    cat:[],
  },

  widgets: [
    {
      widgetName: "todos",
      widgetFunc : (props) => <Options {...props}/>,
      MapStateToProps:["Id"]
    
    },

    {
        widgetName: "Api",
        widgetFunc : (props) => <Api {...props}/>,
        MapSateToProps : ["todos"]

    },
],
};

export default config;

