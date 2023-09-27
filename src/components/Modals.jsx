/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
Modal Components 
*/


"use client"
import { useState } from "react"
import { Get } from "@/app/RequestFunctions/Get"


/*
    About Button
*/

export const About = () => {
    const [showModal, setShowModal] = useState(false)
    const [users, setUsers] = useState([])
    const [information, setInformation] = useState(null)

    const handleClick = async () => {
        const getAbout = await Get('about')
        const data = JSON.parse(getAbout)
        setUsers(data.Developers)
        setInformation(data.Information)
    }
    return (
        <>
            <button
                className="bg-auto-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={async () => {
                    await handleClick()
                    setShowModal(true)
                }}
            >
                About
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                
                                {/*Information*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">Información General</h3>
                                    </div>
                                    <div className="relative p-6 flex-auto">
                                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                            <b>Universidad: </b>{information.Universidad}
                                        </p>
                                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                            <b>Escuela:</b> {information.Escuela}
                                        </p>
                                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                            <b>Ciclo:</b> {information.Ciclo}
                                        </p>
                                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                            <b>Nombre del curso:</b>  {information["Curso"]}
                                        </p>
                                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                            <b>Nombre del Proyecto:</b> {information["Proyecto"]}
                                        </p>
                                    </div>
                              
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">Developers</h3>

                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                             
                                    {users.map((user, index) => (
                                        <p key={index} className="my-4 text-slate-500 text-lg leading-relaxed">
                                            <b>Name:</b> {user.name}  -  <b>Skills:</b> {user.skills}
                                        </p>
                                    ))}
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setShowModal(false)
                                        }}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}
