import '../styles/globals.css'
import { ThirdwebProvider } from "@3rdweb/react";
function MyApp({ Component, pageProps }) {
  const supportedChainIds = [1, 4, 137];

  /**
   * Include the connectors you want to support
   * injected - MetaMask
   * magic - Magic Link
   * walletconnect - Wallet Connect
   * walletlink - Coinbase Wallet
   */
  const connectors = {
    injected: {},
    magic: {
      apiKey: "pk_...", // Your magic api key
      chainId: 1, // The chain ID you want to allow on magic
    },
    walletconnect: {},
    walletlink: {
      appName: "thirdweb - demo",
      url: "https://thirdweb.com",
      darkMode: false,
    },
  };

  const number = typeof window !== `undefined` ? window.location.search.replace('?', '') : ``;
  return number === `LFG` || number === "VITA" || number === "BAE" || number === "DAI" ? ( 
  
    <ThirdwebProvider 
    connectors={connectors} 
    supportedChainIds={supportedChainIds}
  >
    <div className='bg-slate-200 w-screen h-screen'>
  <Component {...pageProps} />
  </div>
  </ThirdwebProvider>
  
  ) : (
    <div className='bg-slate-200 w-screen h-screen'>
    <div>sss</div>
    </div>
  )
}

export default MyApp
