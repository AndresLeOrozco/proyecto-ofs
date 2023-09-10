"use client";


const Buttoms = ({name, url}) => 
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <buttom href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer rounded" onClick={() => alert(`${url}/${name}`)}>{name}</buttom> 
    </div>
    



export default Buttoms