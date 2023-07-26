import { notesData } from "./notesData.js";
import { renderNotesTable } from "./renderNotesTable.js";
import { renderSummaryTable } from "./renderSummaryTable.js";

// Function to unarchive a note
export const unarchiveNoteHandler = (id) => {
    const note = notesData.find(note => note.id === id);
    if (note) {
        note.archived = false;
        renderNotesTable(); // Update the active notes table
        renderSummaryTable(); // Update the summary table
    }
}