const mongoose = require('mongoose')

mongoose.connect(`mongodb://127.0.0.1:27017/iNotebook`)
.then(() => console.log('connect mongo'))
.catch((err) => console.log(`error ${err}`))

module.exports = mongoose