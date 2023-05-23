const express = require('express')
const Users = require('../models/Users')
const { query, validationResult } = require('express-validator');
const router = new express.Router()

router.get('/', async (req, res) => {
    res.send('this is auth')
})

router.post('/', [
    query('name', 'Enter a valid name').isLength({ min: 5 }),
    query('email', 'Enter a valid email').isEmail(),
    query('pwd', 'Enter a valid pwd').isLength({ min: 5 }),
], async (req, res) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
        return res.status(400).json({ errors: err.array() })
    }
    const user = new Users(req.body)
    const data = await user.save()
    res.json(data)
})

/* 
{
  "name" : "vivasdfsdfs",
  "email" : "yadav13adu@gmail.com",
  "pwd" : "12313213"
}
*/

module.exports = router