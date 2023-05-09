const mongoose = require("mongoose")   // rest API(JSon format)

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    contactNo:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    confirmPassword:{
        type: String,
        required: true
    }
  
   
   
})

module.exports=mongoose.model("user", UserSchema)
