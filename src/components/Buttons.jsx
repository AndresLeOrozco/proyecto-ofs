"use client"
import { useRouter } from "next/navigation"



const SimpleButtons = ({ name, url }) => {
    const router = useRouter()
    return (
        <div className="hidden w-full md:block md:w-auto">

            <buttom className="bg-blue-500 hover:cursor-pointer hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() =>
                router.push('http://localhost:3000/about')
            }>
                {name}
            </buttom>

        </div>
    )
}


export default SimpleButtons


