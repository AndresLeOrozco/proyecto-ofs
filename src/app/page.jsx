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
  Button,
  RetrieveButton,
  SaveButton,
} from "@/components/Buttons"
import { useState, useEffect } from "react"
import Image from "next/image"
import play from '../../public/images/play.png'
import evaluate from '../../public/images/evaluation.png'
import clear from '../../public/images/clear.png'
import {Post} from "@/RequestFunctions/Post"

const Home = () => {
  /*
    react hook of use state, the state is an array that contains
    The value of the Edition textual Area,the value of the Transpilation Area and
    The value of the Execution output
  */

  const [textEA, setTextEA] = useState("")
  const [textTA, setTextTA] = useState("")
  const [textRA, setTextRA] = useState("")

  const [FileSaved, setFileSaved] = useState("Unsaved Text")

  /*
     Function that changes the The value of the Edition textual Area
  */

  const SetEditionTextualArea = (newText) => {
    setTextEA(newText)
  }

  /*
    Function that changes the The value of the Transpilation Area
  */

  const handleTranspileClick  = async () => {
    const compiledText = await Post({text : textEA}, 'compile')
    const NewText = `${compiledText.time}\n${compiledText.text}`
    setTextTA(NewText)
  }

  /*
    Function that changes the The value of the Terminal
  */
  const handleEvalClick = async () => {
    const terminalText = await Post({text: "saasd.txt"}, "eval")
    setTextRA(terminalText)
  }


  const regex = /\w+/g

  /*
    Function that set/clear all textareas after click on the ClickButton.
  */

  const handleClearClick = () => {
    setTextEA("")
    setTextTA("")
    setTextRA("")
    setFileSaved("Unsaved Text")
  }


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
             AreaText={textEA}
           />
           <div className="btns-all">
             <Button
               clickEvent={handleTranspileClick}
               title="Compile"
             >
               <Image
                 src={play}
                 className="img-play"
               />
             </Button>
             <Button
               clickEvent={handleEvalClick}
               title="Evaluate"
             >
               <Image
                 src={evaluate}
                 className="img-play"
               />
             </Button>
             <Button
               clickEvent={handleClearClick}
               title = {"Clear"}
             >
               <Image
                 src={clear}
                 className="img-play"
               />
             </Button>
             <SaveButton processData={{ text: textEA }} url="script" setFileSaved={{ setFile: setFileSaved, fileName: FileSaved }} placeholder="Save File">

             </SaveButton>
             <RetrieveButton afterProcess={SetEditionTextualArea} setFileSaved={setFileSaved} placeholder="Load File"/>
           </div>
         </div>
         <div className="text-TA">
           <TextArea
             Area="JS"
             AreaText={textTA}
             NotEditable="pointer-events-none"
           />
         </div>
         <div id="the-count" className="container mx-auto inline-block">
           <span id="current">
             Words: {textEA.match(regex)?.length}{"   "}
           </span>
            <span></span>
           <span id="rows">Rows: {textEA.split("\n").length}</span>
         </div>
         <div className="text-RA">
           <TextArea
             Area="Terminal"
             AreaText={textRA}
             NotEditable="pointer-events-none"
           />
        </div>
      </div>
    </main>
  )
}

/*
    Post request function, it is reusable because of the dynamic url, dynamic function that manage the response data
    and also dynamic body request
*/



export default Home
