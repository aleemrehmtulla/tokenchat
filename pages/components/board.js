
import Image from "next/image"
import FirebaseUtils, { AddPadawan, GetMessages } from '../../FirebaseUtils'
import { useState } from "react"


import Messages from './messages'
 function Board(){
    return (
        <div className="w-4/6   ">
            
            <div className="flex w-full justify-between align-middle ">
            <h1 className="font-semibold text-lg">$LFG</h1>
            <h1 className="font-semibold text-lg">4,758</h1>
            </div>
            <hr className="border-1 pb-8"></hr>

            <div className="overflow-y-auto h-3/6   ">
            <Messages />
            </div>
            <Send />




        </div>
    )
}
export default Board

const sende = async event => {
  event.preventDefault()
  
   console.log("submitted")
   console.log(event.target.name.value)
   const d = new Date();
   let rand = d.getTime();
   console.log(rand)
   const Hi = {
    "Message" : event.target.name.value,
    "Time" : 348744,
    "User" : "aleemrehmtulla"
  }
  if(Hi){
  AddPadawan(Hi, rand)
  }
  var form = document.getElementById("myForm");
  form.reset();
 }

function Send(){
    return (
        <div  className=" ">
           
           <form id="myForm" onSubmit={sende} className="flex w-full ">
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
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>


        </form>



            </div> 
       
    )

}