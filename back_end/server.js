const express=require('express');

const Rout=require('./router/rout');
const mongoose=require('mongoose')
const cors=require('cors');
const port=3000;

const app =express()
app.use(express.json())
app.use(cors());
app.use('/rout',Rout)

app.get('/',(req,res)=>{
    res.send('welcome to shopee')
})
//connect db
mongoose.connect('mongodb://localhost:27017/')
.then(()=>{
    console.log("connected to MongoDb")
})
.catch((err)=>{
    console.log(err)
})
app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});