
export const Get = async (URL) => {
    const res = await fetch(`http://localhost:3000/api/${URL}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    return data
}