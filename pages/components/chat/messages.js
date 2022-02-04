import { useState, useEffect } from "react"
import { getDatabase, ref, onValue, get} from "firebase/database";
import Message from "./message";
const db = getDatabase();

function Messages(){
    let list = []
    const [convo, setConvo] = useState(null);
    const [user, setUser] = useState(null);
    const [dir, setDir] = useState(null);
    

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const number = window.location.search.replace('?', '');
            
            Get(number)
        }
    }, []);

    function Get(number){
            onValue( ref(db, `${number}/`), (snapshot) => {
                const data = snapshot.val();
                setConvo(data.Convo);
                setUser(data.Users);   
           
            });
    }




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
             name={"temp"}  
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
