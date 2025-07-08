import express from "express"
import noteRoutes from "./routes/noteRoutes.js"
const app = express()

// prefixing api routing endpoints
app.use("/api/notes", noteRoutes)





app.listen(5000, () => {
    console.log("Server started on PORT: 5000");
});