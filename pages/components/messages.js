



import { get } from "firebase/database"
import Image from "next/image"
import FirebaseUtils, { AddPadawan, GetMessages } from '../../FirebaseUtils'
import { useState, useEffect } from "react"
import { getDatabase, ref, onValue} from "firebase/database";

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
  

  


 useEffect(() => {
  const starCountRef = ref(db, 'LFG/Convo');
  onValue(starCountRef, (snapshot) => {
    const dataa = snapshot.val();
    setData(dataa);
  });
}, []);


    // useEffect(() => {
    //     GetMessages()
    //       .then(d => setData(d))
    //       .catch(err => console.log(err))
    //   }, [])
     
   console.log(data)
   
    
   

    const SkeletonArray = [
        "1",
        "2",
        "3",
        ,
      ]

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
        const Messager = data[index].Message
        return (
          <span key={index}>
             <Message  message={Messager} />
          </span>
        )
        })
        }
    

   


    return cards
}
export default PadawanList


function Message(props){
 
     return (
         <div className="pt-1 flex space-x-8 ">
         
         <div className="w-12 h-12 ">
             <Image src="/images/portugal.png" alt="" width="400" height="400" className="rounded-full w-12 h-12" />
         </div>
 
         <div className=" justify-between">
             <p>{props.message}</p>
         </div>
 
 
 
         </div>
     )
 }