import {AddPadawan} from '../../../FirebaseUtils'
import { useState, useEffect } from "react"
import { useWeb3 } from "@3rdweb/hooks";
import { getDatabase, ref, onValue} from "firebase/database";
import Swal from 'sweetalert2'
import Web3 from "web3";
import Messages from './messages'
const db = getDatabase();

 function Board(){
    const {address} = useWeb3();
    const [amount, setAmount] = useState(0);

    async function getBalance() {
        if ( address !== undefined )  {
            const provider = "https://mainnet.infura.io/v3/074309fd7ff64c548badbd786db4b1c6"
            const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));
            const minABI = [{
                    constant: true, inputs: [{ name: "_owner", type: "address" }],
                    name: "balanceOf", outputs: [{ name: "balance", type: "uint256" }],
                    type: "function",
                },];
            
            const tokenAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";
            const contract = new Web3Client.eth.Contract(minABI, tokenAddress);

            const result = await contract.methods.balanceOf(address).call();
            setAmount(Web3Client.utils.fromWei(result)); //rounds it
        }}
    getBalance();

    useEffect(() => {
        onValue( ref(db, 'LFG/Convo'), (snapshot) => {
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
        <div className="w-4/6   ">

            <div className="flex w-full justify-between align-middle ">
                <h1 className="font-semibold text-lg">$ETH</h1>
                <h1 className="font-semibold text-lg">{amount}</h1>
            </div>

            <hr className="border-1 pb-8"></hr>

            <div className="overflow-y-auto h-80 mb-8  " id="chat">
                <Messages />
            </div>

            <Send />

        </div>
    )
}
export default Board








function Send(){
  const {address} = useWeb3();
  const [verified, setVerified] = useState("idk");
  let cards = []

  async function getBalance() {
    if ( address !== undefined )  {
        const provider = "https://mainnet.infura.io/v3/074309fd7ff64c548badbd786db4b1c6"
        const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));
        const minABI = [{
                constant: true, inputs: [{ name: "_owner", type: "address" }],
                name: "balanceOf", outputs: [{ name: "balance", type: "uint256" }],
                type: "function",
            },];
        
        const tokenAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";
        const contract = new Web3Client.eth.Contract(minABI, tokenAddress);

        const result = await contract.methods.balanceOf(address).call();
        const format = (Web3Client.utils.fromWei(result)); //rounds it

        if (format>0){setVerified("true")} else {setVerified("false")}
    }}
    getBalance();

  const submit = async event => {
    event.preventDefault()

    const d = new Date();
    let rand = d.getTime();
    let pm = d.getHours() + ":" + d.getMinutes() 
    const meta = {
    "Message" : event.target.name.value,
    "Time" : pm,
    "Address" : address
    }

    if(meta){AddPadawan(meta, rand)}
    document.getElementById("myForm").reset();
   }
   const error = async event => {
    event.preventDefault()
    Swal.fire({
      icon: 'error',
      title: 'Buy some $LFG first bro...',
      text: 'Can not send message',
    })
  }
   
    if(verified==="true"){
      const keys = ["79568777"]
      cards = keys.map(index => {
      return (
        <div key="index">
          
        <form id="myForm" autoComplete="off" onSubmit={submit} className="flex w-full ">
            <input
                type="text"
                id="name" 
                name="name"
                className="w-full px-4 py-1 text-gray-800 rounded-l-lg focus:outline-none"
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
        <form id="myForm" autoComplete="off" onSubmit={error} className="flex w-full ">
            <input
            type="text"
            id="name" 
            name="name"
            disabled
            className="w-full px-4 py-1 text-gray-800 rounded-l-lg disabled:opacity-90 focus:outline-none"
            placeholder="You can't message without $LFG"
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