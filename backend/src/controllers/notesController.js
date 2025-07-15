import Note from "../model/Note.js"

// Fetch all notes
export const getAllNotes = async (_, res) => {
    try {
        const notes = await Note.find().sort({createdAt:-1}) // to show note post new one first
        res.status(200).json(notes)

    } catch (error) {
        console.error("Error in Get Notes", error)
        res.status(500).json({ message: "Internal server error" })
    }
};

// fetch note by id
export const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id)
        if(!note) return res.status(404).json({message: "Note not found"})
            res.json(note)
    } catch (error) {
        console.error("Error in getNote", error)
        res.status(500).json({message: "Internal server error"})
    }
}

// Create a new note
export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body
        const newNote = new Note({ title, content })

        const saveNote = await newNote.save()
        res.status(201).json(saveNote)
    } catch (error) {
        console.error("Error in Create Notes", error)
        res.status(500).json({ message: "Internal server error" })
    }
};

// Update a note
export const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true})
        if (!updatedNote) return res.status(404).json({ message: "Note not found" })
        res.status(200).json(updatedNote)
    } catch (error) {
        console.error("Error in Update Notes", error)
        res.status(500).json({ message: "Internal server error" })
    }
};

// Delete a note
export const deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote) return res.status(404).json({message: "Note not found"})
        res.status(200).json({message:"Deleted Note Successfully"})
    } catch (error) {
        console.error("Error in Deleted Notes", error)
        res.status(500).json({ message: "Internal server error" })
    }
};