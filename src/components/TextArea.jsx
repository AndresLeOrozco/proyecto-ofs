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
import { useEffect, useRef } from "react";

export const TextArea = ({
  Area = "",
  GetText = () => { },
  AreaText = "",
  NotEditable = "",
  GetLine,
}) => {
  const textAreaRef = useRef(null);
  let row = AreaText.split("\n").length

  const handleTextareaChange = (event) => {
    GetText(event.target.value)
  }

  const handleKeywordEvent = () => {
    const textArea = textAreaRef.current
    const startPos = textArea.selectionStart
    const line = textArea.value.substr(0, startPos).split("\n").length
    GetLine(line)
  }


  const AreaTextClass = `${NotEditable} w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white ml-10 p-2.5`


  return (
    <div className="block w-full mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 px-10">
      <label
        
        htmlFor={`ta-${Area}`}
        className="block mb-2 text-sm font-medium text-black dark:text-gray-400"
      >
        <strong>{Area}</strong>
      </label>
      <div className="flex">
        <div className="h-72 relative flex-1 overflow-x-auto overflow-y-auto dark:bg-gray-700 ">
          <textarea
            id={`ta-${Area}`}
            ref={textAreaRef}
            spellCheck="false"
            value={AreaText}
            onChange={handleTextareaChange}
            onKeyUp={handleKeywordEvent}
            onClick={handleKeywordEvent}
            onKeyDown={handleKeywordEvent}
            rows={row > 14 ? row : 14}
            cols={20}
            className={AreaTextClass}
            wrap="off"
            overflow-x="auto"
            autoFocus
          ></textarea>
          <div className=" absolute inset-y-0 left-0 pl-2 top-2 text-gray-400">
            {AreaText.split("\n").map((_, index) => (
              <div key={index} className="mb-1 mt-1 text-xs">
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


