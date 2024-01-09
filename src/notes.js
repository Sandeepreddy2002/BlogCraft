import { getDB,insert,saveDB } from "./db.js";



export const getAllNotes notes = async ()=>{
    const db = await getDB();
    return db.notes;
}





