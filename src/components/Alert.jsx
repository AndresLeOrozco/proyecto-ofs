/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
Alert modal
*/

import { useEffect, useState } from "react";

/* It receives 2 props:
type : type of the modal, could be, warning = 1, succesfuly = 2 , error = 3
text : text that will be show at de modal
*/

export const Alert = ({ type, text, open, setOpen }) => {
    const closeModal = () => {
        setOpen(false)
    };
    if (!open) {
        return null;
    }

    const AlertType = `modal-container bg-${type}-500 text-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto`

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div className={AlertType}>
                <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold">Alert!</p>
                        <span className="modal-close cursor-pointer" onClick={closeModal}>
                            &times;
                        </span>
                    </div>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );

}