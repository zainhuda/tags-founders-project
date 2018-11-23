const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/slack', passport.authorize('Slack', {
      scope: ['users:read']
  }));


  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/auth/slack/callback', passport.authenticate('Slack'));

  app.get('/api/logout', (req, res) => {
     req.logout();
     res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
      res.send(req.user);
  })
};
