import Link from "next/link"
import Buttoms from "@/components/Buttoms"

const Navbar = () =>
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center">
                <img src="https://www.escinf.una.ac.cr/templates/yootheme/cache/f2/logoESCINF-f2f112bd.png" className ="h-20 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">OFS Playground</span>
            </Link>
            <Buttoms url = "http://localhost:3000" name = 'About'/>
        </div>
    </nav>

export default Navbar

