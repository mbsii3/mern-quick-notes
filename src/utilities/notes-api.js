import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export function addNoteRequest(noteData) {
    const newNote = {text: noteData}
    return sendRequest(BASE_URL, 'POST', newNote);
  }