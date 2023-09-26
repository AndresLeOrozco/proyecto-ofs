/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
Component Main container of the project, it establish the static structure wich all the other 
components will inherit
*/

export const Home = () => {
    return (
            <div class="bg-white p-6 rounded-lg shadow-md flex">
                <div class="flex-shrink-0">
                    <img src="https://static.vecteezy.com/system/resources/previews/000/599/492/original/technology-logo-icon-vectors.jpg" alt="Imagen pequeña" class="w-16 h-16 rounded-full" />
                </div>
                <div class="ml-4">
                    <h1 class="text-2xl font-semibold">Our Services</h1>
                    <p class="text-gray-700">Aquí puedes colocar tu información relevante.</p>
                </div>
            </div>
    )
}
export default Home