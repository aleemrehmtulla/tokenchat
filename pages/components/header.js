import Link from "next/link";
import { useState, useEffect } from "react";
import { ConnectWallet } from "@3rdweb/react";
function Header() {
  const [currency, setCurrency] = useState(0);
  useEffect(() => {
    const number = window.location.search.replace('?', '');
console.log(number)
    setCurrency(number);
   
}, []);
const [sob, setSob] = useState(0);
  
function submit(){
  console.log("wow")
  if(sob===0){
    setSob(1)
  }else{setSob(0)}
}
  return (
    <div className="">
 
<div className="flex md:hidden p-8  justify-center ">
<span className='flex md:justify-end pr-8 justify-center'><ConnectWallet  className=""/></span>
      <div className="flex-cols text-3xl items-center align-middle		  ">
       
          <button onClick={submit} className="link pt-1 link-underline link-underline-black text-black">
            ${currency}
          </button>

          <div className={`${sob === 1 ? 'grid z-50	' : 'hidden'} `}>

      <button href="?VITA" className="link link-underline link-underline-black text-black">
                  $VITA
                </button>



                <a href="?DAI" className="link link-underline link-underline-black text-black">
                  $DAI
                </a>


              
                <a href="?BAE" className="link link-underline link-underline-black text-black" >
                  $BAE
                </a>
               </div>
       
       
         
        

 
         
       
      </div>
      
    </div>





          <div className="hidden md:grid">
    <span className='flex md:justify-end p-8 justify-center'><ConnectWallet  className=""/></span>
    <div className="md:flex hidden p-8  justify-center ">
      <div className="flex space-x-12 text-3xl items-center		  ">
       
          <a href="?DAI" className="link link-underline link-underline-black text-black">
            $DAI
          </a>
        

 
          <a href="?LFG" className="link link-underline link-underline-black text-black">
            $LFG
          </a>



          <a href="?VITA" className="link link-underline link-underline-black text-black">
            $VITA
          </a>


        
          <a href="?BAE" className="link link-underline link-underline-black text-black" target={"_self"}>
            $BAE
          </a>
       
      </div>
    </div>
    </div>

    </div>
  );
}

export default Header;
