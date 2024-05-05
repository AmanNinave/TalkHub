import express from "express";
import { loginUser , signUpUser , logoutUser } from "../controllers/auth.controllers.js";
const router = express.Router();


router.get("/signup" , signUpUser );

router.get("/login" , loginUser );

router.get("/logout" , logoutUser );




export default router;