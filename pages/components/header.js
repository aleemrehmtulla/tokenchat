
import { useWeb3 } from "@3rdweb/hooks";
import { ConnectWallet } from "@3rdweb/react";
import Link from "next/link";
function Header(){
    const { address, chainId, provider } = useWeb3();
    return(
        <div className="p-12 pt-20">
            
            
            <div className="flex pt-12 p-4  justify-center ">
            <ConnectWallet  className=""/>
      <div className="flex space-x-12 text-3xl items-center		  ">
        <Link href="https://app.daohaus.club/dao/0x64/0xf3156e792ad65bab12d296f05f8a3c73ad809576/proposals">
          <a className="link link-underline link-underline-black text-black" target="_blank">
            $TASTE
          </a>
        </Link>

        <Link href="https://docs.padawandao.com/">
          <a className="link link-underline link-underline-black text-black" target="_blank">
            $LFG
          </a>
        </Link>

        <Link href="https://padawandao.com">
          <a className="link link-underline link-underline-black text-black" target="_blank">
            $BALANCE
          </a>
        </Link>

        <Link href="https://discord.gg/zQmEkzUF7z">
          <a className="link link-underline link-underline-black text-black" target="_blank">
            $PEOPLE
          </a>
        </Link>
      </div>
    </div>
        </div>
    )
}

export default Header;