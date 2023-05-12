import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './Options';
import Api from './Api';
import Header from './Header'
import CoBotAvatar from './BotAvatar';
const config = {


  initialMessages: [createChatBotMessage(`Hello How Can I help you`,{
    widget : "todos"
    
  })],
  botName : "HR Chat Bot",
  customComponents :{
    header: () => <Header/>,
    botAvatar: (props)=><CoBotAvatar {...props}/>
  },
  state :{
    Id:' hello',
    todos :[],
    cat:[],
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

