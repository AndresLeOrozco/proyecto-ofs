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

  const res = await fetch(`http://localhost:3000/api/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyRequest)
  })

  const data = await res.json()
  return data
}