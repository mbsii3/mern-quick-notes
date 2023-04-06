const Note = require('../../models/note');

module.exports = {
    create
}

async function create(req, res) {
    try {
        const createdNote = await Note.create(req.body);
        console.log(createdNote);
        res.json(createdNote);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
   
}