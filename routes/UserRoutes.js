const express = require('express');
const UserModel = require('../models/User');

const app = express();

// /users posts the data 
app.post('/', async (req, res) => {
    const user = new UserModel(req.body)

    try {
        await user.save((err) => {
            if (err) {
                res.status(500).send({error: err.toString()})
            } else {
                res.send(user)
            }
        })
    } catch (err) {
        res.status(500).send({error: err.toString()})
    }
})

module.exports = app