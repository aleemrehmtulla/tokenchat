import Link from "next/link";
function Header() {
  return (
    <div className="flex  p-8  justify-center ">
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
  );
}

export default Header;
