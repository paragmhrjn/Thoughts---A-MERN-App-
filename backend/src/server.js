import express from "express"
import noteRoutes from "./routes/noteRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import rateLimiterMD from "./middleware/rateLimiter.js"


const app = express()
const PORT = process.env.PORT || 5000

dotenv.config();
// middleware
app.use(express.json()) // this will parse JSON bodies: req.body
app.use(rateLimiterMD)
// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} & Req URl is ${req.url}`)
//     next()
// })

// prefixing api routing endpoints
app.use("/api/notes", noteRoutes)

connectDB().then(() => {

    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
})

