import Image from 'next/image'
import { Inter } from 'next/font/google'
import Utlansting from '@/components/Utlansting'
import { get } from 'http'
import { use, useState, useEffect } from 'react'
import Topplogo from '@/components/Topplogo'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

interface Item {
  id: number;
}

export default function utlan() {
  const [items, setItems] = useState<Item[]>([]);
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
      setItems(data.items)
    }
    else if (res.status === 400) {
      const data = await res.json()
      console.log(data)
    }
  }


  return (
    <main className='h-screen w-screen overflow-x-hidden'>
      <Sidebar />
      <Topplogo />
      <span className='text-white flex w-screen justify-center text-6xl mt-20 mb-10 font-bold'>Utlånstilbud</span> 
      <div className='flex justify-center w-full h-full'>
        <div className='grid xl:grid-cols-2 gap-5 grid-cols-1'>
        {Array.isArray(items) && items.length > 0 && items.map((item: Item) => (
            <Utlansting key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  )
}
