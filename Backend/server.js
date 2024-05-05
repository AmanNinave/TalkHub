import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToDatabase from "./db/connectToDatabase.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000 ;

app.use(express.json());                    // to parse incomming requests with JSON payloads ( from req.body );
app.use(cookieParser());
app.use("/api/auth" , authRoutes );
app.use("/api/message" , messageRoutes );

app.get("/" , (req , res )=>{
    res.send("home page is here");
}) 


connectToDatabase().then(()=>{
    app.listen( PORT , ()=>{
        console.log("Server running on " + PORT );
    })
})