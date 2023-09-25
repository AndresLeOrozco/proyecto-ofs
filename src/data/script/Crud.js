import fs from "fs/promises"
import path from "path"
export const ReadAllFiles = async () => {

    const filePath = path.join(process.cwd(), "private")

    try {
        const files = await fs.readdir(filePath);
        return files;
    } catch (err) {
        console.error("Error al leer la carpeta:", err);
        throw err;
    }
}

export const ReadFileByName = async (name) => {
    const filePath = path.join(process.cwd(), "private", name)
    try {
        const fileContent = await fs.readFile(filePath, "utf-8")
        return fileContent;
    } catch (err) {
        throw("ERROR, no such file or directory");
    }
}

export const WriteFileByName = async (name, content) => {

    let message = ""

    const filePath = path.join(process.cwd(), "private", name)

    try {
        fs.access(filePath, fs.constants.F_OK)
            .then(() => {
                message = " Existed File, Successfully overwrited"
            })
            .catch((err) => {
                message = " Successfully Saved"
            })

        await fs.writeFile(filePath, content, "utf-8")
        console.log(message)
        return message;
    } catch (err) {
        return("Error writting at: ", err);
    }
}