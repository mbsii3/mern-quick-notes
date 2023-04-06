import { useState } from "react";

export default function NewNotePage() {

    const [note, setNote] = useState('');

    function handleChange(evt) {
        setNote(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        alert('clicked')
    }

    return (
        <>
        <h1>NewNotePage</h1>
        <form action="">
            <label htmlFor="text">Text:
                <input type="text" name="text" id="text" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
        </>
    );
}