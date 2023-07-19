import express from "express";
import {User} from "../models/userModel.js";
import { getAllUsers , register, login,getMyProfile , logout} from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/auth.js";
const router = express.Router();

//Routes for User Management API's
router.get("/all", getAllUsers);
router.post("/new" , register);
router.post("/login" , login);
router.get("/logout" , logout);

router.get("/myProfile",isAuthenticated,getMyProfile);

// router.put("/update/:id" , updateUser);
// router.delete("/delete/:id" , deleteUser);

router.get("/userid/:id",(req,res)=>{
    res.json({
        success : true,
        message : "Hello mr. Goutam"
    })
})

export default router;
