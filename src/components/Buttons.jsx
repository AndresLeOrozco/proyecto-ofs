/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
Reusable Buttom Component for: Compile, Evaluate, Save, Edit, Clear Buttons
*/

/**
 * @param {ReactNode} children - The content to be displayed inside the button.
 * @param {function} clickEvent - The event handler function to be executed when the button is clicked.
 * @param {string} title - The title attribute of the button element.
 * @returns {JSX.Element} - The rendered button element.
 */


"use client"

export const Button = ({ children, clickEvent, title }) => {
    return (
        <buttom
            className="btn-clear"
            onClick={clickEvent}
            title={title}
        >
            {children}
        </buttom>
    )
}

