import express from "express"

const app = express()

app.get("/api/notes", (req, res) => {
    res.send("message send")
})

app.listen(5000, () => {
    console.log("Server started on PORT: 5000");
});