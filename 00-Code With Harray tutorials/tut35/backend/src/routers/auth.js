const express = require('express')
const Users = require('../models/Users')
const { check, validationResult } = require('express-validator')
const router = new express.Router()

router.get('/createUser', async (req, res) => {
    res.send('my auth')
})

router.post('/createUser', [
    check('email', 'Email length error').isEmail(),
    check('pwd', 'Password length 8-10').isLength({ min: 8, max: 10 }),
    check('name', 'Name length 3-100').isLength({ min: 3, max: 100 })
], async (req, res) => {
    try {
        //* if already email exists
        let user = await Users.findOne({ email : req.body.email })
        if(user) return res.status(400).json({ errors : 'Sorry Email 📩 already exists'})
        
        //* express-validator
        const error = validationResult(req)
        if (!error.isEmpty()) return res.status(400).json({ errors: error.array() });

        user = new Users(req.body)
        await user.save()
        res.send(user)
    } catch (error) { res.status(500).send('error 🐹 : ' + error) }
})

module.exports = router 