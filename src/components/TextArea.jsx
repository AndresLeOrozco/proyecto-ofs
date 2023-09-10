


const TextArea = ({ Area, edit = false }) => {
    if (edit)
        return (
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-black dark:text-black-400">
                    {Area}
                </label>
                <textarea spellCheck="false" rows="17" className="pointer-events-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>

                <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
            </div>
        );
    return(
        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-black dark:text-black-400">
                {Area}
            </label>
            <textarea spellCheck="false" rows="17" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>

            <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
        </div>
    );
};





export default TextArea