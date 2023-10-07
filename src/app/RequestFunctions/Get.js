/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
In this js file we will create and export the Get request functions to be used on components.
*/


/*
  Get function: Performs an HTTP GET request to a specified URL and returns the response data.
*/

export const Get = async (URL) => {
    try {

        const response = await fetch(`http://localhost:3000/api/${URL}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-store"
            },
        })

        if (response !== 'Error') {
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.error("Error recovering: ", error)
        return ""
    }
}