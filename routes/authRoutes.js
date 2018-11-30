const passport = require('passport');

module.exports = (app) => {
    //google routes
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get( '/auth/google/callback',
        passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
    }));

    //slack routes
    app.get('/auth/slack', passport.authorize('Slack', {
        scope: ['users:read']
    }));

    app.get('/auth/slack/callback', passport.authenticate('Slack'));


    //login/logout functions
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
};
