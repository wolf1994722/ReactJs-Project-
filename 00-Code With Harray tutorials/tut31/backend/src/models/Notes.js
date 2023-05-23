const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    title : {
        type : String,
        required : true, 
        trim : true,
    },
    description : {
        type : String,
        require : true,
    },
    tag : {
        type : String,
        trim : true,
        default : 'General'
    },
    date : {
        type : Date,
        default : Date.now
    }
})

//* collection or model
const Notes = new mongoose.model('Notes', noteSchema)

module.exports = Notes