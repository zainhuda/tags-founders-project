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
            //console.log("docs is", docs);
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

    // update user profile
    app.post('/api/update_profile', (req, res) => {
        //console.log("user is: ", req.user);
        //console.log("req is: ", req.body.body);
        const userId = req.user.id;  // right now it doesnt use the user id to find the user but the slack id
        const teamId = req.user.slackTeamId;
        let userData = JSON.parse(req.body.body);
/*        console.log("userId: ", userId);
        console.log("slackTeamId", teamId);
        console.log("userData: ", userData);*/

        mongoose.connection.db.collection(teamId, (err, collection) => {
            if (err) {
                // handle the error
                console.log("error boy ", err)
            }
            else {
                // lets find the user and update their profile
                collection.findOneAndUpdate({
                        "id": req.user.slackId
                    },{ $set: {
                        // whatever fields needs to be changed happen here
                    "real_name": userData.firstName + " " + userData.lastName,
                    "email": userData.email,
                    "position": userData.position
                }},
                    {
                        // dont create a new user this might mess up populating the explore page
                        upsert: false,
                        new: true
                    })
                    .then((user) => {
                        res.send(user);
                        //console.log("user: ", user)
                    })
                    .catch((err) => {
                        console.log("big error", err);
                    })
            }
        })
    });


};

