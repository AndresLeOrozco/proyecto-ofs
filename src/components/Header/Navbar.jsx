/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
Returns a navigation bar component.
*/

import Link from "next/link"
import { About } from "./Modals"
import Image from "next/image"
import escinf from "../../../public/images/ESCINF.png"
const Navbar = () => {

  return (
    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src={escinf}
            width={100}
            height={100}
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white mx-5">
            OFS Playground
          </span>
        </Link>
        <div className="flex">
          <Link href="../service">
            <button className="bg-auto-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button">
              Services
            </button>
          </Link>
          <About />
        </div>
      </div>
    </nav>
  )
}


export default Navbar
