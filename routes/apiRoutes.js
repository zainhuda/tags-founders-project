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


    // get user data from mongo
    app.get('/api/get_profile', (req, res) => {
       let teamId = req.user.slackTeamId;
       mongoose.connection.db.collection(teamId, (err, collection) => {
           if (err) {
               // handle error
               console.log("err boy: ", err)
           }
           else {
               // no error we good lets go find the user
               console.log("res.user.slackID:", req.user.slackId);
               collection.find({
                   // we might want to serach by mongo id
                   "slackData.id": req.user.slackId
               }).toArray((err, docs) => {
                   console.log("docs", docs);
                   res.send(docs);
               })
           }
       })
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
                        "slackData.id": req.user.slackId
                    },{ $set: {
                        // whatever fields needs to be changed happen here
                    "teamData.firstName": userData.firstName,
                    "teamData.lastName": userData.lastName,
                    "teamData.image_512": userData.image_512,
                    "teamData.title": userData.title,
                    "teamData.phone": userData.phone,
                    "teamData.email": userData.email
                }},
                    {
                        // dont create a new user this might mess up populating the explore page
                        upsert: false,
                        new: true,
                        returnOriginal: false,
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

    app.post('/api/update_interests', (req, res) => {
        const userId = req.user.id;  // right now it doesnt use the user id to find the user but the slack id
        const teamId = req.user.slackTeamId;
        let requestData = JSON.parse(req.body.body);

        console.log("request data is:", requestData);
        mongoose.connection.db.collection(teamId, (err, collection) => {
            if (err) {
                // handle the error
                console.log("error boy ", err)
            }
            else {
                // lets find the user and update their profile
                collection.findOneAndUpdate({
                        "slackData.id": req.user.slackId
                    },{ $set: {
                        // whatever fields needs to be changed happen here
                    "teamData.interests": requestData.interests,
                }},
                    {
                        // dont create a new user this might mess up populating the explore page
                        upsert: false,
                        new: true,
                        returnOriginal: false,
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

