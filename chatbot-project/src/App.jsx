import { useState } from 'react'
import ChatMassages from './components/ChatMassages';
import {ChatInput} from './components/ChatInput'

import './App.css'

    
      
      


 function App(){
           const [chatMassages, setChatMassages]=useState([{
            massage:'hello chatbot',
            sender:'user',
            id:"id1"
          },{
            massage:'hello! how can i help you?',
            sender:'robot',
            id:"id2"
          },{
            massage:"can you tell me today's date?",
            sender:'user',
            id:"id3"
          },{
            massage:"Sure! Today is 2026-06-01",
            sender:'robot',
            id:"id4"
          }]); 
        //  const [chatMassages, setChatMassages]=array;
        //   const chatMassages=array[0];
        //  const setChatMassages=array[1];


        return(
          <div className="app-container">

           
            <ChatMassages 
            chatMassages={chatMassages}
            // setChatMassages={setChatMassages}

            
            />
            <ChatInput 
           chatMassages={chatMassages}
           setChatMassages={setChatMassages}
           />
            </div>

          );
      }

export default App
