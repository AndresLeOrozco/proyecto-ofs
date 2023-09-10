import InfoModal from "@/components/InfoModal";


export default async function About() {
    const data = await resp();
    return (
        <InfoModal data = {data}></InfoModal>
    )
}

async function resp() {
    const res = await fetch('http://localhost:3000/api/about', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const data = await res.json();
    return data;
}