



export const TranspiledArea = ({ AreaText = "", FileName = "" }) => {

    return (
        <div className="block w-full mb-2 text-sm font-medium text-gray-400 px-10">
            <label
                htmlFor={`ta-JS`}
                className="block mb-2 text-sm font-medium text-gray-100"
            >
                <strong>JS</strong>
            </label>
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