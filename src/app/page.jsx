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
import React, { useReducer } from "react"
import { TextArea } from "@/components/TextArea"
import {
  Button,
} from "@/components/Buttons"
import { useState, useEffect } from "react"
import Image from "next/image"
import play from '../../public/images/play.png'
import evaluate from '../../public/images/evaluation.png'
import clear from '../../public/images/clear.png'
import { Post } from "@/app/RequestFunctions/Post"
import save from '../../public/images/save.png'
import upload from '../../public/images/upload.png'
import { Get } from "@/app/RequestFunctions/Get"
import { ComboBox } from "@/components/ComboBox"
import { InputFile } from "@/components/InputFile"

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

  const [fileSaved, setFileSaved] = useState("")

  const [allScripts, setScripts] = useState([])
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
    setScripts([])
    handleRecoverScript()
  }


  const handleCursorLine = line => setTextLine(line)


  /*
    This is to recover all the scrips (just name).
   */
  const handleRecoverScript = async () => {
    const scripts = await Get('script')
    setScripts(scripts)
  }

  
  const handleRecoverFile = async (selected) => {
    const file = selected ? await Get(`script/${selected}`) : selected;
    setTextEA(file)
  }
  
  const handleSavedFile = file => setFileSaved(file)
  
  const handleSaveClick = async () => {
    allScripts.includes(fileSaved)? alert("Already Exists!") : await Post(textEA, `script/${fileSaved}`)
    handleRecoverScript()
    
  }
  
  /*
    This useEffect is just to load all the information
    related to the scripts after either reload the page
    or the first time loading.
  */
  useEffect(() => {
    handleRecoverScript()
  }, [])
  

  /*
    Component that contains the REACT (JSX) code of the body the app
  */
  return (
    <main>
      <ComboBox selectedFile={handleRecoverFile} items={allScripts} updateSaved={handleSavedFile} />
      <InputFile scrips = {allScripts} file={fileSaved} updateInput = {handleSavedFile} />
      <div className="text-all">
        <div className="text-EA">
          <TextArea
            Area="OFS"
            GetText={setTextEA}
            AreaText={textEA}
            GetLine={handleCursorLine}
          />
          <div className="btns-all">
            <Button
              clickEvent={handleTranspileClick}
              title="Compile"
            >
              <Image
                src={play}
                alt='This is a play button img'
                className="img-play"
              />
            </Button>
            <Button
              clickEvent={handleEvalClick}
              title="Evaluate"
            >
              <Image
                src={evaluate}
                alt='This is a evaluate button img'
                className="img-play"
              />
            </Button>
            <Button
              clickEvent={handleSaveClick}
              title={"Save"}
            >
              <Image
                src={save}
                alt='This is a save button img'
                className="img-save"
              />
            </Button>
            <Button
              clickEvent={handleClearClick}
              title={"Clear"}
            >
              <Image
                src={clear}
                alt='This is a clear button img'
                className="img-clear"
              />
            </Button>
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
