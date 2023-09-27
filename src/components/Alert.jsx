/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
Displays a modal with an alert message.
*/

/**
 * @param {string} text - The text content of the alert message.
 * @param {boolean} open - A boolean value indicating whether the modal should be open or closed.
 * @param {function} setOpen - A function to update the `open` state.
 * @returns {JSX.Element|null} - The rendered modal component or `null` if the `open` prop is `false`.
 */


export const Alert = ({ text = "", open = false, setOpen = () => { } }) => {
    
    const closeModal = () => {
        setOpen(false)
    };
    if (!open) {
        return null;
    }

    

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div className='modal-container w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto' style={{ backgroundColor:`${text.includes("Error") ? 'red' : 'green' }`, color: 'white' }} >
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