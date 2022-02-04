import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import Board from './components/chat/board'
import { ConnectWallet } from '@3rdweb/react'
import Footer from './components/footer'
export default function Home() {
  return (
    <div className="bg-slate-200 ">
     
    
     
      <Header  className="z-50"/>
     
      <div className='flex justify-center'><Board /></div>
   
      <Footer />
    </div>
  )
}
