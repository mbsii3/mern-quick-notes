import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export function getNotesRequest() {
  return sendRequest(BASE_URL)
}

export function createNoteRequest(noteData) {
    const newNote = {text: noteData}
    return sendRequest(BASE_URL, 'POST', newNote);
  }