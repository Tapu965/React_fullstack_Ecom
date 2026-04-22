
import { useState } from 'react'
import {Chatbot} from 'supersimpledev';
import './ChatInput.css';



export function ChatInput({chatMassages, setChatMassages}){
           const [inputText, setInputText]=useState('');
        function saveInputText(event){
          
          setInputText(event.target.value);
        }
        function sendMassage(){
            const newChatMassages=[
              ...chatMassages,
              {
                massage:inputText,
                sender:'user',
                id:crypto.randomUUID()

              }
            ];
            setChatMassages(newChatMassages);

            const response=Chatbot.getResponse(inputText);
               setChatMassages([
              ...newChatMassages,
              {
                massage:response,
                sender:'robot',
                id:crypto.randomUUID()

              }
            ]);

            setInputText('');

        }
        return (
        <div className="chat-input-container">
          <input 
            placeholder="Type your message here..." 
            size="30"
            onChange={saveInputText}
            value={inputText}
            className="chat-input"
          />
            <button 
            onClick={sendMassage}
            className="send-button"
            >Send</button>
        </div>
        );
      }