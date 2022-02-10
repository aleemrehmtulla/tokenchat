import {AddPadawan} from '../../../FirebaseUtils'
import { useState, useEffect } from "react"
import { useWeb3 } from "@3rdweb/hooks";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue} from "firebase/database";
import { getStorage, getDownloadURL, uploadBytes, ref as sRef } from "firebase/storage";
import Swal from 'sweetalert2'
import Web3 from "web3";
import Messages from './messages'

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

 function Board(){
    const {address} = useWeb3();
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState(0);
    
    async function Getbalance(woo) {
        if ( address !== undefined && typeof window !== 'undefined' )  {
            
            const provider = "https://mainnet.infura.io/v3/074309fd7ff64c548badbd786db4b1c6"
            const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));
            const minABI = [{
                    constant: true, inputs: [{ name: "_owner", type: "address" }],
                    name: "balanceOf", outputs: [{ name: "balance", type: "uint256" }],
                    type: "function",
                },];
            
            const tokenAddress = woo;
            const contract = new Web3Client.eth.Contract(minABI, tokenAddress);
            const result = await contract.methods.balanceOf(address).call();
            setAmount(Web3Client.utils.fromWei(result)); //rounds it
        }}
        if(typeof window !== 'undefined'){
        const number = window.location.search.replace('?', '');
        
        
        onValue( ref(db, `${number}/`), (snapshot) => {
            const data = snapshot.val();
            const woo = data.contract
            Getbalance(woo);

        });
        }
        

    useEffect(() => {
        const number = window.location.search.replace('?', '');
    console.log(number)
        setCurrency(number);
        onValue( ref(db, `${number}/Convo`), (snapshot) => {
            const data = snapshot.val();
            setTimeout(() => {
                scrollToBottom(data)
            }, 3);
        });
    }, []);

    const scrollToBottom = () =>{ 
        const amountToscroll = document.getElementById('chat');
        document.getElementById('chat').scrollTo({ 
        top: amountToscroll.scrollHeight, 
        behavior: 'smooth'
        }); 
    }; 


    return (
        <div className="w-5/6 md:w-4/6   ">

            <div className="flex w-full justify-between align-middle ">
                <h1 className="font-semibold text-lg">{currency}</h1>
                <h1 className="font-semibold text-lg">{amount}</h1>
            </div>

            <hr className="border-1 pb-8"></hr>
            
       
            <div className="overflow-y-auto h-80 mb-8 w-full overflow-x-clip  " id="chat">
                <Messages />
            </div>
          

            <Send />

        </div>
    )
}
export default Board








function Send(){





  const {address} = useWeb3();
  const [sign, setSign] = useState(0);
  const [signed, setSigned] = useState(0);
  const Web3Client = new Web3(window.ethereum);

  const [verified, setVerified] = useState("idk");
  let cards = []
  
  if(address !== undefined && sign!==1){
    Verify()
  }

  async function Verify() {  
    setSign(1)  
    console.log("rannnnnn")
       ric = "hi"
       setSigned(ric)
       console.log(ric)
     let ric = await Web3Client.eth.sign(Web3Client.utils.sha3("Some text"), address);   
     console.log(ric)  
     setSigned(ric)
    }


  async function Getbalance(woo) {

    if ( address !== undefined && sign==1 && signed!=="hi" && signed!==0)  {
        console.log(signed)
        const provider = "https://mainnet.infura.io/v3/074309fd7ff64c548badbd786db4b1c6"
        const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));
        const minABI = [{
                constant: true, inputs: [{ name: "_owner", type: "address" }],
                name: "balanceOf", outputs: [{ name: "balance", type: "uint256" }],
                type: "function",
            },];
        
        const tokenAddress = woo;
        const contract = new Web3Client.eth.Contract(minABI, tokenAddress);

        const result = await contract.methods.balanceOf(address).call();
        const format = (Web3Client.utils.fromWei(result)); //rounds it

        if ( signed!==0){setVerified("true")} else {setVerified("false")}
        // console.log(verified + "bhyewfdkcsjn")
        // console.log(signed +"wooooooo")
    }}

    if(typeof window !== 'undefined'){
        const number = window.location.search.replace('?', '');
      
        
        onValue( ref(db, `${number}/`), (snapshot) => {
            const data = snapshot.val();
            const woo = data.contract
            Getbalance(woo);
           
        });
        }

  const submit = async event => {
    event.preventDefault()
    
    if (typeof window !== 'undefined') {
        const number1 = window.location.search.replace('?', '');
       
        Get(number1)
    }

    function Get(number1){
    const d = new Date();
    let rand = d.getTime();
    let pm = d.getHours() + ":" + d.getMinutes() 
    const meta = {
    "Message" : event.target.name.value,
    "Time" : pm,
    "Address" : address
    }

    if(meta){AddPadawan(meta, rand, number1)}
    document.getElementById("myForm").reset();
    }   
   }
   const error = async event => {
    event.preventDefault()
    Swal.fire({
      icon: 'error',
      title: 'Buy the token first!',
      text: 'Can not send message',
    })
  }
   
    if(verified==="true"){
      const keys = ["79568777"]
      cards = keys.map(index => {
      return (
        <div key="index">
          {/* <h1>{verified}</h1> */}
        <form id="myForm" autoComplete="off" onSubmit={submit} className="flex w-full ">
            <input
                type="text"
                id="name" 
                name="name"
                className="w-full px-4 py-1 text-gray-800 bg-white rounded-l-lg focus:outline-none"
                placeholder="Send your message..."
                x-model="search"
            />

            <button type="submit"className="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg">
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
    
    if(verified!=="true"){
      const keys = ["79568777"]
      cards = keys.map(index => { 
      return (
        <div key="index">
            {/* <h1>{verified}</h1> */}
        <form id="myForm" autoComplete="off" onSubmit={error} className="flex w-full ">
            <input
            type="text"
            id="name" 
            name="name"
            disabled
            className="w-full px-4 py-1 text-gray-800 rounded-l-lg bg-gray-300 focus:outline-none"
            placeholder="You can't message without the token"
            x-model="search"
            />

            <button type="submit" className="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg">

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