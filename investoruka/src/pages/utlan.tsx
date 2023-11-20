import Image from 'next/image'
import { Inter } from 'next/font/google'
import Utlansting from '@/components/Utlansting'

const inter = Inter({ subsets: ['latin'] })

export default function utlan() {
  return (
    <main className='w-full'>
      <span className='text-white flex w-screen justify-center text-6xl mt-20 mb-10 font-bold'>Utlånstilbud</span> 
      <div className='flex justify-center w-full h-screen'>
        <div className='grid lg:grid-cols-2 grid-cols-1'>
          <Utlansting />
          <Utlansting />
          <Utlansting />
          <Utlansting />
          <Utlansting />
          <Utlansting />
          <Utlansting />
          <Utlansting />
          <Utlansting />
          <Utlansting />
          <Utlansting />
          <Utlansting />
        </div>
      </div>
    </main>
  )
}
