import { useState, useEffect } from "react"
import { getDatabase, ref, onValue} from "firebase/database";
import Message from "./message";
const db = getDatabase();

function Messages(){
    let list = []
    const [convo, setConvo] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        onValue( ref(db, 'LFG/'), (snapshot) => {
            const data = snapshot.val();
            setConvo(data.Convo);
            setUser(data.Users);   
        });
    }, []);

    if(convo!==null && user!==null ){
        let Keys = Object.keys(convo)
        list = Keys.map(index => {
        const messageData = convo[index]
        const userr = user[messageData.Address]
        return (
          <span key={index}>
             <Message  
             message={messageData.Message} 
             time={messageData.Time} 
             address={messageData.Address}
             name={userr.name}  
             />
          </span>
        )
        })
        } 
    else { return (
            <div>
                <h1>hi</h1> 
                {/* put skelton here */}
            </div>
        )}
    return list
}
export default Messages
