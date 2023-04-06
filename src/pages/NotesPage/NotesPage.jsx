import { useState, useEffect } from "react";
import { checkToken } from "../../utilities/users-service";
import * as notesService from '../../utilities/notes-service';


export default function NotesPage() {

    const [notes, setNotes] = useState([]);

    useEffect(function() {
        async function getNotes() {
            const notes = await notesService.getAllNotes();
            setNotes(notes);
        }
        getNotes();
    }, []);


async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
}

    return (
    <>
        <h1>NotesPage</h1>

        { notes ?
            notes.map(note => <h3>{note.text}</h3>)
            :
            <h3>No Notes Yet!</h3>
        }

        
        <button onClick={ handleCheckToken }>Check When My Login Expires</button>
    </>
    );
}