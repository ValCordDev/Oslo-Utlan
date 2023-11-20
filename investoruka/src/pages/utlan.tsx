import Image from 'next/image'
import { Inter } from 'next/font/google'
import Utlansting from '@/components/Utlansting'

const inter = Inter({ subsets: ['latin'] })

export default function utlan() {
  return (
    <main className='h-auto bg-[#232323]'>
      <div className='flex justify-center w-full h-screen'>
        <div className='grid grid-cols-2'>
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
