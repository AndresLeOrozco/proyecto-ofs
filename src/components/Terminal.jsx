



export const Terminal = ({AreaText = ""}) => {

    return (
        <div className="block w-full mb-2 text-sm font-medium text-gray-400 px-10">
          <label
            htmlFor={`ta-Terminal`}
            className="block mb-2 text-sm font-medium text-gray-100"
          >
            <strong>Terminal</strong>
          </label>
          <div className="flex">
            <div className="h-72 relative flex-1 overflow-x-auto overflow-y-auto bg-gray-900">
              <textarea
                className="w-full text-sm bg-gray-900 placeholder-gray-400 text-white ml-10 p-2.5"
                cols={100}
                rows={100}
                id={`ta-Terminal`}
                wrap="off"
                readOnly
                value={AreaText}
                placeholder="This the terminal..."
              ></textarea>
            </div>
          </div>
        </div>
      )
}