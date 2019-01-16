const wildcardSubdomains = require('wildcard-subdomains');


module.exports = (app) => {

  app.use(wildcardSubdomains());


  app.get("/_sub/:test", (r, res)=> {res.send("hello!")})

};