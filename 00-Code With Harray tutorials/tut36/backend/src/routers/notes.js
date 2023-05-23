const express = require('express')
const router = new express.Router()

router.use('/', async (req, res) => {
    res.send('this is notes')
})

module.exports = router