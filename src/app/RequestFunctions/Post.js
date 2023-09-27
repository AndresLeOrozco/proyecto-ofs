/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
In this js file we will create and export all the request functions to be used on components.
*/

/*
    Post request function, it is reusable because of the dynamic url and also dynamic body request
    it returns a value to follows FP behavior avoiding secondary effects
*/

export const Post = async (bodyRequest, url) => {

  try{
    const response = await fetch(`http://localhost:3000/api/${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyRequest)
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