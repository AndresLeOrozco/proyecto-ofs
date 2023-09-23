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
    Post request function, it is reusable because of the dynamic url, dynamic function that manage the response data
    and also dynamic body request
*/

export const Post = async (bodyReq, url, callback) => {
    const res = await fetch(`http://localhost:3000/api/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyReq)
    })

    callback(await res.json())
}