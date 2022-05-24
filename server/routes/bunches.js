const express = require('express');
const pool = require('../connection/database');
const TOKEN = require('../connection/token');
const router = express.Router();


router.get('/', TOKEN.authenticateToken, async (req, res) => {
    try {
        const query = `SELECT Bunch.bunch_id AS id, creation_date AS creation, update_date AS lastUpdate, SUM(price * flower_quantity) AS price FROM Bunch JOIN Flower_Selection ON Flower_Selection.bunch_id = Bunch.bunch_id JOIN Variety ON Flower_Selection.var_id = Variety.var_id JOIN Flower ON Variety.flower_id = Flower.flower_id WHERE user_id = '${req.user.id}' GROUP BY Bunch.bunch_id`;
        const result = await pool.query(query);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});

router.get('/:id', TOKEN.authenticateToken, async (req, res) => {
    try {
        const query = `SELECT Bunch.bunch_id AS id, creation_date AS creation, update_date AS lastUpdate, SUM(price * flower_quantity) AS price FROM Bunch JOIN Flower_Selection ON Flower_Selection.bunch_id = Bunch.bunch_id JOIN Variety ON Flower_Selection.var_id = Variety.var_id JOIN Flower ON Variety.flower_id = Flower.flower_id WHERE user_id = '${req.user.id}' AND Bunch.bunch_id = ? GROUP BY Bunch.bunch_id`;
        const result = await pool.query(query, req.params.id);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});

router.get('/:id/contents', TOKEN.authenticateToken, async (req, res) => {
    try {
        const query = `SELECT Variety.var_id AS ref, flower_lib AS name, color_lib AS color, flower_quantity AS quantity, price AS unitPrice, (price * flower_quantity) AS selectionPrice FROM Bunch JOIN Flower_Selection ON Flower_Selection.bunch_id = Bunch.bunch_id JOIN Variety ON Flower_Selection.var_id = Variety.var_id JOIN Flower ON Variety.flower_id = Flower.flower_id JOIN Color ON Variety.color_id = Color.color_id WHERE user_id = '${req.user.id}' AND Bunch.bunch_id = ?`;
        const result = await pool.query(query, req.params.id);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});


module.exports = router;