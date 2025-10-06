
import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    role:{type:String,enum:["admin","user","moderator"],default:"user"},
    isMarried:Boolean,
    email:{type:String,required:true,unique:true}

},{
    versionKey:false,
    timestamps:true
});
export const User=mongoose.model("user",userSchema);