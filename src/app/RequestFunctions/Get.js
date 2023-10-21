/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
In this js file we will create and export the Get request functions to be used on components.
*/



export const Get = async (URL) => {
    try {

        const response = await fetch(`http://localhost:3000/api/${URL}`, {
            method: "GET",
            next : {revalidate : 0 }
        })

        if (response !== 'Error') {
            const data = await response.json()
            console.log("Data: ", data)
            return data
        }
    } catch (error) {
        console.error("Error recovering: ", error)
        return ""
    }
}