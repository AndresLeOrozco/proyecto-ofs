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

"use client";
import React, { useReducer } from "react";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/Buttons";
import { useEffect } from "react";
import Image from "next/image";
import play from "../../public/images/play.png";
import evaluate from "../../public/images/evaluation.png";
import clear from "../../public/images/clear.png";
import { Post } from "@/app/RequestFunctions/Post";
import save from "../../public/images/save.png";
import edit from "../../public/images/edit.png";
import upload from "../../public/images/upload.png";
import { Get } from "@/app/RequestFunctions/Get";
import { ComboBox } from "@/components/ComboBox";
import { InputFile } from "@/components/InputFile";
import Footer from "@/components/Footer";
import { Alert } from "@/components/Alert";

const regex = /\w+/g;

const initialState = {
  textEA: "",
  textTA: "",
  textRA: "",
  textLine: 1,
  inputText: "",
  allScripts: [],
  onSelected: false,
  column: 0,
  alertText: "",
  openAlert: false,
  taFileName: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setTextEA":
      return { ...state, textEA: action.payload };
    case "setTextTA":
      return { ...state, textTA: action.payload };
    case "setTextRA":
      return { ...state, textRA: action.payload };
    case "setTextLine":
      return { ...state, textLine: action.payload };
    case "setInputText":
      return { ...state, inputText: action.payload };
    case "setScripts":
      return { ...state, allScripts: action.payload };
    case "setOnSelected":
      return { ...state, onSelected: action.payload };
    case "setColumn":
      return { ...state, column: action.payload };
    case "setAlertText":
      return { ...state, alertText: action.payload };
    case "setOpenAlert":
      return { ...state, openAlert: action.payload };
    case "setTAfileName":
      return { ...state, taFileName: action.payload };
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTranspileClick = async () => {
    if (state.textEA) {
      const compiledText = await Post({ text: state.textEA }, "compile");
      const NewText = `${compiledText.time}\n${compiledText.text}`;
      dispatch({ type: "setTextTA", payload: NewText });
      dispatch({ type: "setTAfileName", payload: !state.inputText ? "Unsaved File.js" : `${ state.inputText }.js`});
      return
    }
    console.log("Llegue")
    setAndShowAlert("Error, You must add text in EA to Compile")
  };

  const handleEvalClick = async () => {
    const terminalText = await Post({ text: "ra_fake.txt" }, "eval");
    terminalText.includes("Error") ? setAndShowAlert(terminalText) : dispatch({ type: "setTextRA", payload: terminalText })
  };

  const handleClearClick = () => {
    dispatch({ type: "setTextEA", payload: "" });
    dispatch({ type: "setTextTA", payload: "" });
    dispatch({ type: "setTextRA", payload: "" });
    dispatch({ type: "setInputText", payload: "" });
    dispatch({ type: "setScripts", payload: [] });
    dispatch({ type: "setTAfileName", payload: "" });
    dispatch({ type: "setColumn", payload: 1 });
    handleRecoverScript();
  };

  const setAndShowAlert = (message) => {
    dispatch({ type: "setAlertText", payload: message });
    dispatch({ type: "setOpenAlert", payload: true });
  };

  const handleCursorLine = (line) => {
    dispatch({ type: "setTextLine", payload: line });
  };

  const handleRecoverScript = async () => {
    const scripts = await Get("script");
    dispatch({ type: "setScripts", payload: scripts });
  };

  const handleSelectFile = async (selected) => {
    const file = selected ? await Get(`script/${selected}`) : selected;
    dispatch({ type: "setTextEA", payload: file });
    handleOnSelected(file);
  };

  const handleInputText = (file) => {
    dispatch({ type: "setInputText", payload: file });
  };

  const handleSaveClick = async () => {
    let message = "Error, Empty EA Area or FileName field";
    if (state.textEA && state.inputText) {
      const nameFile = await Post(state.textEA, `save/${state.inputText}`);
      handleRecoverScript();
      handleOnSelected(state.inputText);
      handleSelectFile(state.inputText);
      message = "Succesfully Saved";
    }

    setAndShowAlert(message);
  };

  const handleOnSelected = (text) => {
    text
      ? dispatch({ type: "setOnSelected", payload: true })
      : dispatch({ type: "setOnSelected", payload: false });
  };

  const handleEditClick = () => {
    dispatch({ type: "setOnSelected", payload: false });
  };

  useEffect(() => {
    handleRecoverScript();
  }, []);

  return (
    <main>
      <ComboBox
        selectedFile={handleSelectFile}
        items={state.allScripts}
        updateInputText={handleInputText}
      />
      <InputFile
        onOff={state.onSelected}
        selectedFile={state.inputText}
        updateInputText={handleInputText}
      />
      <div className="text-all">
        <div className="text-EA">
          <TextArea
            Area="OFS"
            GetText={(text) => dispatch({ type: "setTextEA", payload: text })}
            AreaText={state.textEA}
            GetLine={handleCursorLine}
            Column={(col) => dispatch({ type: "setColumn", payload: col })}
          />
          <div className="btns-all">
            <Button clickEvent={handleTranspileClick} title="Compile">
              <Image
                src={play}
                alt="This is a play button img"
                className="img"
              />
            </Button>
            <Button clickEvent={handleEvalClick} title="Evaluate">
              <Image
                src={evaluate}
                alt="This is a evaluate button img"
                className="img"
              />
            </Button>
            <Button clickEvent={handleSaveClick} title={"Save"}>
              <Image
                src={save}
                alt="This is a save button img"
                className="img"
              />
            </Button>
            <Button clickEvent={handleEditClick} title={"Edit"}>
              <Image
                src={edit}
                alt="This is a edit button img"
                className="img"
              />
            </Button>
            <Button clickEvent={handleClearClick} title={"Clear"}>
              <Image
                src={clear}
                alt="This is a clear button img"
                className="img"
              />
            </Button>
          </div>
        </div>
        <div className="text-TA">
          <TextArea
            Area="JS"
            AreaText={state.textTA}
            NotEditable="pointer-events-none"
          />
        </div>

        <div className="text-RA">
          <TextArea
            Area="Terminal"
            AreaText={state.textRA}
            NotEditable="pointer-events-none"
          />
        </div>
      </div>
      <Alert
        text={state.alertText}
        open={state.openAlert}
        setOpen={(open) => dispatch({ type: "setOpenAlert", payload: open })}
      />
      <Footer
        information={[
          `Words: ${state.textEA.match(regex)?.length || 0}`,
          `Line: ${state.textLine}`,
          `Row: ${state.textEA.split("\n").length}`,
          `Col: ${state.column}`,
        ]
        }
        fileNameEA = { state.inputText }
        fileNameTA = { state.taFileName }
      />
    </main>
  );
};

export default Home;
