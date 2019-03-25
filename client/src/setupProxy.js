const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/auth/slack', { target: 'http://localhost:5000' }));
    app.use(proxy('/api/*', {target: 'http://localhost:5000'}));
    app.use(proxy('/api/search/*', {target: 'http://localhost:5000'}))
};

// to whoever looks at this piece of code for proxy
// here's code to add multiple proxies
// app.use(proxy('/api/*', { target: http://localhost:5000}))
