
import AreaInformation from "./AreaInformation"


export const TranspiledArea = ({ AreaText = "", FileName = "" }) => {
    const regex = /\w+/g

    const handleTextareaChange = ({ target: { value } }) => {
        GetText(value)
        const text = value
        const words = text.split(/\s+/)
        const lastWord = words[words.length - 1]
        const autoSuggestion = lastWord ? suggest.filter((word) => word.startsWith(lastWord)) : []
        setType(autoSuggestion)
      }
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
                        value={AreaText}
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