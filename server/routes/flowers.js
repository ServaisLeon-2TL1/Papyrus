const express = require('express');
const pool = require('../connection/database');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const query = "SELECT var_id AS ref, flower_lib AS name, color_lib AS color, price, stock FROM Flower JOIN Variety ON Variety.flower_id = Flower.flower_id JOIN Color ON Variety.color_id = Color.color_id";
        const result = await pool.query(query);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const query = "SELECT var_id AS ref, flower_lib AS name, color_lib AS color, price, stock FROM Flower JOIN Variety ON Variety.flower_id = Flower.flower_id JOIN Color ON Variety.color_id = Color.color_id WHERE var_id = ?";
        const result = await pool.query(query, req.params.id);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});


module.exports = router;