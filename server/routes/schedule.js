const express = require('express');
const pool = require('../connection/database');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const query = "SELECT day, opening_time AS openingTime, closing_time AS closingTime FROM Schedule";
        const result = await pool.query(query);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});


module.exports = router;