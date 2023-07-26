import { notesData } from "./notesData.js";
import { editNoteHandler } from "./editNoteHandler.js"
import { archiveNoteHandler } from "./archiveNoteHandler.js";
import { renderSummaryTable } from "./renderSummaryTable.js";
import { unarchiveNoteHandler } from "./unarchiveNoteHandler.js";
import { removeNoteHandler } from "./notesData.js";

export const renderNotesTable = () => {
    const notesBody = document.getElementById("notes-body");
    const archivedNotesBody = document.getElementById("archived-notes-body");
    notesBody.innerHTML = "";
    archivedNotesBody.innerHTML = "";

    notesData.forEach(note => {
        const row = document.createElement("tr");
        row.dataset.noteId = note.id;

        const timeOfCreationCell = document.createElement("td");
        timeOfCreationCell.textContent = note.timeOfCreation.toLocaleString();
        row.appendChild(timeOfCreationCell);

        const noteContentCell = document.createElement("td");
        noteContentCell.textContent = note.noteContent;
        row.appendChild(noteContentCell);

        const categoryCell = document.createElement("td");
        categoryCell.textContent = note.category;
        row.appendChild(categoryCell);

        const datesMentionedCell = document.createElement("td");
        const dates = note.noteContent.match(/\d{1,2}\/\d{1,2}\/\d{4}/g);
        datesMentionedCell.textContent = dates ? dates.join(", ") : "";
        row.appendChild(datesMentionedCell);

        const actionsCell = document.createElement("td");

        if (!note.archived) {
            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.addEventListener("click", () => {
                editNoteHandler(note.id);
                renderNotesTable();
            });
            actionsCell.appendChild(editButton);

            const archiveButton = document.createElement("button");
            archiveButton.textContent = "Archive";
            archiveButton.addEventListener("click", () => {
                archiveNoteHandler(note.id);
                renderNotesTable();
                renderSummaryTable();
            });
            actionsCell.appendChild(archiveButton);
        } else {
            const unarchiveButton = document.createElement("button");
            unarchiveButton.textContent = "Unarchive";
            unarchiveButton.addEventListener("click", () => {
                unarchiveNoteHandler(note.id);
                renderNotesTable();
                renderSummaryTable();
            });
            actionsCell.appendChild(unarchiveButton);
        }

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            removeNoteHandler(note.id);
            renderNotesTable();
            renderSummaryTable();
        });
        actionsCell.appendChild(removeButton);

        row.appendChild(actionsCell);

        if (note.archived) {
            archivedNotesBody.appendChild(row);
        } else {
            notesBody.appendChild(row);
        }
    });
};