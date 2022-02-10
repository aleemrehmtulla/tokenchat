import '../styles/globals.css'
import { ThirdwebProvider } from "@3rdweb/react";
import Redirect from './components/redirect';
function MyApp({ Component, pageProps }) {
  const supportedChainIds = [1, 4, 137];

  const connectors = {
    injected: {},
    walletconnect: {},
    walletlink: {
      appName: "thirdweb - demo",
      url: "https://thirdweb.com",
      darkMode: false,
    },
  };

  const number =
    typeof window !== `undefined`
      ? window.location.search.replace("?", "")
      : ``;
  return number === `LFG` ||
    number === "VITA" ||
    number === "BAE" ||
    number === "DAI" ? (
    <ThirdwebProvider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <div className="bg-slate-200 w-screen ">
        <div className="bg-slate-200 h-f">
          <Component {...pageProps} />
        </div>
      </div>
    </ThirdwebProvider>
  ) : (
    <div className="bg-slate-200 w-screen h-screen">
      <Redirect />
    </div>
  );
}

export default MyApp;
