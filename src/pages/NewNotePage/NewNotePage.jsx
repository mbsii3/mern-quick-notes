import { useState } from "react";
import * as notesService from "../../utilities/notes-service";

export default function NewNotePage() {

    const [note, setNote] = useState('');

    function handleChange(evt) {
        setNote(evt.target.value);
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const createdNote = await notesService.createNote(note)
        console.log(createdNote)
        setNote('');
    }

    return (
        <>
        <h1>NewNotePage</h1>
        <form action="">
            <label htmlFor="text">Text:
                <input type="text" name="text" id="text" onChange={handleChange} value={note} />
            </label>
            <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
        </>
    );
}