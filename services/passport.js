const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const SlackStrategy = require("passport-slack").Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

//turns user to id
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//turns an id to a user
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then((existingUser) => {
            if (existingUser) {
                //user already exists
                done(null, existingUser);
            }
            else {  //create new user
                new User({googleId: profile.id}).save().then(user => done(null, user));
            }
        });
            console.log('accessToken', accessToken);
            console.log('refresh token', refreshToken);
            console.log('profile', profile);
        }
));

passport.use(new SlackStrategy({
    clientID: keys.slackClientID,
    clientSecret: keys.slackClientSecret,
    skipUserProfile: false,
  },
  (accessToken, refreshToken, profile, done) => {
    //passport callback function
      User.findOne({ slackId : profile.id}).then((existingUser) => {
          if (existingUser) {
              //user already exists
              done(null, existingUser);
          }
          else {
              new User({ slackId : profile.id, accessToken: accessToken}).save().then(user => done(null, user));
          }
      });
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        console.log('profile', profile);
    }
));