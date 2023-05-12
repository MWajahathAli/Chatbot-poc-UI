import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './Config.js';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import './App.css';
import { useEffect, useState } from 'react';
import Uma from './Uma'
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

function App() {

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] =useState();

  const val = useSelector((state) => state.user.value1);


  const dispatch = useDispatch();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    // dispatch(catOption((prev) => placement !== newPlacement || !prev));
    setPlacement(newPlacement);
  };
 
  useEffect(()=>{
    console.log(JSON.stringify(val))
  },[])

  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(anchorEl ? null : event.currentTarget);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popper' : undefined;

  const [showBot, toggleBot] = useState(false);
  return (
    
      <div className='app-chatbot-container'>

         {/* <Popper id={id} open={open} anchorEl={anchorEl}> */}
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
       
       <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
            <Chatbot
        config={config}
        messageParser={MessageParser}
        messageHistory={loadMessages()}
        actionProvider={ActionProvider}
        saveMessages={saveMessages}
      />
            </Paper>
          </Fade>
        )}
      </Popper>
       
       </Box>
      {/* </Popper> */}
       <div className='app-button-bot'>
      <button
          className="app-chatbot-button"
          // onClick={() => toggleBot((prev) => !prev)}
          onClick={handleClick('top-start')}
          ><div>Bot</div>
          
          <svg viewBox="0 0 640 512" className="app-chatbot-button-icon">
            <path d="M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z"></path>
          </svg>
        </button>
      </div >
      <div>
      {/* <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button> */}
      {/* <Uma/> */}

       
    </div>
      </div >
      
  );
}

export default App;
