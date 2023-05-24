const express = require('express')
const Users = require('../models/Users')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser')
const { check, validationResult } = require('express-validator')
const router = new express.Router()

const JWT_SECRET = 'mynameis$khan'

router.post('/createUser', [
    check('email', 'Email length error').isEmail(),
    check('pwd', 'Password length 8-10').isLength({ min: 8 }),
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
        user = new Users({
            name: req.body.name,
            pwd: await securePassword(req.body.pwd),
            email: req.body.email
        })
        await user.save()

        const data = {
            user: {
                id: user._id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.send({ authToken })
    } catch (error) {
        console.log('error 🐹 : ' + error)
        res.status(500).send('Internal Server Error')
    }
})

router.post('/loginUser', [
    check('email', 'Email length error').isEmail(),
    check('pwd', 'Password length must be greater than 0').exists(),
], async (req, res) => {
    try {
        //* express-validator
        const error = validationResult(req)
        if (!error.isEmpty()) return res.status(400).json({ errors: error.array() });

        const { email, pwd } = req.body
        let user = await Users.findOne({ email })
        if (!user) return res.status(400).json({ errors: 'Please try to login with correct credential' });

        const pwdCompare = await bcrypt.compare(pwd, user.pwd)
        if (!pwdCompare) return res.status(400).json({ errors: 'Please try to login with correct credential' });

        const data = {
            user: {
                id: user._id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.send({ authToken })
    } catch (error) {
        console.log('error 🐹 : ' + error)
        res.status(500).send('Internal Server Error')
    }
})

//* Get logged in user details (login Required)
router.post('/getUser', fetchUser, async (req, res) => {
    try {
        let user = await Users.findById(req.user.id).select('-pwd')
        res.send(user)
    } catch (error) {
        console.log('error 🐹 : ' + error)
        res.status(500).send('Internal Server Error')
    }
})

module.exports = router 