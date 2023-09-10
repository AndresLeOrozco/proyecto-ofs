import Link from "next/link"
import Buttoms from "@/components/Buttoms"

const Navbar = () =>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" class="flex items-center">
                <img src="https://www.escinf.una.ac.cr/templates/yootheme/cache/f2/logoESCINF-f2f112bd.png" class="h-20 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">OFS Playground</span>
            </Link>
            <Buttoms/>
            
        </div>
    </nav>

export default Navbar

