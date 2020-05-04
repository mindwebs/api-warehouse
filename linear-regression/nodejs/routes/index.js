const express = require('express');
const router = express.Router();
const ss = require('simple-statistics')
// import regression from 'regression';
const regression = require('regression');

router.get('/', async (req, res) => {
    return res.status(200).json('Server Running Successfully!');
});

router.post('/linearConsts', async (req, res) => {
    const { array } = req.body;
    // var data = [[0, 0], [3, 6], [4, 18]];
    var data = JSON.parse(array);
    return res.status(200).json(ss.linearRegression(data));
});

router.post('/getY', async (req, res) => {
    const { array } = req.body;
    const { x } = req.body;
    var data = JSON.parse(array);

    const lnr = ss.linearRegression(data);
    const m = lnr.m;
    const b = lnr.b;

    var y = (m*x + b).toFixed(2);

    return res.status(200).json({ y });
});

router.post('/getX', async (req, res) => {
    const { array } = req.body;
    const { y } = req.body;
    var data = JSON.parse(array);

    const lnr = ss.linearRegression(data);
    const m = lnr.m;
    const b = lnr.b;

    var x = ((y - b)/m).toFixed(2);

    return res.status(200).json({ x });
});



router.post('/polyConsts', async (req, res) => {
    const { array } = req.body;
    var data = JSON.parse(array);
    const { order } = req.body;

    const result = regression.polynomial(data, { order });
    var points = result.points;
    var constants = result.equation;
    return res.status(200).json({ points, constants });
});

router.post('/polyGetY', async (req, res) => {
    const { array } = req.body;
    var data = JSON.parse(array);
    const { order } = req.body;
    const { x } = req.body;
    var i; var val = 0;

    const result = regression.polynomial(data, { order });
    var constants = result.equation;
    for(i=0; i <= order; i++) {
        val += constants[i] * Math.pow(x, order - i);
    }

    var y = val.toFixed(2);
    return res.status(200).json({ y });
});

module.exports = router;