const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user')
app.use(express.json())

app.use(cors()) // middle ware

mongoose.connect('mongodb+srv://khan:7866@cluster0.kkded.mongodb.net/MoviesApp?retryWrites=true&w=majority')
app.post('/api/signup',async (req,res)=>{
    try{
        const user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        res.json({
            status:'ok'
        })
    }
    catch(err){
        res.json({
            status:'error'
        })
    }
    
})

app.post('/api/login',async (req,res)=>{
    
        const user = await User.findOne({
            email:req.body.email,
            password:req.body.password
        })
        if(user){
            return res.json({status:'ok',user:true})
        }
        else{
            return res.json({status:'error',user:false})
        }
    }
   
    
)

app.use(function(req,res,error,next){
    res.status(400||401||500);
    res.json({
        error:{
            message:error.message
        }
    })
})

app.listen(4000,()=>{
    console.log('server started')
})
