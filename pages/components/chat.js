import { useWeb3React } from "@web3-react/core"
import { useEffect } from "react"
import Web3 from "web3";
import { injected } from "./wallet/connectors"


function Chat() {
    const { active, account, activate, deactivate } = useWeb3React()
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

    async function getBalance() {
        if ( "hi" === "hi") {
            const result = await contract.methods.balanceOf("0x79cCDaE089b8A9F5EcD13b88392f323CabB7D7bF").call(); // 29803630997051883414242659

            const format = Web3Client.utils.fromWei(result); // 29803630.997051883414242659

            console.log(format);
            console.log(result);
            console.log("w");
            return format;
        } else {
            return 0;
        }
    }
    getBalance()

    async function connect() {
        try {
            if (!!active) {
                deactivate();
                localStorage.setItem('isWalletConnected', false);
            } else {
                await activate(injected);
                balance = await getBalance();
                localStorage.setItem('isWalletConnected', true);
            }
        } catch (ex) {
            console.log(`Connection error: ${ex.message}`);
        }
    }

    useEffect(() => {
        const connectWalletOnPageLoad = async () => {
            if (localStorage?.getItem('isWalletConnected') === 'true') {
                try {
                    await activate(injected)
                    balance = await getBalance();
                    localStorage.setItem('isWalletConnected', true)
                } catch (ex) {
                    console.log(ex.message);
                }
            }
        }
        connectWalletOnPageLoad()
    }, [])



    return (
        <div>
            <h1>Chat</h1>
            <p>Balance: {balance}</p>
        </div>
    );
}

export default Chat;
