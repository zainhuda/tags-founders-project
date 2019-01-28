const mongoose = require('mongoose');

module.exports = app => {

    // api to get profiles that belong to team with teamId
    app.get('/api/profiles/', (req, res) => {
    let teamId = req.user.slackTeamId;
    mongoose.connection.db.collection(teamId, (err, collection) => {
        console.log(teamId);
        if (err) {
            console.log("err", err);
        }
        console.log("collection is: ", collection);
        collection.find({}).toArray( (err, docs) => {
            console.log("docs is", docs);
            res.json(docs);
        })
        })
    });

    //login/logout functions
    app.get("/api/logout", (req, res) => {
        req.logout();
        res.send(req.user);
    });


    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
        console.log("current user is: ", req.user);
        console.log("api for current user called");
    });

    app.post('/api/update_profile', (req, res) => {
        console.log("req is: ", req.body.body);
    });

};

