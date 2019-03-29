// request object and res object


function clog (timestamp) {
    let time = (timestamp == 'timestamp') ? Date.now( : ''; //JS function to get the time right now
    return function (req, res, next) { // options is used to pass a variable into this middleware

        console.log(`CLOG: ${res.method} on ${req.url}`);
        req.clogged = true; // a bollean flag called clogged and place it in the request object. If being put in the response, client will receive it.
        next(); //gets us out of the current middleware and looks for the next funciton(middleware is essentially a funciton)
    }
}


module.exports = clog;