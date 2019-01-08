const keys = require('../config/keys');
const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStategy = require('passport-google-oauth20').Strategy;

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(new GoogleStategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback', 
  proxy: true
}, (accessToken, refresfToken, profile, done) => {
  User.findOne({googleId: profile.id}).then((existingUser)=> {
    if(existingUser){
      done(null, existingUser);
    } else{
      new User({googleId: profile.id, name: profile.name.givenName}).save().then((user) => done(null, user));
    }
  })
  console.log("profile: ", profile);
}));
