const keys = require('../config/keys');
const passport = require('passport');
const GoogleStategy = require('passport-google-oauth20').Strategy;
passport.use(new GoogleStategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refresfToken, profile, done) => {
  console.log("profile: ", profile);
}));
