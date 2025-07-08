import express from "express"
import { createNote, getAllNotes, updateNote, deleteNote } from "../controllers/notesController.js";
// to create router
const router = express.Router();


router.get("/", getAllNotes)
router.post("/", createNote)
router.put("/:id", updateNote)
router.delete("/:id", deleteNote)


export default router;

// Endpoints
// app.get("/api/notes", (req, res) => {
//     res.status(200).send("message send and updated")
// })
// app.post("/api/notes", (req, res) => {
//     res.status(201).json({message:"Note created successfully!"})
// })
// app.put("/api/notes/:id", (req, res) => {
//     res.status(200).json({message:"Note updated successfully!"})
// })
// app.delete("/api/notes/:id", (req, res) => {
//     res.status(200).json({message:"Note deleted successfully!"})
// })

