/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
Footer
*/



export const Footer = ({ information }) => {
    return (
        <footer className='footer'>
            <div className="container mx-auto flex items-center justify-center">
                {information.map((elements,index) => (
                    <div key={index} className="mx-3 text-xs">
                        <span> { elements } </span>
                    </div>
                ))}
            </div>
        </footer>
    );

}
export default Footer