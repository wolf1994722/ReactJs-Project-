require('./db/connect')
const express = require('express')
const app = express()

//* Available routes
app.use('/api/auth', require('./routers/auth'))
app.use('/api/notes', require('./routers/notes'))

const port = 3000
app.listen(port, () => console.log(`http://localhost:${port}`))