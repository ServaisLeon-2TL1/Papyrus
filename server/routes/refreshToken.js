const express = require('express');
const pool = require('../connection/database');
const jwt = require("jsonwebtoken");
const TOKEN = require('../connection/token');
const router = express.Router();


router.get('/', (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.sendStatus(401);
    }
    jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
        if (err) {
            return res.sendStatus(401);
        }
        const query = `SELECT * FROM User WHERE username = '${user.username}'`;
        const userInDb = await pool.query(query);
        if (!userInDb.length) {
            res.status(401).send("The user doesn't exist.");
        }
        else {
            delete user.iat;
            delete user.exp;
            const refreshedAccessToken = TOKEN.generateAccessToken(user);
            const refreshedRefreshToken = TOKEN.generateRefreshToken(user);
            res.status(200).send({
                accessToken: refreshedAccessToken,
                refreshToken: refreshedRefreshToken
            });
        }
    });
});


module.exports = router;