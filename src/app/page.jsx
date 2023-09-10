import Image from 'next/image'
import TextArea from '@/components/TextArea'


export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 place-content-stretch h-48 ">
      <div className="px-8">
        <TextArea Area="OFS" />
      </div>
      <div className="px-8">
        <TextArea Area="JS" />
      </div>
      <div className='m-0 p-0 space-x-0 w-screen'>
        <TextArea/>
      </div>
    </div>
  )


}
