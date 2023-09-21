/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
Component Main page of the project, this is the components that contains all the body of the 
web application. 
*/

"use client"
import React from "react"
import { TextArea } from "@/components/TextArea"
import {
  RequestButtom,
  RetrieveButton,
  SaveButton,
} from "@/components/Buttons"
import { useState } from "react"
import Image from "next/image"
import play from '../../public/images/play.png'



const Home = () => {
  /*
    react hook of use state, the state is an array that contains
    The value of the Edition textual Area,the value of the Transpilation Area and
    The value of the Execution output
  */

  const [textareaText, setTextareaText] = useState(["", "", ""])

  const [FileSaved, setFileSaved] = useState("Unsaved Text")

  /*
     Function that changes the The value of the Edition textual Area
  */

  const SetEditionTextualArea = (newText) => {
    setTextareaText([newText, textareaText[1], textareaText[2]])
  }

  /*
    Function that changes the The value of the Transpilation Area
  */

  const handlerSetText = (newText) => {
    const NewText = `${newText.time}\n${newText.text}`
    setTextareaText([textareaText[0], NewText, textareaText[2]])
  }

  const handlerSetText1 = (newText) => {
    const NewText = `${newText}`
    setTextareaText([NewText, textareaText[1], textareaText[2]])
  }

  const regex = /\w+/g

  /*
    Component that contains the REACT (JSX) code of the body the app
  */
  return (
    <main>
      <span className="text-m font-semibold inline-block my-3 mx-3 py-2 px-2 rounded-full text-sky-600 bg-sky-200 last:mr-0 mr-1">
         {FileSaved}
       </span>
       <div className="text-all">
         <div className="text-EA">
           <TextArea
             Area="OFS"
             GetText={SetEditionTextualArea}
             AreaText={textareaText[0]}
           />
           <div className="btns-all">
             <RequestButtom
               afterProcess={handlerSetText}
               url="compile"
               processData={{ text: textareaText[0] }}
             >
               <Image
                 src={play}
                 className="img-play"
               />
             </RequestButtom>
             <SaveButton processData={{ text: textareaText[0] }} url="script" setFileSaved={{ setFile: setFileSaved, fileName: FileSaved }}>

             </SaveButton>
             <RetrieveButton afterProcess={handlerSetText1} setFileSaved={setFileSaved} />
           </div>
         </div>
         <div className="text-TA">
           <TextArea
             Area="JS"
             AreaText={textareaText[1]}
             NotEditable="pointer-events-none"
           />
         </div>
         <div id="the-count" className="container mx-auto inline-block">
           <span id="current">
             Words: {textareaText[0].match(regex)?.length}{"   "}
           </span>
            <span></span>
           <span id="rows">Rows: {textareaText[0].split("\n").length}</span>
         </div>
         <div className="text-RA">
           <TextArea
             Area="Terminal"
             AreaText={textareaText[2]}
             NotEditable="pointer-events-none"
           />
        </div>
      </div>
    </main>
  )
}

export default Home
