export default async function ABOUT() {
  const data = await resp();
    return (
        <h1>{data.Desarrolladores[0].nombre}</h1>
    )
  }

async function resp()  {
    const res = await fetch('http://localhost:3000/api/about', {
    method: 'GET', 
    headers: {
      'Content-Type':'application/json'
    },
  })
  const data = await res.json(); 
  return data;
}