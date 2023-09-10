export default async function ABOUT() {
    return (
        alert(await resp().Desarrolladores[0].nombre)
    )
  }

async function resp()  {
    const res = await fetch('/api/about', {
    method: 'GET', 
    headers: {
      'Content-Type':'application/json'
    },
  })
  const data = await res.json(); 
  return data;
}