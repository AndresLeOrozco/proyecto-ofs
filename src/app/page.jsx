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
import { Post } from "@/app/RequestFunctions/Post"
import save from '../../public/images/save.png'
import upload from '../../public/images/upload.png'
import { GET } from "@/app/RequestFunctions/Get"

const Home = () => {
  /*
    react hook of use state, the state is an array that contains
    The value of the Edition textual Area,the value of the Transpilation Area and
    The value of the Execution output
  */

  const [textEA, setTextEA] = useState("")
  const [textTA, setTextTA] = useState("")
  const [textRA, setTextRA] = useState("")

  /*
    react hook of use state. This state is to handle hte posisition
    of the textarea line. 
  */

  const [teaxtLine, setTextLine] = useState(1)

  const [FileSaved, setFileSaved] = useState("")
  /*
     Function that changes the The value of the Edition textual Area
  */



  /*
    Function that changes the The value of the Transpilation Area
  */

  const handleTranspileClick = async () => {
    const compiledText = await Post({ text: textEA }, 'compile')
    const NewText = `${compiledText.time}\n${compiledText.text}`
    setTextTA(NewText)
  }

  /*
    Function that changes the The value of the Terminal
  */
  const handleEvalClick = async () => {
    const terminalText = await Post({ text: "Siuuuuu.txt" }, "eval")
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
    setFileSaved("")
  }

  const handleInputChange = (event) => {
    setFileSaved(event.target.value)
  }




  /*
    Component that contains the REACT (JSX) code of the body the app
  */
  return (
    <main>
      <div className="inline-block">
        <input type="text" value={FileSaved} placeholder="File Name" onChange={handleInputChange} className="text-m font-semibold inline-block my-3 mx-3 py-2 px-2 rounded-full text-sky-600 bg-sky-200 last:mr-0 mr-1">
        </input>
        <span></span>
      </div>
      <div className="text-all">
        <div className="text-EA">
          <TextArea
            Area="OFS"
            GetText={setTextEA}
            AreaText={textEA}
            GetLine={setTextLine}
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
              title={"Clear"}
            >
              <Image
                src={clear}
                className="img-play"
              />
            </Button>
            <SaveButton processData={{ text: textEA }} url="script" FileSaved={FileSaved} placeholder="Save File">
              <Image className="img-play" src={save}></Image>
            </SaveButton>
            <RetrieveButton afterProcess={setTextEA} FileSaved={FileSaved} placeholder="Load File" >
              <Image className="img-play" src={upload}></Image>
            </RetrieveButton>
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
            Words: {textEA.match(regex)?.length || 0}
          </span>
          <span className="m-1">Ln: {teaxtLine}</span>
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




export default Home
