/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
Footer
*/



export const Footer = ({ information, fileNameEA = "No FIle", fileNameTA = "" }) => {
    return (
        <footer className='footer'>
            <div className="container mx-auto flex items-center justify-center">
                <div className='mx-10'>
                    <span>File: {fileNameEA ? fileNameEA : "Unsaved File"} </span>
                </div>
                {information.map((elements, index) => (
                    <div key={index} className="mx-3 text-xs">
                        <span> {elements} </span>
                    </div>
                ))}
                <div className='mx-10'>
                    <span>{fileNameTA ? `Transpile File: ${fileNameTA}` : ""} </span>
                </div>
            </div>
        </footer>
    );

}
export default Footer