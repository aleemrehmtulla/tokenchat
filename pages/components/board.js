
import Image from "next/image"
import FirebaseUtils, { AddPadawan, GetMessages } from '../../FirebaseUtils'
import { useState, useEffect } from "react"
import { ethers } from "ethers";
import { useWeb3 } from "@3rdweb/hooks";
import { getDatabase, ref, onValue} from "firebase/database";
import Swal from 'sweetalert2'
import {getBalance} from "./chat";

const db = getDatabase();


import Messages from './messages'
 function Board(){


  useEffect(() => {
    const starCountRef = ref(db, 'LFG/Convo');
    onValue(starCountRef, (snapshot) => {
      const dataa = snapshot.val();
      console.log("updated")
      setTimeout(() => {
        scrollToBottom(dataa)
      }, 3);
    
 
    });
  }, []);

  const scrollToBottom = () =>{ 
    const scrollContainer = document.getElementById('out');
document.getElementById('out').scrollTo({ 
      top: scrollContainer.scrollHeight, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 


    return (
        <div className="w-4/6   ">
            
            <div className="flex w-full justify-between align-middle ">
            <h1 className="font-semibold text-lg">$ETH</h1>
            <h1 className="font-semibold text-lg">4,758</h1>
            </div>
            <hr className="border-1 pb-8"></hr>

            <div className="overflow-y-auto h-60 mb-8  " id="out">
            <Messages />
            </div>
          
            <Send />
            <button onClick={scrollToBottom}>Scroll to bottom</button>
            <div className="pb-[100rem]"></div>
            <h1>hi</h1>



        </div>
    )
}
export default Board






function Send(){
  const { address, chainId, provider } = useWeb3();
  const [data, setData] = useState("1");
const [user, setUser] = useState("also");
const [verified, setVerified] = useState("idk");
  
  useEffect(() => {
    const starCountRef = ref(db, 'LFG/');
    onValue(starCountRef, (snapshot) => {
      const dataa = snapshot.val();
      setData(dataa.Convo);
      console.log(dataa.Users)
      
      setUser(dataa.Users);
      
    });
  }, []);




async function Woah(){
  if(user!=="also" ){

    
    const baalance = await getBalance
    console.log(baalance)

    if(baalance>=0.01){
      console.log("hi")
    }

   
  
  }
}
  
     useEffect (() => {
   Woah()
  }, [])
   
 



  const sende = async event => {

    event.preventDefault()
    console.log("udqenjk ")
     console.log("submitted")
     console.log(event.target.name.value)
     const d = new Date();
     let rand = d.getTime();
     let timestamp = d.getHours() + ":" + d.getMinutes() 
     console.log(rand)
     const Hi = {
      "Message" : event.target.name.value,
      "Time" : timestamp,
      "Address" : address
    }

    
    if(Hi){
    AddPadawan(Hi, rand)
    }
    var form = document.getElementById("myForm");
    form.reset();
    
   }
let cards = []



    if(verified==="true"){
      const PadawanKeys = [
        "79568777",
      
      ]
      cards = PadawanKeys.map(index => {
       
      return (
        <div  className=" " key="index">
           
        <form id="myForm" autoComplete="off" onSubmit={sende} className="flex w-full ">
     <input
       type="text"
       id="name" 
       name="name"
       className="w-full px-4 py-1 text-gray-800 rounded-l-lg focus:outline-none"
       placeholder="https://twitter.com/aleemrehmtulla/status/1484616584564031494"
       x-model="search"
     />

     <button
       type="submit"
       className="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg"
     >
        <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="none"
           stroke="#000"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
           className="feather feather-send w-5 h-5"
         >
           <line x1="22" y1="2" x2="11" y2="13"></line>
           <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
         </svg>
     </button>


     </form>



         </div> 
       )
      })
    
    }
    const error = async event => {
      event.preventDefault()

      Swal.fire({
        icon: 'error',
        title: 'Buy some $LFG first bro...',
        text: 'Can not send message',
      })
    }

    if(verified!=="true"){
      const PadawanKeys = [
        "79568777",
      
      ]
      cards = PadawanKeys.map(index => {
       
      return (
        <div  className=" " key="index">
           
        <form id="myForm" autoComplete="off" onSubmit={error} className="flex w-full ">
     <input
       type="text"
       id="name" 
       name="name"
       disabled
       className="w-full px-4 py-1 text-gray-800 rounded-l-lg disabled:opacity-80 focus:outline-none"
       placeholder="You can't message without $LFG"
       x-model="search"
     />

     <button
       type="submit"
       
       className="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg"
     >
        <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="none"
           stroke="#000"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
           className="feather feather-send w-5 h-5"
         >
           <line x1="22" y1="2" x2="11" y2="13"></line>
           <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
         </svg>
     </button>


     </form>



         </div> 
       )
      })
    
    }
    




    return cards

}