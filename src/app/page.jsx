import Image from 'next/image'
import TextArea from '@/components/TextArea'


export default function Home() {
  return (
    <>
    <div className="flex">
      <div className="flex-1 px-8">
        <TextArea Area="OFS" />
      </div>
      <div className="flex-1 px-8">
        <TextArea Area="JS" />
      </div>
    </div>
    <div className='mt-8'>
    <TextArea />
    </div>
    </>
  )


}
