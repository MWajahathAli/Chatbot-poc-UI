import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './Options';
import Api from './Api';

const config = {
  initialMessages: [createChatBotMessage(`Hello How Can I help you`,{
    widget : "todos"
  })],
  botName : "Genie",
  state :{
    todos :[]
  },
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