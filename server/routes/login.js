const express = require('express');
const pool = require('../connection/database');
const TOKEN = require('../connection/token');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const data = {
            username: req.body.username,
            password: req.body.password
        };
        const query = "SELECT user_id AS id, username, is_admin AS isAdmin FROM User WHERE username = ? AND password = SHA2(?, 256)";
        const user = await pool.query(query, Object.values(data));
        if (!user.length) {
            res.status(401).send("Your username or password is incorrect.");
        }
        else {
            user[0].isAdmin = Boolean(user[0].isAdmin);
            const accessToken = TOKEN.generateAccessToken(user[0]);
            const refreshToken = TOKEN.generateRefreshToken(user[0]);
            res.status(200).send({
                accessToken,
                refreshToken
            });
        }
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});


module.exports = router;