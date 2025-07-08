// Fetch all notes
export const getAllNotes = (req, res) => {
    res.status(200).send("All notes fetched");
};

// Create a new note
export const createNote = (req, res) => {
    res.status(201).send("Note created");
};

// Update a note
export const updateNote = (req, res) => {
    res.status(200).send("Note updated");
};

// Delete a note
export const deleteNote = (req, res) => {
    res.status(200).send("note deleted");
};