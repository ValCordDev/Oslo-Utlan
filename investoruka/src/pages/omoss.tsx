import Image from 'next/image'
import { Inter } from 'next/font/google'
import Topplogo from '@/components/Topplogo'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function omoss() {
  return (
    <main className='w-full text-white'>
        <Sidebar />
        <Topplogo />
        <div className='flex justify-center p-24'>
            <div className='flex flex-col justify-center text-center'>
                <span className='text-6xl font-bold p-10'>Om oss</span>

                <span className='text-xl font-semibold p-5'>Velkommen til Oslo Utlån – Din Pålitelige Partner for Utleie av Fotoutstyr</span>

                <span className='text-xl font-normal p-2 gap-2'>Oslo Utlån er en ledende aktør innen utlån av fotoutstyr, spesialisert i å gi deg tilgang til det nyeste utstyret uten kostnad. Vi tror på at kunst og kreativitet skal være tilgjengelig for alle, uavhengig av økonomiske begrensninger. Derfor har vi forpliktet oss til å gi deg gratis tilgang til førsteklasses kamerakomponenter, kabler og annet relatert utstyr.</span>
                <span className='text-3xl font-bold p-10'>Vår Visjon</span>

                <span className='text-xl font-normal p-2 gap-2'>Vår visjon er å skape en plattform som fremmer kreativitet og kunstnerisk uttrykk ved å eliminere økonomiske hindringer. Oslo Utlån tror sterkt på at alle fortjener sjansen til å utforske sin lidenskap for fotografi og videoproduksjon uten bekymringer for økonomiske begrensninger.</span>

                <span className='text-3xl font-bold p-10'>Gratis Utlån finansiert av Staten</span>
                <span className='text-xl font-normal p-2 gap-2'>Vi er stolte av å være et selskap som mottar støtte fra staten, noe som gjør det mulig for oss å tilby våre tjenester uten kostnad for deg. Dette gjør at vi kan låne ut alt fra avanserte kameraer til nødvendige kabler, alt helt gratis.</span>

                <span className='text-3xl font-bold p-10'>Vårt Utrustede Utstyr</span>
                <span className='text-xl font-normal p-2 gap-2'>Oslo Utlån har et omfattende utvalg av høykvalitets utstyr tilgjengelig for lån. Vårt sortiment inkluderer kamerakomponenter fra anerkjente produsenter, kabler av høy kvalitet og alt annet du måtte trenge for å forbedre dine fotografiske ferdigheter.</span>

                <span className='text-3xl font-bold p-10'>Bærekraft og Gjenbruk</span>
                <span className='text-xl font-normal p-2 gap-2'>Vi forplikter oss også til å være en bærekraftig aktør ved å oppmuntre til gjenbruk av utstyr. Ved å låne ut brukt utstyr, reduserer vi ikke bare økonomiske barrierer, men bidrar også til å redusere miljøavtrykket forbundet med produksjon av nytt utstyr.</span>

                <span className='text-3xl font-bold p-10'>Kontakt Oss</span>
                <span className='text-xl font-normal p-2 gap-2'>Oslo Utlån er her for å støtte deg i din kreative reise. Ta gjerne kontakt med oss for spørsmål, utlån eller bare for å slå av en prat. Vi ser frem til å hjelpe deg med å realisere dine fotografiske drømmer!</span>

                <span className='text-xl font-bold p-2 gap-2 hover:underline'><a className='text-blue-600' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs">Kontakt oss her</a> | <a className='text-blue-600' href="tos">Utleiebetingelser</a></span>
            </div>
        </div>
    </main>
  )
}
