const mongoose=require('mongoose')
const Schema=mongoose.Schema
const structureschema=new Schema({
    Name:{
        type:String,
            required:true
        },

    email:{
        type:String,
     required:true
    },
    phone_number:{
        type:Number,
        required:true
    }
},{timestamps:true})
module.exports=mongoose.model('Detail',structureschema)

