import Head from 'next/head'
import Image from 'next/image'
import Hero from '../component/Hero'
import Header from '../component/Header'



export default function Home() {
  return (
   <div className='pb-40 bg-gradient-to-r from-yellow-100 to-amber-300 w-auto h-auto'>
    <Header/>
<Hero/>
   </div>
  )
}
