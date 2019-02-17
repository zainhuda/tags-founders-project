const axios = require("axios");
const mongoose = require('mongoose');
const keys = require("../config/keys");
const GenerateSchema = require("generate-schema");
const async = require("async");

module.exports.importSlack = (accessToken, res) => {
  axios.get("https://slack.com/api/users.list?token=" + accessToken).then(response => {


    if (response.data.ok) {
      console.log("CONNECTING TO MONGO");

      const members = response.data.members;

      mongoose.connect(keys.mongoURI);
      const db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', async () => {
        // connected

        // we must generate schemas based on slack's data for mongoose

        // user schema
        const mongooseUserSchema = GenerateSchema.mongoose(

          {
              "slackData" : members[0],
              "teamData": {},
              "isConfirmed": false
          }
        );
        const team_id = members[0].team_id.toUpperCase();


        let User;
        try {
          User = mongoose.model(team_id);
        } catch {
          console.log("Model for", team_id, "did not exist, creating.");
          User = mongoose.model(team_id, mongooseUserSchema, team_id);
        }

        console.log("start");

        for (let i = 0; i < members.length; i++){

          const user = new User({
              'slackData' : members[i],
              'teamData' : {
                "firstName": members[i].profile.first_name,
                "lastName": members[i].profile.last_name,
                  "image_512": members[i].profile.image_512,
                  "title": members[i].profile.title,
                  "phone": members[i].profile.phone,
                  "email": "",
                  "interests": [],
                  "skills": []

              },
              "isConfirmed": false
          });

          try{
            await User.find({id: members[i].id}, (err, docs) => {
            if (docs.length){
              console.log("User already created:", members[i].name ,members[i].id)
            } else {
              user.save()
            }
          });
          } catch(e) {
            console.log("ERROR:", e)
          }

        }
        console.log("done for teamid", team_id);

         db.collection(team_id).find().toArray(function(err, result) {
            if (err) throw err;
            console.log("Team Data", result);
            res.send(result);
         });

      });
    }
  })
};
