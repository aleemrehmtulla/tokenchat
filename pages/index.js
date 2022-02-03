import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import Board from './components/board'
import Navbar from './components/navbar'
import Chat from './components/chat'
import { ConnectWallet } from '@3rdweb/react'
export default function Home() {
  return (
    <div className="bg-slate-200 w-screen h-screen">

      <span className='flex justify-end p-8'><ConnectWallet  className=""/></span>


      <Header />
      <div className='flex justify-center'>
      <Board />
      </div>
    </div>
  )
}
