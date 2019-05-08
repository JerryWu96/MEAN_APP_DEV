const router = require('express').Router();
const passport = require('passport');

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
// exchange the code appended in the url with the profile info. The second authenticate is used to achieve it.
// then fire the passport callback function in passport-setup
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
    //res.redirect('/profile');
    res.redirect('http://localhost:4200');
});

module.exports = router;
