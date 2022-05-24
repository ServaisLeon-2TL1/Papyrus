const express = require('express');
const pool = require('../connection/database');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const data = {
            username: req.body.username,
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address
        };
        if (data.username.length < 3 || data.username.length > 16) {
            res.status(400).send("The username must be between 3 and 16 characters long.");
        }
        else if (data.password.length < 8) {
            res.status(400).send("The password must be at least 8 characters long.");
        }
        else {
            const query = "INSERT INTO User (username, last_name, first_name, email, password, address) VALUES (?, ?, ?, ?, SHA2(?, 256), ?)";
            await pool.query(query, Object.values(data));
            res.status(201).send("The user has been successfully created.");
        }
    }
    catch (err) {
        res.status(400).send("Invalid information.");
    }
});


module.exports = router;