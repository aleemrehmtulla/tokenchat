import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import Board from './components/board'
export default function Home() {
  return (
    <div className="bg-slate-200 w-screen h-screen">
      <Header />
      <div className='flex justify-center'>
      <Board />
      </div>
    </div>
  )
}
