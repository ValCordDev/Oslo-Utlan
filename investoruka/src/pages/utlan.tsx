import Image from 'next/image'
import { Inter } from 'next/font/google'
import Utlansting from '@/components/Utlansting'

const inter = Inter({ subsets: ['latin'] })

export default function utlan() {
  const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  return (
    <main className='w-full'>
      <span className='text-white flex w-screen justify-center text-6xl mt-20 mb-10 font-bold'>Utlånstilbud</span> 
      <div className='flex justify-center w-full h-screen'>
        <div className='grid lg:grid-cols-2 gap-5 grid-cols-1'>
          {array.map((item, index) => (
            <Utlansting key={item} />
          ))}
        </div>
      </div>
    </main>
  )
}
