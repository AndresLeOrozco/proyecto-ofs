
export const Get = async () => {
    const res = await fetch("http://localhost:3000/api/about", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    return data
}