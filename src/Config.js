import { createChatBotMessage } from 'react-chatbot-kit';
import App from './App';
import Options from './Options';
import Todos from './Todo';
import Api from './Api';

const config = {
  initialMessages: [createChatBotMessage(`Hello How Can I help you`,{
    widget : "Api"
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