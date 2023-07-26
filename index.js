import { addNoteHandler } from "./utils/addNoteHandler.js";
import { renderNotesTable } from "./utils/renderNotesTable.js";
import { renderSummaryTable } from "./utils/renderSummaryTable.js";

// Event listener for adding a new note
document.getElementById("add-note").addEventListener("click", addNoteHandler);

// Initial render
renderNotesTable();
renderSummaryTable();

