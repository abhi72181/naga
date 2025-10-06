import express from "express";
const router= express.Router();
import { User } from "../models/user.model.js";
router.post("/create", async (req,res)=>{
    try{
        const user= await User.create(req.body);
        console.log(user)
        return res.status(201).json({user});
    }catch(err){

        console.log(err)
        return res.status(500).json({message:err.message});
    }
})


router.get("/", async(req,res)=>{
    try{
        const user= await User.findOneAndDelete({_id:req.params.id});
        return res.status(200).json({user});
    }catch(err){
        console.log(err)
        return res.status(500).json({message:err.message});
    }
})

router.get("/paginatedUsers", async(req,res)=>{
    try{
        const {page,per_page}=req.query
        const users= await User.find({},{"age":0,"name":1})
        return res.status(200).json({users});
    }catch(err){

        console.log(err)
        return res.status(500).json({message:err.message});
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        const user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).json({user});
    }catch(err){
        console.log(err)
        return res.status(500).json({message:err.message});
    }
})

export const userController=router;