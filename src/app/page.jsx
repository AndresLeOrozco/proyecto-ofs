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
import edit from '../../public/images/edit.png'
import upload from '../../public/images/upload.png'
import { Get } from "@/app/RequestFunctions/Get"
import { ComboBox } from "@/components/ComboBox"
import { InputFile } from "@/components/InputFile"
import Footer from "@/components/Footer"
import { Alert } from "@/components/Alert"

const Home = () => {
  /*
    react hook of use state, the state is an array that contains
    The value of the Edition textual Area,the value of the Transpilation Area and
    The value of the Execution output
  */



  const [textArea, setTextArea] = useState({
    textEA: "",
    textTA: "",
    textRA: "",
  })


  /*
    react hook of use state. This state is to handle hte posisition
    of the textarea line. 
  */

  const [textLine, setTextLine] = useState(1)

  const [inputText, setInputText] = useState("")

  const [allScripts, setScripts] = useState([])

  const [onSelected, setOnSelected] = useState(false)

  const [column, setColumn] = useState(0)

  const [alertText, setAlertText] = useState("")

  const [openAlert, setOpenAlert] = useState(false)




  /*
     Function that changes the The value of the Edition textual Area
  */



  /*
    Function that changes the The value of the Transpilation Area
  */

  const handleTranspileClick = async () => {
    const compiledText = await Post({ text: textArea.textEA }, 'compile')
    const newText = `${compiledText.time}\n${compiledText.text}`
    setTextArea({...textArea, textTA: newText})
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
    const clearText = {...textArea}
    Object.keys(clearText).map((key) => (clearText[key] = ""))
    setTextArea(clearText)
    setInputText("")
    setScripts([])
    handleRecoverScript()
  }

  const setAndShowAlert = (message) => {
    setAlertText(message)
    setOpenAlert(true)
  }


  const handleCursorLine = line => setTextLine(line)


  /*
    This is to recover all the scrips (just name).
   */
  const handleRecoverScript = async () => {
    const scripts = await Get('script')
    setScripts(scripts)
  }


  const handleSelectFile = async (selected) => {
    const file = selected ? await Get(`script/${selected}`) : selected;
    setTextArea({...textArea, textEA: file})
    handleOnSelected(file)
  }

  const handleInputText = file => setInputText(file)

  const handleSaveClick = async () => {
    let message = "Error, Empty EA Area or FileName field"
    if (textArea.textEA && inputText) {
      const nameFile = await Post(textArea.textEA, `script/${inputText}`)
      handleRecoverScript()
      handleOnSelected(inputText)
      handleSelectFile(inputText)
      message = "Succesfully Saved"
    }

    setAndShowAlert(message)

  }

  const handleOnSelected = text => text ? setOnSelected(true) : setOnSelected(false)

  const handleEditClick = () => setOnSelected(false)

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
      <ComboBox selectedFile={handleSelectFile} items={allScripts} updateInputText={handleInputText} />
      <InputFile onOff={onSelected} selectedFile={inputText} updateInputText={handleInputText} />
      <div className="text-all">
        <div className="text-EA">
          <TextArea
            Area="OFS"
            GetText={setTextArea}
            AreaText={textArea.textEA}
            GetLine={handleCursorLine}
            Column={setColumn}
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
              clickEvent={handleEditClick}
              title={"Edit"}
            >
              <Image
                src={edit}
                alt='This is a edit button img'
                className="img-edit"
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
            AreaText={textArea.textTA}
            NotEditable="pointer-events-none"
          />
        </div>

        <div className="text-RA">
          <TextArea
            Area="Terminal"
            AreaText={TextArea.textRA}
            NotEditable="pointer-events-none"
          />
        </div>
      </div>
      <Alert text={alertText} open={openAlert} setOpen={setOpenAlert} />
      <Footer information={[`Words: ${textArea.textEA.match(regex)?.length || 0}`, `Line: ${textLine}`, `Row: ${textArea.textEA.split("\n").length}`, `Col: ${column}`]} />
    </main >
  )
}




export default Home
