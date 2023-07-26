export let notesData = [
    {
        id: 1,
        timeOfCreation: new Date('2023-07-25T12:30:00'),
        noteContent: "Remember to buy groceries on 26/7/2023",
        category: "Task",
    },
    {
        id: 2,
        timeOfCreation: new Date('2023-07-24T18:45:00'),
        noteContent: "Had an interesting idea today!",
        category: "Idea",
    },
    {
        id: 3,
        timeOfCreation: new Date('2023-07-23T09:15:00'),
        noteContent: "What if we implement a new feature?",
        category: "Random Thought",
    },
];

export const removeNoteHandler = (id) => {
    notesData = notesData.filter(note => note.id !== id);
}
