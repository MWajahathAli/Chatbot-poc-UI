import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './Config.js';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';

import './App.css';

function App() {
  return (
      <div>
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      </div>
  );
}

export default App;
