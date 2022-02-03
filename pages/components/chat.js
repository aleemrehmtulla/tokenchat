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
        <main className="h-screen bg-gray-200 flex justify-center">
            <div className="c-box">
                <div class="c-messages">
                    <div class="c-message">
                        <div class="c-message__left">
                            <div class="c-picture">
                                <img class="c-image" src="https://i.pravatar.cc/50" alt="example.eth" />
                            </div>
                        </div>
                        <div class="c-message__right">
                            <div class="c-info">
                                <span class="c-ens bg-blue-100 text-blue-600">example.eth</span>
                                <span class="c-address text-gray-800">0xabcd</span>
                                <span class="c-timestamp text-gray-600">Today at 1:00 PM</span>
                            </div>
                            <span class="c-body">
                                This is an example message...
                            </span>
                        </div>
                    </div>
                </div>
                <div class="c-input bg-gray-100">
                    <input class="c-field" type="text" placeholder="Write a message..." />
                    <button>Send</button>
                </div>
            </div>
        </main>
    );
}

export default Chat;
