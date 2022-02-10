import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import Board from './components/chat/board'
import { ConnectWallet } from '@3rdweb/react'
import Footer from './components/footer'
import { useWeb3 } from '@3rdweb/hooks'
import Mobile from './components/mobile'
import Web3 from "web3";

// const provider = "https://mainnet.infura.io/v3/074309fd7ff64c548badbd786db4b1c6"
//     const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));

export default function Home() {
  const { address, provider } = useWeb3();
  // const Web3Client = new Web3(window.ethereum);
  // async function Verify() {
  //   console.log(address)

  //   const sig = await Web3Client.eth.sign(Web3Client.utils.sha3("Some text"), address)
  //   console.log(sig);
  

  // }
  return (
    <div className="bg-slate-200 ">
     
    
   <div className=' sm:hidden'>  <Mobile /></div>
      <Header  className="z-50"/>
     
      <div className='flex justify-center pt-4 md:pt-0'><Board /></div>
   
      <Footer />




    </div>
  )
}
