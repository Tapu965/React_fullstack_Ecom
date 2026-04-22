
import { useRef,useEffect } from 'react'
import { ChatMassage } from './ChatMassage';
import './ChatMassages.css';
function ChatMassages({chatMassages}){
        const chatMassagesRef=useRef(null);
       useEffect(()=>{
       const containerElem= chatMassagesRef.current
       if(containerElem){
        containerElem.scrollTop=containerElem.scrollHeight;
       }
        

       }, [chatMassages]);
          return(
            <div className="chat-massages-container"
            ref={chatMassagesRef}>
            
              {chatMassages.map((chatMassages) =>{
                return(
                  <ChatMassage 
                    massage={chatMassages.massage}
                    sender={chatMassages.sender}
                    key={chatMassages.id}
                  />
                );
              })}
            </div>
          );
      }
      export default ChatMassages;