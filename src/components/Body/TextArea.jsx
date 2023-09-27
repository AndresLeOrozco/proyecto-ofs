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
import { Get } from "@/app/RequestFunctions/Get";
import { useEffect, useRef, useState } from "react";
import { AreaInformation } from "../AreaInformation";

export const TextArea = ({
  Area = "",
  GetText = () => { },
  AreaText = "",
  FileName = ""
}) => {
  const [suggest, setSuggest] = useState([])
  const [type, setType] = useState([])
  const textAreaRef = useRef(null)
  const [fileInfo, setFileInfo] = useState({
    line: 1,
    row: AreaText.split("\n").length,
    col: 1,
  });
  
  let row = AreaText.split("\n").length

  const handleTextareaChange = ({ target: { value } }) => {
    GetText(value)
    const text = value
    const words = text.split(/\s+/)
    const lastWord = words[words.length - 1]
    const autoSuggestion = lastWord? suggest.filter((word) => word.startsWith(lastWord)) : []
    setType(autoSuggestion)

  }

  const loadSuggest = async () => {
    const keywordList = await Get('keywords')
    const keywords = JSON.parse(keywordList)
    setSuggest(keywords.keywords)
  }

  useEffect(() => {
    loadSuggest()
    console.log(suggest)
  }, [suggest === ""])

  const handleKeyboardEvent = ({key}) => {
    key === 'Tab' ? event.preventDefault() : null
    const textArea = textAreaRef.current
    const startPos = textArea.selectionStart
    const line = textArea.value.substr(0, startPos).split("\n").length
    setFileInfo({
      line: line,
      row: row,
      col: startPos - textArea.value.lastIndexOf('\n', startPos - 1),
    });
    
  }



  const handleSuggestButton = ({ target: { value } }) => {
    const textArea = textAreaRef.current
    const current = textArea.value
    const wordsArray = current.split(' ')
    const joinText = wordsArray.slice(0, -1).join(' ')
    const newText = joinText + " " + value
    setType([])
    GetText(newText)
    textArea.focus()
  }

  return (
    <div className="block w-full mb-2 text-sm font-medium text-gray-400 px-10">
      <label
        htmlFor={`ta-${Area}`}
        className="block mb-2 text-sm font-medium text-gray-100"
        >
        <strong>{Area}</strong>
      </label>
      <div className="bg-gray-800 text-white p-2 border border-white">
        <AreaInformation information={[
          `Line: ${fileInfo.line}`,
          `Row: ${fileInfo.row}`,
          `Col: ${fileInfo.col}`,
          `Words: ${AreaText ? AreaText.match(regex)?.length : 0}`
        ]}
        fileName={`File: ${FileName}`} />
      </div>
      <div className="flex">
        <div className="h-72 relative flex-1 overflow-x-auto overflow-y-auto bg-gray-800 ">
          <textarea
            id={`ta-${Area}`}
            ref={textAreaRef}
            spellCheck="false"
            value={AreaText}
            onChange={handleTextareaChange}
            onKeyUp={handleKeyboardEvent}
            onClick={handleKeyboardEvent}
            onKeyDown={handleKeyboardEvent}
            rows={row > 14 ? row : 14}
            cols={20}
            className="w-full text-sm bg-gray-800 placeholder-gray-400 text-white ml-10 p-2.5"
            wrap="off"
            overflow-x="auto"
            placeholder="Writting..."
            autoFocus
            ></textarea>
          <div className=" absolute inset-y-0 left-0 pl-2 top-2 text-gray-400">
            {AreaText.split("\n").map((_, index) => (
              <div key={index} className="mb-1 mt-1 text-xs">
                {index + 1}
              </div>
            ))}
            <div>
              {type.map((word, index) => (
                <button key={`btn-${index}`} value={word} onClick={handleSuggestButton} className="m-1 bg-gray-700 text-gray-100">{word}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
