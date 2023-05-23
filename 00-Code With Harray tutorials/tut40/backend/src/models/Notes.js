const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    user : { //* foreign key
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    title : {
        type : String,
        required : true, 
        trim : true,
    },
    description : {
        type : String,
        required : true,
    },
    tag : {
        type : String,
        trim : true,
        default : 'General',
    },
    date : {
        type : Date,
        default : Date.now,
    }
})

//* collection or model
const Notes = new mongoose.model('Notes', noteSchema)

module.exports = Notes