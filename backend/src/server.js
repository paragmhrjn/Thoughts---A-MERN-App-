import express from "express"
import noteRoutes from "./routes/noteRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
const app = express()
const PORT = process.env.PORT || 5000
dotenv.config();
// prefixing api routing endpoints
app.use("/api/notes", noteRoutes)

connectDB()



app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
});