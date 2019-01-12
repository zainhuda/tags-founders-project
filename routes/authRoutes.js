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

    const routes = {
        successRedirect: '/admin',
        failureRedirect: '/fail',
        adminRedirect: '/import'
    };

    // initial slack route to sign in
    app.get('/auth/slack/', passport.authenticate('Slack', {
        scope: ['identity.basic', 'identity.email', 'identity.avatar', 'identity.team'],
        callbackURL: '/auth/slack/callback',
    }));

    // initial slack route to sign in callback
    app.get('/auth/slack/callback', (req, res, next) => {
        passport.authenticate('Slack', (err, user, info) => {
            // redirect here
            console.log(user, info);
            res.redirect(routes.adminRedirect);

        })
    });

    app.get('/import', (req, res) => {
        res.send('reached: /import');
        console.log('reached: /import');
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
