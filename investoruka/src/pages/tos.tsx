import Image from 'next/image'
import { Inter } from 'next/font/google'
import Topplogo from '@/components/Topplogo'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function tos() {
  return (
    <main className='w-screen text-white overflow-x-hidden'>
        <Sidebar />
        <Topplogo />
        <div className='flex justify-center p-24'>
            <div className='flex flex-col justify-center text-center'>
                <span className='text-6xl font-bold p-10'>Bruksvilkår</span>

                <span className='text-xl font-normal p-2 gap-2'>Velkommen til Oslo Utlån! Vi er glade for at du har valgt å bruke våre tjenester. Før du går videre, ber vi deg vennligst lese gjennom våre bruksvilkår nøye. Ved å bruke vårt nettsted og tjenester, samtykker du i å følge og være bundet av følgende vilkår og betingelser:</span>
                
                <span className='text-3xl font-bold p-10'>1. Aksept av Vilkårene</span>
                <span className='text-xl font-normal p-2 gap-2'>Ved å bruke Oslo Utlåns tjenester, bekrefter du at du har lest, forstått og akseptert disse bruksvilkårene i sin helhet. Hvis du ikke godtar disse vilkårene, ber vi deg vennligst om å avstå fra å bruke våre tjenester.</span>

                <span className='text-3xl font-bold p-10'>2. Tjenestebruk og Ansvar</span>
                <span className='text-xl font-normal p-2 gap-2'>2.1 <span className='text-semibold'>Bruksbegrensninger</span>: Du samtykker i å bruke Oslo Utlåns tjenester kun i samsvar med gjeldende lover og regler. Du skal ikke misbruke, skade eller forstyrre våre tjenester. <br /> <br />2.2 <span className='text-semibold'>Ansvar</span>: Oslo Utlån påtar seg ikke ansvar for tap, skade eller kostnader som oppstår som følge av bruk av våre tjenester eller utlånt utstyr.</span>

                <span className='text-3xl font-bold p-10'>4. Personvern</span>
                <span className='text-xl font-normal p-2 gap-2'>4.1 <span className='text-semibold'>Personvernpraksis</span>: Vi respekterer ditt personvern. Vennligst les vår <a className='text-blue-600' href="personvern">Personvernerklæring</a> for å forstå hvordan vi samler inn, bruker og beskytter dine personopplysninger.</span>

                <span className='text-3xl font-bold p-10'>5. Endringer i Vilkårene</span>
                <span className='text-xl font-normal p-2 gap-2'>Oslo Utlån forbeholder seg retten til å endre disse bruksvilkårene når som helst. Endringer vil bli effektive umiddelbart ved publisering på nettstedet. Det er ditt ansvar å regelmessig gjennomgå vilkårene for å være oppdatert.</span>

                <span className='text-3xl font-bold p-10'>6. Kontakt Oss</span>
                <span className='text-xl font-normal p-2 gap-2'>Har du spørsmål eller bekymringer angående våre bruksvilkår? Ta kontakt med oss <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs" className='text-blue-600'>her</a>. <br /><br />Takk for at du valgte Oslo Utlån! <br /> <br />Dato: 24. Nov - 2023</span>

                <span className='text-xl font-bold p-2 gap-2 hover:underline'><a className='text-blue-600' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs">Kontakt oss her</a> | <a className='text-blue-600' href="tos">Utleiebetingelser</a></span>
            </div>
        </div>
    </main>
  )
}
