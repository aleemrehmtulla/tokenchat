import { useWeb3React } from "@web3-react/core"
import { useEffect } from "react"
import Web3 from "web3";
import { injected } from "./wallet/connectors"


function Navbar() {
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
    const tokenAddress = "0x9500b696F00AE82CA97d06379CF0A2b60B467040";
    let balance = 0;

    const contract = new Web3Client.eth.Contract(minABI, tokenAddress);

    async function getBalance() {
        if (!!active) {
            const result = await contract.methods.balanceOf(account).call(); // 29803630997051883414242659

            const format = Web3Client.utils.fromWei(result); // 29803630.997051883414242659

            console.log(format);
            return format;
        } else {
            return 0;
        }
    }

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
        <nav className=" bg-white flex justify-end pb-2 pt-2">

            <div className="flex flex-wrap overflow-hidden mr-5">
                <div className="overflow-hidden mr-4">
                    <button onClick={connect} id="main-button" className=" text-lg font-bold p-2 text-white rounded-lg bg-blue-600 hover:bg-blue-800">
                        {active ? <span>{(typeof account !== `undefined` && account != false) && (account.substring(0, 6) + "..." + account.substring(account.length - 4, account.length))}</span> : <span>Connect to MetaMask</span>}
                    </button>
                </div>
                <div className="overflow-hidden px-5 p-2 text-lg font-bold text-white rounded-lg bg-blue-600 hover:bg-blue-800">
                    {balance} $LFG

                </div>
            </div>

        </nav >
    );
}
export default Navbar;