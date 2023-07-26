import { notesData } from "./notesData.js";
import { renderNotesTable } from "./renderNotesTable.js";
import { renderSummaryTable } from "./renderSummaryTable.js";

// Function to archive a note
export const archiveNoteHandler = (id) => {
    const note = notesData.find(note => note.id === id);
    if (note) {
        note.archived = true;
        renderNotesTable(); // Update the active notes table
        renderSummaryTable(); // Update the summary table
    }
}