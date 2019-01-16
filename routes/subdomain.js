const wildcardSubdomains = require('wildcard-subdomains');


module.exports = (app) => {

  app.use(wildcardSubdomains({whitelist: ['www', "westernfn"]}));


  app.get("/_sub/:test", (r, res)=> {res.send("hello!")})

};