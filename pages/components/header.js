import Link from "next/link";
import { useState, useEffect } from "react";
import { ConnectWallet } from "@3rdweb/react";
import { useWeb3 } from '@3rdweb/hooks'
import Web3 from "web3";
function Header() {
  const Web3Client = new Web3(window.ethereum);
  const { address, provider } = useWeb3();
  const [currency, setCurrency] = useState(0);
  
  useEffect(() => {
    const number = window.location.search.replace("?", "");
    console.log(number);
    setCurrency(number);
  }, []);

  const [sob, setSob] = useState(0);
  const [sign, setSign] = useState(0);
  function submit(){
    console.log("wow")
    if(sob===0){
      setSob(1)
    }else{setSob(0)}
}



    if(address !== undefined && sign!==1){
    
      Verify()
        

        

    }

     function Verify() {  
      setSign(1)  
      console.log("rannnnnn")

       Web3Client.eth.sign(Web3Client.utils.sha3("Some text"), address).then(console.log);


      // const hi = await Web3Client.eth.sign(Web3Client.utils.utf8ToHex("Hello world", address)).then(console.log);
     
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
