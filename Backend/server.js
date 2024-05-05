import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js"
import connectToDatabase from "./db/connectToDatabase.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000 ;

app.use(express.json());      // to parse incomming requests with JSON payloads ( from req.body );

app.use("/api/auth" , authRoutes );

app.get("/" , (req , res )=>{
    res.send("home page is here");
}) 


connectToDatabase().then(()=>{
    app.listen( PORT , ()=>{
        console.log("Server running on " + PORT );
    })
})