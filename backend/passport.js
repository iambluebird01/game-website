const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID = require('dotenv').config({
  path: 'C:UsersgoodboyDocumentsGitHubgame-website\backend.env',
});
const GOOGLE_CLIENT_SECRET = require('dotenv').config({
  path: 'C:UsersgoodboyDocumentsGitHubgame-website\backend.env',
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
