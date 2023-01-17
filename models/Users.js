
//  Model Creation 
        //  --------> 1: create new schema (class)

const mongoose= require('mongoose')  
const Schema= mongoose.Schema   // import schema for model creation 

const userSchema = new Schema({
    name :{
        type:String,
        required:true
    },
    email:String,
    phone:String

})

module.exports = mongoose.model("Users",userSchema)
