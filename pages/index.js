import Header from './components/header'
import Board from './components/chat/board'
import Footer from './components/footer'
import Mobile from './components/mobile'

export default function Home() {

  return (
    <div className="bg-slate-200 ">
     
  
      <div className='sm:hidden'><Mobile /></div>

      <Header  className="z-50"/>
     
      <div className='flex justify-center pt-4 md:pt-0'><Board /></div>
   
      <Footer />


    </div>
  )
}
