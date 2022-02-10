import { useState, useEffect } from "react"
import { getDatabase, ref, onValue, get} from "firebase/database";
import { initializeApp } from 'firebase/app';
import Message from "./message";

// yes this is intentional ;)
const firebaseConfig = {
    apiKey: "AIzaSyDdJFphODy4z1hbLYl85FPx5RqKPxMLpNg",
    authDomain: "balance-c1406.firebaseapp.com",
    databaseURL: "https://balance-c1406-default-rtdb.firebaseio.com",
    projectId: "balance-c1406",
    storageBucket: "balance-c1406.appspot.com",
    messagingSenderId: "562531929426",
    appId: "1:562531929426:web:690340530ea35544393e8b",
    measurementId: "G-9YLGBQLCXQ"
  };

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

function Messages(){
    let list = []
    const [convo, setConvo] = useState(null);
    const [user, setUser] = useState(null);    

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
        return (
          <span key={index}>
             <Message  
             message={messageData.Message} 
             time={messageData.Time} 
             name={messageData.Address}
             />
          </span>
        )
        })
        } 
    else { return (
            <div>
                  <div className="flex pb-4">

        
<div className="w-14 pr-8">
    <div className=" bg-gray-400 text-blue-600  rounded-full h-14 pr-8 w-14 animate-pulse" />
</div>

<div className="flex gap-4 pl-4 pt-2	">
    <div className=" bg-gray-400 text-blue-600 w-20 rounded-md h-6 animate-pulse"></div>
    <div className=" bg-gray-400  w-28 rounded-md h-6 animate-pulse" />
</div>


</div>
                
            </div>
        )}
    return list
}
export default Messages
