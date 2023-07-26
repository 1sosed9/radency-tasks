import { notesData } from "./notesData.js";
import { renderNotesTable } from "./renderNotesTable.js";
import { renderSummaryTable } from "./renderSummaryTable.js";

// Function to add a new note
export const addNoteHandler = () => {
    const noteContent = document.getElementById("note-content").value.trim();
    const category = document.getElementById("note-category").value;

    if (noteContent === "") {
        alert("Note content cannot be empty!");
        return;
    }

    const id = notesData.length + 1;
    const timeOfCreation = new Date();
    const newNote = {
        id,
        timeOfCreation,
        noteContent,
        category,
        archived: false,
    };
    notesData.push(newNote);

    // Clear input fields
    document.getElementById("note-content").value = "";

    // Update tables
    renderNotesTable();
    renderSummaryTable();
};