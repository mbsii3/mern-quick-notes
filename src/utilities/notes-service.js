import * as notesAPI from './notes-api';

export async function createNote(noteData) {
    const newNote = await notesAPI.createNoteRequest(noteData)
    return newNote
}