import RobotprofileImage from '../assets/robot.png';
import UserprofileImage from '../assets/user.png';
import './ChatMassage.css';

export function ChatMassage({massage,sender}){
        // const massage=props.massage;
        // const sender=props.sender;
        //const{massage,sender}=props;


        // if(sender=="robot"){
        //   return(
        //     <div>
             
        //       <img src="robot.png" width={50}/>
        //        {massage}
        //     </div>

        //   );
        // }
        return(
          <div className={
            sender==='user'
            ?'chat-massage-user'
            :'chat-massage-robot'}>
            {sender==='robot'&& (
              <img src={RobotprofileImage} className="chat-massage-profile"/>
            )}
            <div className="chat-massage-text">
           {massage}
           </div>
           {sender==='user'&&
           (<img src={UserprofileImage} className="chat-massage-profile"/>

           )}
          </div>
        );
      }