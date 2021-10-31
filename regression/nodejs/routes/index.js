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
    if(!array)
        return res.status(400).json({err: "An array is required"});
    try{
        let data = JSON.parse(array);
        return res.status(200).json(ss.linearRegression(data));
    }
    catch(e){
        return res.status(500).json(`Server responded with an error: ${e}`);
    }
});

router.post('/getY', async (req, res) => {
    const { array } = req.body;
    const { x } = req.body;
    try{
        let data = JSON.parse(array);
        const lnr = ss.linearRegression(data);
        const m = lnr.m;
        const b = lnr.b;

        let y = (m*x + b).toFixed(2);

        return res.status(200).json({ y });
    } catch (e) {
        return res.status(500).json(`Server responded with an error: ${e}`);
    }
});

router.post('/getX', async (req, res) => {
    const { array } = req.body;
    const { y } = req.body;
    try{
        let data = JSON.parse(array);
        const lnr = ss.linearRegression(data);
        const m = lnr.m;
        const b = lnr.b;

        let x = ((y - b)/m).toFixed(2);

        return res.status(200).json({ x });
    } catch(e){
        return res.status(500).json(`Server responded with an error: ${e}`);
    }
});

router.post('/polyConsts', async (req, res) => {
    const { array } = req.body;
    let data = JSON.parse(array);
    const { order } = req.body;
    if(!data || !order || !array){
        return res.status(400).json({err: "Bad data format"});
    }
    try{
        const result = regression.polynomial(data, { order });
        let points = result.points;
        let constants = result.equation;
        return res.status(200).json({ points, constants });
    }
    catch(e){
        return res.status(500).json(`Server responded with an error: ${e}`);
    }
});

router.post('/polyGetY', async (req, res) => {
    const { array } = req.body;
    let data = JSON.parse(array);
    const { order } = req.body;
    const { x } = req.body;
    let val = 0;
    try{
        const result = regression.polynomial(data, { order });
        let constants = result.equation;
        for(let i=0; i <= order; i++) {
            val += (constants[i] * Math.pow(x, order - i));
        }

        let y = val.toFixed(2);
        return res.status(200).json({ y });
    } catch (e) {
        return res.status(500).json(`Server responded with an error: ${e}`);
    }
});

module.exports = router;