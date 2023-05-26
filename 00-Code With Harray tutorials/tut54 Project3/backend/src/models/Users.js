const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true, 
        trim : true,
    },
    email : {
        type : String,
        require : true,
        trim : true,
        unique : true,
        validate(val) {
            if(!validator.isEmail(val)) throw new Error('Invalid Email')
        }
    },
    pwd : {
        type : String,
        required : true,
        trim : true,
    },
    date : {
        type : Date,
        default : Date.now
    }
})

//* collection or model
const Users = new mongoose.model('Users', userSchema)

module.exports = Users