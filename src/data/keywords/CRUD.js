/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

*/

import { getKeywords } from "../../../prisma/DAO"


export const readKeywords = async () => {

    try {
        const keywords = await getKeywords();
        return keywords[0];
    } catch (err) {
        console.error("Error reading the keywords:", err);
        throw err;
    }
}
