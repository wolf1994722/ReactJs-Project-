const express = require('express')
const Users = require('../models/Users')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator')
const router = new express.Router()

const JWT_SECRET = 'mynameis$khan'

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
        let user = await Users.findOne({ email: req.body.email })
        if (user) return res.status(400).json({ errors: 'Sorry Email 📩 already exists' })

        //* express-validator
        const error = validationResult(req)
        if (!error.isEmpty()) return res.status(400).json({ errors: error.array() });


        const securePassword = async (pwd) => {
            const salt = await bcrypt.genSaltSync(10);
            const hash = await bcrypt.hashSync(pwd, salt);
            return hash
        }
        // user = new Users(req.body)
        user = new Users({
            name: req.body.name,
            pwd: await securePassword(req.body.pwd),
            email: req.body.email
        })
        await user.save()
        const authToken = jwt.sign({
            user: {
                id: user._id
            }
        }, JWT_SECRET);
        res.send({ authToken })
    } catch (error) { res.status(500).send('error 🐹 : ' + error) }
})

module.exports = router 