import { notesData } from "./notesData.js";

// Function to render summary table
export const renderSummaryTable = () => {
    const summaryBody = document.getElementById("summary-body");
    summaryBody.innerHTML = "";

    const categories = ["Task", "Random Thought", "Idea"];
    categories.forEach(category => {
        const row = document.createElement("tr");

        const categoryCell = document.createElement("td");
        categoryCell.textContent = category;
        row.appendChild(categoryCell);

        const activeCountCell = document.createElement("td");
        const activeCount = notesData.filter(note => note.category === category && !note.archived).length;
        activeCountCell.textContent = activeCount;
        row.appendChild(activeCountCell);

        const archivedCountCell = document.createElement("td");
        const archivedCount = notesData.filter(note => note.category === category && note.archived).length;
        archivedCountCell.textContent = archivedCount;
        row.appendChild(archivedCountCell);

        summaryBody.appendChild(row);
    });
};