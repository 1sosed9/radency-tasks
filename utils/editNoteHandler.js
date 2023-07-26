import { notesData } from "./notesData.js";

// Function to edit a note
export const editNoteHandler = (id) => {
    const note = notesData.find(note => note.id === id);
    if (note) {
        const newNoteContent = prompt("Edit note content:", note.noteContent);
        if (newNoteContent !== null) {
            note.noteContent = newNoteContent.trim();
        }
    }
}
