import { useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react"
import Web3 from "web3";
import { injected } from "./wallet/connectors"


function Chat() {
    const [value, setValue] = useState("boom");

    async function getBalance() {
        if ( "hi" === "hi") {
            const provider = "https://mainnet.infura.io/v3/074309fd7ff64c548badbd786db4b1c6"
            const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));
            const minABI = [
                // balanceOf
                {
                    constant: true,
                    inputs: [{ name: "_owner", type: "address" }],
                    name: "balanceOf",
                    outputs: [{ name: "balance", type: "uint256" }],
                    type: "function",
                },
        
            ];
            const tokenAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";
            let balance = 0;
        
            const contract = new Web3Client.eth.Contract(minABI, tokenAddress);
            const result = await contract.methods.balanceOf("0x79cCDaE089b8A9F5EcD13b88392f323CabB7D7bF").call(); // 29803630997051883414242659

            const format = Web3Client.utils.fromWei(result); // 29803630.997051883414242659

            console.log(format + "in file");
            console.log(result);
            setValue(format);
            console.log("w");
            return format;
        } else {
            return 0;
        }
    }
    console.log(getBalance())

   

   

    return (
        <div>
            <h1>{value}</h1>
        </div>
    )
    
}

export default Chat;
