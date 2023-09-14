/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
TextArea Component that contains a text area and its label.
*/


/*
    the TextArea have four properties: 
    Area = string inside the label that gives a name to the textarea.
    GetText = Function that recover all the text inside the textarea each time the area is modified.
    AreaText = string that set the value of the textarea.   
    NotEditable  string which is added to the classname of the textarea, it is used mainly to set 
    the text area as read only
*/
export const TextArea = ({ Area = '' , GetText = () => {} , AreaText = '', NotEditable = ''}) => {
    const handleTextareaChange = (event) => {
        GetText(event.target.value)
    };
    const AreaTextClass = `${NotEditable} block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
    return (
        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-black dark:text-black-400">
                {Area}
            </label>
            <textarea spellCheck="false" value={AreaText} onChange={handleTextareaChange} rows="17" className = {AreaTextClass}  ></textarea>
        </div>
    );
};

