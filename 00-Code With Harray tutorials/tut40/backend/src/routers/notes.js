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
            ...req.body,
            user: req.user.id
        })
        await note.save()
        res.json(note)
    } catch (error) {
        console.log('error 🐹 : ' + error)
        res.status(500).send('Internal Server Error')
    }
})


router.put('/updateNote/:id', fetchUser, async (req, res) => {
    try {
        const { title, description, tag } = req.body
        //* create New object
        let newObject = {}
        if (title) newObject.title = title
        if (description) newObject.description = description
        if (tag) newObject.tag = tag

        //* find note to be updated and update it
        let note = await Notes.findById(req.params.id)
        if (!note) return res.status(404).send('Not Found');

        //* if same user is updating
        if (note.user.toString() !== req.user.id) return res.status(404).send('UnAuthorized');

        //* new : true, if new notes is create then it is possible
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newObject }, {new: true})

        res.json(note)
    } catch (error) {
        console.log('error 🐹 : ' + error)
        res.status(500).send('Internal Server Error')
    }
})

module.exports = router