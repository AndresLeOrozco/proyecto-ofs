/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
Functional component that renders a container div with flexbox styling and displays area information.
*/

/**
 * 
 * @component
 * 
 * @param {Array} information - An array of strings representing the information to be displayed.
 * @param {string} fileName - The name of the file to be displayed.
 * @param {string} AreaName - The name of the area to be displayed.
 * 
 */

export const AreaInformation = ({ information = [], fileName = "", AreaName = "" }) => {
    return (

        <div className="container mx-auto flex items-leftr justify-left">
            <div className='mx-10'>
                <strong><span>{ AreaName } </span> </strong>
            </div>
            <div className='mx-10'>
                <span>{ fileName } </span>
            </div>
            {information.map((elements, index) => (
                <div key={ index } className="mx-3 text-xs">
                    <span> { elements } </span>
                </div>
            ))}
            
        </div>

    );

}
export default AreaInformation