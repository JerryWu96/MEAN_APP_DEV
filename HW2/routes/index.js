let express = require('express');
let router = express.Router();

/* GET home page. */

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/hw1', (req, res) => res.json({"foo": "bar"}));

module.exports = router;

router.get('/clog', function(req, res, next) {
    res.render('index', { title: 'CS412'});
});