const express = require('express')
const fetchUser = require('../middleware/fetchUser')
const Notes = require('../models/Notes')
const { check, validationResult } = require('express-validator')
const router = new express.Router()

router.get('/fetchAllNotes', fetchUser, async (req, res) => {
    try {
        let notes = await Notes.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.log('error 🐹 : ' + error)
        res.status(500).send('Internal Server Error')
    }
})

router.post('/addNote', fetchUser, [
    check('title', 'Enter a valid title').isLength({ min: 3 }),
    check('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {
        //* express-validator
        const error = validationResult(req)
        if (!error.isEmpty()) return res.status(400).json({ errors: error.array() });

        console.log({
            ...req.body,
            user: req.user.id
        })
        let note = new Notes({
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag,
            user: req.user.id
        })
        await note.save()
        res.json(note)
    } catch (error) {
        console.log('error 🐹 : ' + error)
        res.status(500).send('Internal Server Error')
    }
})

module.exports = router