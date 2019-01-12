const passport = require('passport');
const path = require('path');
const requestPromise = require('request-promise');
const async = require("async");
const keys = require('../config/keys');

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


    app.get('/auth/slack/', passport.authenticate('Slack', {
            scope: ['identity.basic', 'identity.email', 'identity.avatar', 'identity.team'],
            callbackURL: '/auth/slack/callback',
        })
    );;


    app.get("/auth/slack/import", passport.authenticate('Slack', {
        scope: ['users:read'],
        callbackURL: '/auth/slack/callback',
    }));



    app.get("/auth/slack/callback", async (req, res) => {
        const code = req.query.code;


        const response = await getSlackResponse(code, res);
        const jsonRes = JSON.parse(response);
        const scopes = jsonRes.scope;

        console.log("THE SCOPES", scopes);


        // check for users:read in scopes

        if (!scopes.includes("users:read")){
            console.log("NO USERS:READ SCOPE");
            // res.redirect("/slack/import")
            res.redirect("/auth/slack/import")
        } else {
            res.send("Great Success, Scopes: " + scopes)
        }

    });


    const getSlackResponse = (code, res) => {
      var options = {
          uri: 'https://slack.com/api/oauth.access?code='
              +code+
              '&client_id='+keys.slackClientID+
              '&client_secret='+keys.slackClientSecret+
              '&redirect_uri='+"http://localhost:5000/auth/slack/callback"+
              '&state='+"login",
          method: 'GET'
      };
      return requestPromise(options, (error, response, body) => {
          var JSONresponse = JSON.parse(body)
          if (!JSONresponse.ok){
              console.log(JSONresponse)
              res.send("Error encountered: \n"+JSON.stringify(JSONresponse)).status(200).end()
          }else{
              console.log(JSONresponse);

              console.log("SCOPES:", JSONresponse.scope);

              return JSONresponse.scope;
          }
      })
    };


    app.get("/slack", (req, res) => {
        res.sendFile(path.resolve('./views/slack_auth.html'));
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
