import fs from 'fs/promises'
const DB_PATH = new URL('../db.json', import.meta.url).pathname;

export const getDB = async ()=>{
     const data = JSON.parse(await fs.readFile(DB_PATH, 'utf-8'));
     return data;
}


export const saveDB = async (db) => {
    await fs.writeFile(DB_PATH, JSON.stringify(db,null,2),'utf-8');
    return db;
}

export const insert =async (note)=>{
    const db  =await getDB();
    db.note.push(note);
    await saveDB(db);
    return note;
}




