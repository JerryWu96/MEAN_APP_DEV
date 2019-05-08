let express = require('express');
let router = express.Router();

// respond to a GET request
// @param '/hw1': relative path
// @param arraw function: execute after the relative path has been matched
/// traditionally, we use function
router.get('/hw1', (req, res) => res.json({Name: 'Xiankang Wu'}));

// respond to a POST request
router.post('/hw1', (req, res) => {
    res.json({input: req.body.input});
});

module.exports = router;