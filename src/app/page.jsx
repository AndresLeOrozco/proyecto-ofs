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
import React from 'react'
import { TextArea } from '@/components/TextArea'
import { RequestButtom , RetrieveButton, SaveButton} from '@/components/Buttons'
import { useState } from "react"


const Home = () => {
  /*
    react hook of use state, the state is an array that contains
    The value of the Edition textual Area,the value of the Transpilation Area and
    The value of the Execution output
  */

  const [textareaText, setTextareaText] = useState(['', '', '']);

  /*
     Function that changes the The value of the Edition textual Area
  */

  const SetEditionTextualArea = (newText) => {
    setTextareaText([newText, textareaText[1], textareaText[2]]);
  };

  /*
    Function that changes the The value of the Transpilation Area
  */

  const handlerSetText = (newText) => {
    const NewText = `${newText.time}\n${newText.text}`
    setTextareaText([textareaText[0], NewText, textareaText[2]]);
  };

  const handlerSetText1 = (newText) => {
    const NewText = `${newText}`
    setTextareaText([NewText, textareaText[1], textareaText[2]]);
  };

  /*
    Component that contains the REACT (JSX) code of the body the app
  */
  return (
    <main>
      <div className="grid grid-cols-3 gap-4 place-content-stretch h-48 ">
        <div className="px-1">
          <TextArea Area="OFS" GetText={SetEditionTextualArea} AreaText={textareaText[0]} />
          <div className="flex p-5 space-x-4">
            <SaveButton processData={{ text: textareaText[0] }} url='script'>Save</SaveButton>
            <RetrieveButton afterProcess={handlerSetText1}></RetrieveButton>
           </div>
          <div id="the-count">
            <span id="current">Chars: {textareaText[0].length}</span>
            <span id="maximum"></span>
          </div>Í
        </div>
        <div className="block items-center justify-center mx-0 pt-4">
          <RequestButtom afterProcess={handlerSetText} url='compile' processData={{ text: textareaText[0] }}>
            Compilar
          </RequestButtom>
        </div>
        <div className="px-1">
          <TextArea Area="JS" AreaText={textareaText[1]} NotEditable="pointer-events-none" />
        </div>
        <div className='m-0 p-0 space-x-0 w-screen'>
          <TextArea AreaText={textareaText[2]} NotEditable="pointer-events-none" />
        </div>
      </div>
    </main>
  )
}

export default Home
