const passport = require('passport');
const path = require('path');
const requestPromise = require('request-promise');
const async = require("async");
const keys = require('../config/keys');
const slackImporter = require("../services/slack_importer");


module.exports = (app) => {
    // google oauth
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    // google oauth callback
    app.get( '/auth/google/callback',
        passport.authenticate( 'google', {
            successRedirect: '/auth/google/success',
            failureRedirect: '/auth/google/failure'
    }));


    app.get('/auth/slack/', passport.authenticate('slack', {
            scope: ['identity.basic', 'identity.email', 'identity.avatar', 'identity.team'],
            callbackURL: '/auth/slack/callback',
            state: "identity"
        })
    );


  app.get("/auth/slack/import", passport.authenticate('slack', {
      scope: ['users:read'],
      callbackURL: '/auth/slack/callback',
      state: "read"
  }));


  app.get("/auth/slack/callback",passport.authenticate('slack'), (req, res) => {
      const state = req.query.state;

      if (state === "identity"){
        // we know this was the first authenticate, and so probably does not have the users:read scope

        // redirect the user to be authed for the users:read scope

        res.redirect("/auth/slack/import")


      } else if (state ==="read"){
        // we know this was the second authenticate, and the token SHOULD have the users:read scope
        slackImporter.importSlack( req.user.accessToken ,res)
      }
    });


    app.get("/slack", (req, res) => {
        res.sendFile(path.resolve('./views/slack_auth.html'));
    });

    app.get("/login", (req, res) => {
        res.sendFile(path.resolve('./views/login.html'));
    });

    //login/logout functions
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
};
