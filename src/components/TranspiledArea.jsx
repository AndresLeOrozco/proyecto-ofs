/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
    /**
     * Renders a React component that displays a text area for transpiled JavaScript code.
     * It also includes information about the file, such as line number, row count, column count, and word count.
     *
     * @param {string} AreaText - The transpiled JavaScript code to be displayed in the text area.
     * @param {string} FileName - The name of the file being transpiled.
     * @returns {JSX.Element} - A React component that renders a block with a label, a text area, and file information.
     */

import AreaInformation from "./AreaInformation"


export const TranspiledArea = ({ AreaText = "", FileName = "" }) => {
    const regex = /\w+/g

    return (
        <div className="block w-full mb-2 text-sm font-medium text-gray-400 px-10">
            <div className="bg-gray-800 text-white p-2 border border-white">
                <AreaInformation information={[
                    `Row: ${AreaText.split("\n").length}`,
                    `Words: ${AreaText ? AreaText.match(regex)?.length : 0}`
                ]}
                    fileName={`File: ${FileName}`}
                    AreaName="JS" />
            </div>
            <div className="flex">
                <div className="h-72 relative flex-1 overflow-x-auto overflow-y-auto bg-gray-800">
                    <textarea
                        className="w-full text-sm  bg-gray-800 placeholder-gray-400 text-white ml-10 p-2.5"
                        cols={100}
                        rows={100}
                        id={`ta-JS`}
                        wrap="off"
                        readOnly
                        value={AreaText.replace(`import { Stream, iterate } from "../src/utils/stream.mjs"${'\n'}`, "")}
                        placeholder="Transpiling..."
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