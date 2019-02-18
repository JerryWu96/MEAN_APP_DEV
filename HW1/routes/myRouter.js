let express = require('express');
let router = express.Router();

router.get('/hw1', (req, res) => res.json({Name: 'Xiankang Wu'}));

router.post('/hw1', (req, res) => {
    res.send({input: req.body.input});
});

module.exports = router;
