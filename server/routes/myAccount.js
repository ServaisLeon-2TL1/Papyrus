const express = require('express');
const pool = require('../connection/database');
const TOKEN = require('../connection/token');
const router = express.Router();


router.get('/', TOKEN.authenticateToken, async (req, res) => {
    try {
        const query = `SELECT user_id AS id, username, CONCAT(first_name, ' ', last_name) AS fullName, last_name AS lastName, first_name AS firstName, email, address, is_admin AS isAdmin FROM User WHERE username = '${req.user.username}'`;
        const result = await pool.query(query);
        result[0].isAdmin = Boolean(result[0].isAdmin);
        const userInformation = [result[0]];
        res.status(200).json(userInformation);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});

router.put('/updateInfo', TOKEN.authenticateToken, async (req, res) => {
    try {
        const data = {
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            email: req.body.email,
            address: req.body.address
        };
        const query = `UPDATE User SET last_name = ?, first_name = ?, email = ?, address = ? WHERE username = '${req.user.username}'`;
        await pool.query(query, Object.values(data));
        res.status(200).send("Your information has been successfully updated.");
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});

router.put('/changePassword', TOKEN.authenticateToken, async (req, res) => {
    try {
        const query = `UPDATE User SET password = SHA2(?, 256) WHERE username = '${req.user.username}'`;
        await pool.query(query, req.body.password);
        res.status(200).send("Your password has been successfully changed.");
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});


module.exports = router;