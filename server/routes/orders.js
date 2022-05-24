const express = require('express');
const pool = require('../connection/database');
const TOKEN = require('../connection/token');
const router = express.Router();


router.get('/', TOKEN.authenticateToken, async (req, res) => {
    try {
        const query = `SELECT \`Order\`.order_id AS id, validation_date AS validation, delivery_date AS delivery, SUM(price * flower_quantity * bunch_quantity) AS total FROM \`Order\` JOIN Bunch_Selection ON Bunch_Selection.order_id = \`Order\`.order_id JOIN Bunch ON Bunch_Selection.bunch_id = Bunch.bunch_id JOIN Flower_Selection ON Flower_Selection.bunch_id = Bunch.bunch_id JOIN Variety ON Flower_Selection.var_id = Variety.var_id JOIN Flower ON Variety.flower_id = Flower.flower_id WHERE \`Order\`.user_id = '${req.user.id}' GROUP BY \`Order\`.order_id;`;
        const result = await pool.query(query);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});

router.get('/:id', TOKEN.authenticateToken, async (req, res) => {
    try {
        const query = `SELECT \`Order\`.order_id AS id, validation_date AS validation, delivery_date AS delivery, SUM(price * flower_quantity * bunch_quantity) AS total FROM \`Order\` JOIN Bunch_Selection ON Bunch_Selection.order_id = \`Order\`.order_id JOIN Bunch ON Bunch_Selection.bunch_id = Bunch.bunch_id JOIN Flower_Selection ON Flower_Selection.bunch_id = Bunch.bunch_id JOIN Variety ON Flower_Selection.var_id = Variety.var_id JOIN Flower ON Variety.flower_id = Flower.flower_id WHERE \`Order\`.user_id = '${req.user.id}' AND \`Order\`.order_id = ? GROUP BY \`Order\`.order_id`;
        const result = await pool.query(query, req.params.id);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});

router.get('/:id/contents', TOKEN.authenticateToken, async (req, res) => {
    try {
        const query = `SELECT Bunch.bunch_id AS bunchRef, bunch_quantity AS quantity, SUM(price * flower_quantity) AS unitPrice, (SUM(price * flower_quantity) * bunch_quantity) AS selectionPrice FROM \`Order\` JOIN Bunch_Selection ON Bunch_Selection.order_id = \`Order\`.order_id JOIN Bunch ON Bunch_Selection.bunch_id = Bunch.bunch_id JOIN Flower_Selection ON Flower_Selection.bunch_id = Bunch.bunch_id JOIN Variety ON Flower_Selection.var_id = Variety.var_id JOIN Flower ON Variety.flower_id = Flower.flower_id WHERE \`Order\`.user_id = '${req.user.id}' AND \`Order\`.order_id = ? GROUP BY Bunch.bunch_id`;
        const mainResult = await pool.query(query, req.params.id);
        let result = mainResult.slice();
        for (let i in result) {
            let queryContents = `SELECT Variety.var_id AS ref, flower_lib AS name, color_lib AS color, flower_quantity AS quantity, price AS unitPrice, (price * flower_quantity) AS selectionPrice FROM Bunch JOIN Flower_Selection ON Flower_Selection.bunch_id = Bunch.bunch_id JOIN Variety ON Flower_Selection.var_id = Variety.var_id JOIN Flower ON Variety.flower_id = Flower.flower_id JOIN Color ON Variety.color_id = Color.color_id WHERE user_id = '${req.user.id}' AND Bunch.bunch_id = '${result[i].bunchRef}'`;
            result[i].contents = await pool.query(queryContents);
        }
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});


module.exports = router;