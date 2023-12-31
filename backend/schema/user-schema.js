const mongoose = require('mongoose') ;
 
const autoIncrement = require('mongoose-auto-increment') ;
 

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
        },
        username :{
            type: String,
         required: true   
        },
        email:{
            type: String,
            required: true
        },
        phone:{
            type: String,
            required: true
        }

})

autoIncrement.initialize(mongoose.connection) ;
userSchema.plugin(autoIncrement.plugin, "user") ;

const postUser = mongoose.model("user", userSchema)   ;

module.exports = postUser ;