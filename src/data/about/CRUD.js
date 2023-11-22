/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

*/

import { getAbout } from "../../../prisma/DAO"


export const readAbout = async () => {

    try {
        const about = await getAbout();
        return about;
    } catch (err) {
        console.error("Error reading the about:", err);
        throw err;
    }
}
