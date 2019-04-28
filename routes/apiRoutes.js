const mongoose = require('mongoose');
const slackServices = require("../services/slack_services");
const WorkspaceConfig = mongoose.model('workspaceConfigs');

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
        console.log("userId: ", userId);
        console.log("slackTeamId", teamId);
        console.log("userData: ", userData);
        mongoose.connection.db.collection(teamId, (err, collection) => {
            console.log("userdata inside collection", userData);
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
                    "teamData.email": userData.email,
                    "teamData.interests": userData.interests,
                    "teamData.skills": userData.skills
                }},
                    {
                        // dont create a new user this might mess up populating the explore page
                        upsert: false,
                        new: true,
                        returnOriginal: false,
                    })
                    .then((user) => {
                        res.send(user);
                        console.log("user: ", user)
                    })
                    .catch((err) => {
                        console.log("big error", err);
                    })
            }
        })
    });

    // update tags
    // used in settings and onboarding form
    app.post('/api/update_tags', (req, res) => {
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
                    "teamData.skills": requestData.skills,
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

    // update interests
    // used in the Modal
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


    // update skills
    // used in the Modal
    app.post('/api/update_skills', (req, res) => {
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
                    "teamData.skills": requestData.skills,
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


    // search for users based on skills
    app.get('/api/search/skills/:skill', (req, res) => {
        let teamId = req.user.slackTeamId;
        let skill = req.params.skill;
        //search the collection
        mongoose.connection.db.collection(teamId, (err, collection) => {
            if (err) {
                console.log("there was an error", err)
            }
            else {
                collection.find({"teamData.skills": skill})
                    .toArray((err, docs) => {
                        console.log("we found docs:", docs);
                        res.json(docs);
                    })
            }
        })
    });

	// serach for users based on interests
    app.get('/api/search/interest/:interest', (req, res) => {
        let teamId = req.user.slackTeamId;
        let interest = req.params.interest;
        //search the collection
        mongoose.connection.db.collection(teamId, (err, collection) => {
            if (err) {
                console.log("there was an error", err)
            }
            else {
                collection.find({"teamData.interests": interest})
                    .toArray((err, docs) => {
                        console.log("we found docs:", docs);
                        res.json(docs);
                    })
            }
        })
    });

    // serach for users
    app.get('/api/search/:query', (req, res) => {
        let teamId = req.user.slackTeamId;
        let query = req.params.query;
        //search the collection
        mongoose.connection.db.collection(teamId, (err, collection) => {
            if (err) {
                console.log("there was an error", err)
            }
            else {
                // regex query to do a substring serach, options ix makes cases and spaces insensitive
                collection.find({
                    $or: [
                        {"teamData.interests": {"$regex": query, "$options": "ix"}},
                        {"teamData.skills": {"$regex": query, "$options": "ix"}},
                        {"teamData.title": {"$regex": query, "$options": "ix"}},
                        {"teamData.firstName": {"$regex": query, "$options": "ix"}},
                        {"teamData.lastName": {"$regex": query, "$options": "ix"}},
                        {"teamData.email": {"$regex": query, "$options": "ix"}},
                        {"teamData.phone": {"$regex": query, "$options": "ix"}}
                    ]
                }).toArray((err, docs) => {
                    console.log("we found these", docs);
                    res.json(docs);
                })
            }
        })
    });

    // returns list of slack 'inactive' users
    app.get('/api/inactive_users/', async (req, res) => {
        let teamId = req.user.slackTeamId;

        // sync the deleted field with slack's database first
        console.log("Starting 'slack deleted field' synchronization");
        await slackServices.updateSlackUserInactivity(req.user.slackAccessToken);
        console.log("Finished slack synchronization");

        // query for users that are inactive on slack, then send it back in the response
        mongoose.connection.db.collection(teamId, (err, collection) => {
            console.log(teamId);
            if (err) {
                console.log("err", err);
            }
            collection.find({"slackData.deleted" : true}).toArray( (err, docs) => {
                res.json(docs);
            })
        })
    });

    // delete user
    app.post('/api/update_inactivity', (req) => {

        let inactiveUsers = req.body.inactiveUsers; // users that will be set to inactive
        let activeUsers = req.body.activeUsers; // users that will be set to active
        let teamId = req.user.slackTeamId;

        // search and update the collection
        mongoose.connection.db.collection(teamId, (err, collection) => {
            if (err) {
                console.log("there was an error", err)
            }
            else {
                collection.updateMany(
                  {"slackData.id": {$in: inactiveUsers}},
                  { $set: {"isInactive": true}}
                );
                collection.updateMany(
                  {"slackData.id": {$in: activeUsers}},
                  {$set: {"isInactive": false}}
                  );
            }
        })
    });

    // workspace config api
    app.get('/api/get_config', (req, res) => {
        let teamId = req.user.slackTeamId;
        let config;
        WorkspaceConfig.findOne({slackTeamId: teamId}).then((configFile) => {
            config = configFile;
            res.json(config);
        });
    })


};
