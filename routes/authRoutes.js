const passport = require('passport');
const path = require('path');

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

    //slack routes
    app.get('/auth/slack/callback', passport.authenticate('Slack', {
        successRedirect: '/slack/import',
        failureRedirect: '/auth/slack/failure'
    }));

    app.get('/auth/slack/import/callback', passport.authenticate('Slack', {
        successRedirect: '/slack/import/success',
        failureRedirect: '/auth/slack/import/failure'
    }));

    app.get('/auth/slack/', passport.authenticate('Slack', {
        scope: ['identity.basic', 'identity.email', 'identity.avatar', 'identity.team'],
        callbackURL: '/auth/slack/callback',
    }));

    app.get("/auth/slack/import", passport.authenticate('Slack', {
        scope: ['users:read'],
        callbackURL: '/auth/slack/import/callback',
    }));



    app.get("/slack", (req, res) => {
        res.sendFile(path.resolve('./views/slack_auth.html'));
    });

    app.get("/slack/import", (req, res) => {
        res.sendFile(path.resolve('./views/slack_auth_import.html'));
    });

    app.get("/slack/import/success", (req, res) => {
        res.sendFile(path.resolve('./views/slack_auth_import_success.html'));
    });

    app.get("/auth/slack/import/callback", (req, res) => {
        res.sendFile(path.resolve('./views/slack_auth_import.html'));
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
