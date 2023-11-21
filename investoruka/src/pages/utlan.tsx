import Image from 'next/image'
import { Inter } from 'next/font/google'
import Utlansting from '@/components/Utlansting'
import { get } from 'http'
import { use, useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

interface Item {
  id: number;
}

export default function utlan() {
  const [items, setItems] = useState<Item[] | null>(null);
  useEffect(() => {
    getItems()
  }, [])
  useEffect(() => {
    console.log(items)
  }, [items])

  const getItems = async () => {
    const res = await fetch('http://localhost:3001/getItems', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.status === 200) {
      const data = await res.json()
      setItems(data)
    }
    else if (res.status === 400) {
      const data = await res.json()
      console.log(data)
    }
  }


  return (
    <main className='w-full'>
      <span className='text-white flex w-screen justify-center text-6xl mt-20 mb-10 font-bold'>Utlånstilbud</span> 
      <div className='flex justify-center w-full h-screen'>
        <div className='grid lg:grid-cols-2 gap-5 grid-cols-1'>
          {items && items.map((item: any) => (
            <Utlansting key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  )
}
