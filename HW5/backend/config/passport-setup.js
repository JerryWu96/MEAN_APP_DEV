const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
    // err = null, user.id is the unique _id for each entry in our db
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // err = null, user.id is the unique _id for each entry in our db
    User.findById(id).then((user) => {
       // done(null, user);
        done(null, user);
    })
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        //callbackURL: '/auth/google/callback'
        callbackURL: keys.google.callbackURL
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        // check if current user already exists in our db with Google ID
        // currentUser is retrieved from db
        console.log(profile);
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if (currentUser) {
                // already have the user
                console.log('user is:', currentUser);
                done(null, currentUser); // next stageL serializeUser
            } else {
                // create user in db
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser) => {
                    console.log('********** New user created: ', newUser);
                    done(null, newUser);
                });
            }
        });

    })
);
