



import { get } from "firebase/database"
import Image from "next/image"
import FirebaseUtils, { AddPadawan, GetMessages } from '../../FirebaseUtils'
import { useState, useEffect } from "react"
import { getDatabase, ref, onValue} from "firebase/database";
import { useWeb3 } from "@3rdweb/hooks";

const db = getDatabase();
const PadawanList = (props) => {
    let cards = []

    const [padawans, setPadawans] = useState()
    

    const [time, setTime] = useState("1");
    const [data, setData] = useState([
      1,
      {
          "Message": "urenjfkdvscbnjkvr",
          "Time": 8389328923,
          "User": "aleemrehmtulla"
      }
  ]);
  const [user, setUser] = useState([
    1,
    {
        "Message": "urenjfkdvscbnjkvr",
        "Time": 8389328923,
        "User": "aleemrehmtulla"
    }
]);
  

 useEffect(() => {
  const starCountRef = ref(db, 'LFG/');
  onValue(starCountRef, (snapshot) => {
    const dataa = snapshot.val();
    setData(dataa.Convo);
    setUser(dataa.Users);
    
  });
}, []);

    if(data === "1"){
        return (
            <div>
                <h1>hi</h1>
            </div>
        )
    }

      if(data!=="1"){
        let PadawanKeys = Object.keys(data)
        console.log(PadawanKeys[1])
      cards = PadawanKeys.map(index => {
        const Messager = data[index]
        const addy = Messager.Address
        console.log(addy)
        if(user[addy]){
        const name = user[addy]
        console.log(name)
        const message = name.name
        
        }
        
        
        return (
          <span key={index} className="yourDivID">
             <Message  message={Messager.Message} address={Messager.Address} name={message}  time={Messager.Time} />
          </span>
        )
        })
        }
    

   


    return cards
}
export default PadawanList




function Message(props){
  const address = props.address
  const woah = typeof address !== `undefined` && (address.slice(0, 7));
 
     return (
         <div className="pt-1 flex space-x-8 ">
         
         {/* <div className="w-12 h-12 ">
             <Image src="/images/portugal.png" alt="" width="400" height="400" className="rounded-full w-12 h-12" />
         </div>
 
         <div className=" justify-between">
             <p>{props.message}</p>
         </div> */}
 
         <div className="c-message">
                        <div className="c-message__left">
                            <div className="c-picture">
                                <img className="c-image" src="https://i.pravatar.cc/50" alt="example.eth" />
                            </div>
                        </div>
                        <div className="c-message__right">
                            <div className="c-info">
                                <span className="c-ens bg-blue-100 text-blue-600">@{props.name}</span>
                                <span className="c-address text-gray-800">{woah}</span>
                                <span className="c-timestamp text-gray-600">Today at {props.time} PM</span>
                            </div>
                            <span className="c-body">
                            {props.message}
                            </span>
                        </div>
                    </div>
 
         </div>
     )
 }

