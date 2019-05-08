let express = require('express');
let router = express.Router();
let request = require("request");
let keys = require("../config/keys");

// New York Times Books API is used to retrieve the best sellers list and display the top 3.
router.get('/', (req, res, next) => {
    const key = keys.secret; // retrieve the API key implicitly - see gitignore
    const url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=" + key; // append the key
    request(url, (err, response, body) => {
        if (!err && response.statusCode == 200) { // the HTML request is ok. Check out https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
            const data = JSON.parse(body);
            const result = data['results']['books'];
            const results = {
                title1: result[0]['title'],
                title2: result[1]['title'],
                title3: result[2]['title']
            }
            //console.log(results);
            res.send(results) // send to frontend
        }
    })
});


module.exports = router;
