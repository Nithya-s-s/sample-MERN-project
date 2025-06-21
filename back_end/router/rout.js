const express=require("express");
const router=express.Router();
const {default:mongoose}=require('mongoose')
const Detail=require("../model/structure")
router.get('/',(req,res)=>{
 res.send("welcome to router")
})
router.post('/user',async(req,res)=>{
const{Name,email,phone_number}=req.body
try{
    const structr=await Detail.create({Name,email,phone_number})
    res.status(200).json(structr)
}
catch(error){
    res.status(400).json({error:error.message})
}
})
router.get('/use',async(req,res)=>{
    const structr=await Detail.find({}).sort({createAt:-1})
    res.status(200).json(structr)
})
module.exports=router;