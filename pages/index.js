import Head from 'next/head'
import Image from 'next/image'
import Hero from '../component/Hero'
import Header from '../component/Header'



export default function Home() {
  return (
   <div className='bg-gradient-to-r from-cyan-300 to-slate-50'>
    <Header></Header>
<Hero/>
   </div>
  )
}
