const passport = require("passport");
const path = require("path");
const requestPromise = require("request-promise");
const async = require("async");
const keys = require("../config/keys");
const slackImporter = require("../services/slack_importer");
const axios = require("axios");
const mongoose = require('mongoose');
const User = mongoose.model('users');

let DOMAIN;
if (process.env.ENV === "prod"){
    DOMAIN = "https://westernfn.herokuapp.com/auth/slack/callback";
} else {
    DOMAIN = "http://localhost:5000/auth/slack/callback";
}
const REDIRECT_URI_PARAM = "&redirect_uri=" + DOMAIN;


module.exports = app => {
  // google oauth
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // google oauth callback
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "/auth/google/success",
      failureRedirect: "/auth/google/failure"
    })
  );

  app.get("/auth/slack/", (req, res) => {
    res.redirect(
      "https://slack.com/oauth/authorize?client_id=484756884274.486265867267&scope=identity.basic,identity.email,identity.avatar,identity.team&state=login"
       + REDIRECT_URI_PARAM
    );
  });

  app.get("/auth/slack/import", (req, res) => {
    res.redirect(
      "https://slack.com/oauth/authorize?client_id=484756884274.486265867267&scope=users:read&state=import"
      + REDIRECT_URI_PARAM
    );
  });

  app.get("/auth/slack/callback", (req, res) => {
    console.log("in slack callback - state:", req.query.state);
    const url =
      "https://slack.com/api/oauth.access?code=" +
      req.query.code +
      "&client_id=" +
      keys.slackClientID +
      "&client_secret=" +
      keys.slackClientSecret
      + REDIRECT_URI_PARAM;

    axios.get(url).then(response => {
      if (!response.data.ok) {
        console.log(response.data);
        res
          .send("Error encountered: \n" + JSON.stringify(response.data))
          .status(200)
          .end();
      } else {
        console.log(response.data);

        // check state param to find out if we logged in or are trying to import
        if (req.query.state === "login") {
          // create user in mongo
          User.findOneAndUpdate(
            { slackId: response.data.user.id },
            { slackId: response.data.user.id, slackTeamId: response.data.team.id.toUpperCase(), slackDomain: response.data.team.domain, slackAccessToken: response.data.access_token},
            { upsert: true, new: true },
            (err, doc) => {
              if (err) {
                console.log("MONGOOSE ERROR", err);
                res.send("There was an error.");
              }

              console.log("MONGO user update/create done", doc, "id", doc._id);
              // saveUser(req,res,  "5c43bee2775bf78409ea5606")
              req.login({ id: doc._id.toString() }, err => {
                if (err) {
                  console.log("REQ LOGIN ERROR", err);
                }
                console.log("login done");
                res.redirect("/api/current_user");
              });
            }
          );
        } else if (
          req.query.state === "import" &&
          response.data.scope.includes("users:read")
        ) {
            console.log("import gang");

            slackImporter.importSlack(response.data.access_token, res);

        }
      }
    });
  });

  app.get("/slack", (req, res) => {
    res.sendFile(path.resolve("./views/slack_auth.html"));
  });

};

