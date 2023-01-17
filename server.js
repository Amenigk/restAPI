
const express = require('express')

const connecttoDB = require('./config/connect')
const Users = require('./models/Users')

require('dotenv').config({path:"./config/.env"})


const app=express()
app.use(express.json())

connecttoDB()


// EndPoints/routes

app.post('/addUser',async(req,res)=>{
   const {name,email,phone}=req.body
   const existingUser = await Users.findOne({email})
   if(existingUser){
    return res.status(400).json("You are already here") 
   }
    try {
        const  newUser=new Users({
            name,
            email,
            phone
        }) 
        await newUser.save()
        // res.send(`Welcome to the favorite list ${newUser.name}`)   resp back message
        res.send(newUser)  //resp send data
    } catch (error) {
        res.send(error.message)
    }

})

app.get('/viewUsers',async(req,res)=>{
  
    try {
        const  users=await Users.find()
        res.send(users) 
    } catch (error) {
        res.send(error.message)
    }

})

app.delete('/deleteUser/:x',async(req,res)=>{
  
    try {
        const  deletedUser=await Users.findByIdAndDelete(req.params.x)
        res.send(`${deletedUser.name} was deleted`) 
    } catch (error) {
        res.send(error.message)
    }

})

app.put('/updatedUser/:x',async(req,res)=>{
  
    try {
        const  updatedUser=await Users.findByIdAndUpdate(req.params.x,req.body,{new: true})
        res.send(updatedUser) 
    } catch (error) {
        res.send(error.message)
    }

})



const port= process.env.port || 8000

app.listen(port,err=>err?console.log(err):console.log(`server is connecting on port ${port}`))
