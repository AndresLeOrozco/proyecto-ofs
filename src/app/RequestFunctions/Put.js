/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
In this js file we will create and export the POST request function to be used on components.
*/

/*
    PUT request function, it is reusable because of the dynamic url and also dynamic body request
    it returns a value to follows FP behavior avoiding secondary effects
*/

export const Put = async (bodyRequest, url) => {
    console.log("bodyRequest: ", bodyRequest)
    const res = await fetch(`http://localhost:3000/api/${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        next : {revalidate : 0 }
      },
      body: JSON.stringify(bodyRequest)
    })
    console.log("res: ", res) 
    return res
  }