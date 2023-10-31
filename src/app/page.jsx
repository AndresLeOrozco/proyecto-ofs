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
import { Get } from "@/app/RequestFunctions/Get";
import { ComboBox } from "@/components/ComboBox";
import { InputFile } from "@/components/InputFile";
import { Alert } from "@/components/Alert";
import { Terminal } from "@/components/Terminal";
import { TranspiledArea } from "@/components/TranspiledArea";


const initialState = {
  textEA: "",
  textTA: "",
  textRA: "",
  textLine: 1,
  inputText: "",
  allScripts: [],
  onSelected: false,
  alertText: "",
  openAlert: false,
  taFileName: "",
  fileSelected: ""
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
    case "setAlertText":
      return { ...state, alertText: action.payload };
    case "setOpenAlert":
      return { ...state, openAlert: action.payload };
    case "setTAfileName":
      return { ...state, taFileName: action.payload };
    case "setSelectedFile":
      return { ...state, fileSelected: action.payload };
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /*
   handleTranspileClick function: Handles the click event for transpiling code.
   If there is text in 'state.textEA', it compiles the text using a POST request, updates the UI with the result, and sets the file name.
   If there is no text in 'state.textEA', it shows an error alert.
 */
  const handleTranspileClick = async () => {
    if (state.textEA) {
      const compiledText = await Post({ text: state.textEA, name: state.inputText }, "compile");
      const name = state.inputText.replace(".ofs", ".js")

      compiledText.code ? dispatch({ type: "setTextTA", payload: "File cannot be compiled" }) : dispatch({ type: "setTextTA", payload: `${compiledText.date} \n ${compiledText.fileContent}` });
      dispatch({ type: "setTAfileName", payload: !state.inputText ? "Unsaved File.js" : `${name}` });
      return
    }
    setAndShowAlert("Error, You must add text in EA to Compile")
  };

  /*
    handleEvalClick function: Handles the click event for evaluating code.
    It sends a POST request to evaluate code and updates the UI with the result.
    If there's an error in the result, it shows an alert.
  */

  const handleEvalClick = async () => {
    if (state.textTA) {
      const terminalText = await Post({ text: state.taFileName }, "eval");
      terminalText.includes("Error") ? setAndShowAlert(terminalText) : dispatch({ type: "setTextRA", payload: terminalText })
      return
    }
    setAndShowAlert("Error, Nothing to Evaluate")
  };

  /*
    handleClearClick function: Handles the click event for clearing/resetting the UI.
    It clears/reset various state variables to their initial values and recovers scripts.
  */

  const handleClearClick = () => {
    dispatch({ type: "setTextEA", payload: "" });
    dispatch({ type: "setTextTA", payload: "" });
    dispatch({ type: "setTextRA", payload: "" });
    dispatch({ type: "setInputText", payload: "" });
    dispatch({ type: "setScripts", payload: [] });
    dispatch({ type: "setTAfileName", payload: "" });
    dispatch({ type: "setOnSelected", payload: false });
    dispatch({ type: "setSelectedFile", payload: "" });
    handleRecoverScript();
  };

  /*
    setAndShowAlert function: Sets an alert message in the UI and displays the alert.
    This function is used to provide user feedback or display error messages.
  */

  const setAndShowAlert = (message) => {
    dispatch({ type: "setAlertText", payload: message });
    dispatch({ type: "setOpenAlert", payload: true });
  };

  /*
    handleRecoverScript function: Handles the recovery of scripts.
    It retrieves scripts using a GET request and updates the state with the retrieved scripts.
  */

  const handleRecoverScript = async () => {
    const scripts = await Get("script");
    console.log(scripts);
    dispatch({ type: "setScripts", payload: scripts });
  };

  /*
    handleSelectFile function: Handles the selection of a file and updates the UI with its content.
    If a file is selected, it fetches its content and updates the editing area.
  */

  const handleSelectFile = async (selected) => {
    const file = selected ? await Get(`script/${selected}`) : selected;
    dispatch({ type: "setTextEA", payload: file.fileContent });
    handleOnSelected(file);
  };

  /*
    handleInputText function: Handles the input of text for a file.
    It updates the state with the text entered in the input field.
  */

  const handleInputText = (file) => {
    dispatch({ type: "setInputText", payload: file });
  };

  /*
    handleComboBoxValue function: Handles the selection of a value in a combo box.
    It updates the state with the selected value from the combo box.
  */

  const handleComboBoxValue = (file) => {
    dispatch({ type: "setSelectedFile", payload: file });
  };

  /*
    handleSaveClick function: Handles the click event for saving code.
    If there is text in 'state.textEA' and a valid file name, it sends a POST request to save the code, updates the UI, and recovers scripts.
    Otherwise, it shows an error alert.
  */

  const handleSaveClick = async () => {
    let message = "Error, Empty EA Area or FileName field";
    if (state.textEA && state.inputText) {
      const nameFile = await Post(state.textEA, `save/${state.inputText}`);
      handleRecoverScript();
      handleOnSelected(state.inputText);
      handleSelectFile(state.inputText);
      handleComboBoxValue(state.inputText)
      message = nameFile;
    }

    setAndShowAlert(message);
  };

  /*
    handleOnSelected function: Handles whether a file is selected or not.
    It updates the state to indicate whether a file is selected for editing or not.
  */

  const handleOnSelected = (text) => {
    text
      ? dispatch({ type: "setOnSelected", payload: true })
      : dispatch({ type: "setOnSelected", payload: false });
  };

  /*
    handleEditClick function: Handles the click event for editing a file's name.
    If a file is selected for editing, it allows renaming, otherwise, it shows an error alert.
  */

  const handleEditClick = () => {
    dispatch({ type: "setOnSelected", payload: false });
    state.fileSelected ?
      setAndShowAlert("You can now edit file name") :
      setAndShowAlert("Error, You cant rename an Unsaved File")
  };

  /*
    handleEditClickOn function: Handles the click event for enabling file name editing.
    It enables the file name editing mode.
  */

  const handleEditClickOn = () => {
    dispatch({ type: "setOnSelected", payload: true });
  };

  /*
    handleRename function: Handles the renaming of a file.
    It clears/reset various state variables, updates the UI, and recovers scripts.
  */



  useEffect(() => {
    handleRecoverScript();
  }, []);

  return (
    <main>
      <ComboBox
        selectedFile={handleSelectFile}
        items={state.allScripts}
        updateInputText={handleInputText}
        setComboBoxValue={handleComboBoxValue}
        recoverScript={handleRecoverScript}
      />
      <InputFile
        onOff={state.onSelected}
        selectedFile={state.inputText}
        updateInputText={handleInputText}
        actualFile={state.fileSelected}
        setOnOff={handleEditClickOn}
        setRename={handleClearClick}
        alert = {setAndShowAlert}
      />
      <div className="text-all">
        <div className="text-EA">
          <TextArea
            Area="OFS"
            GetText={(text) => dispatch({ type: "setTextEA", payload: text })}
            AreaText={state.textEA}
            FileName={state.fileSelected}
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
          <TranspiledArea
            AreaText={state.textTA}
            FileName={state.taFileName}
          />
        </div>

        <div className="text-RA">
          <Terminal
            AreaText={state.textRA}
          />
        </div>
      </div>
      <Alert
        text={state.alertText}
        open={state.openAlert}
        setOpen={(open) => dispatch({ type: "setOpenAlert", payload: open })}
      />
    </main>
  );
};

export default Home;
