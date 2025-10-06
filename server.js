import express from "express";

import { userController } from "./controllers/user.controller.js";
import dotenv from "dotenv";
dotenv.config();

const PORT=process.env.PORT || 8080;
import {db} from "./utils/db.js";

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello");
});

app.use("/users", userController);


app.listen(PORT, async ()=>{
  try{
     await db
  console.log("Connected to DB");
  }catch(err){
    console.log("Error connecting to DB");
    console.log(err)
}
    
    console.log(`Server started at port ${PORT}`);
})


