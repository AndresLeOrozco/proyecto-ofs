/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
ComboBox Component
*/

export const ComboBox = ({ items }) => {
    return (
        <div>
            <label for="myComboBox">Select a File:</label>
            <select id="myComboBox" name="fruits">
            {items.map((item) => (
                 <option value = {`${item}`} >{item}</option>
             ))}
            </select>
        </div>
    )
}
