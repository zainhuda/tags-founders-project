const axios = require("axios");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const GenerateSchema = require("generate-schema");
const async = require("async");

const importSlackUsers = (accessToken, res) => {
  axios
    .get("https://slack.com/api/users.list?token=" + accessToken)
    .then(async response => {
      if (response.data.ok) {
        console.log("CONNECTING TO MONGO");

        const members = response.data.members;

        // we must generate schemas based on slack's data for mongoose
        // user schema
        const mongooseUserSchema = GenerateSchema.mongoose({
          slackData: members[0],
          teamData: {},
          isConfirmed: false,
          isInactive: false
        });


        const team_id = members[0].team_id.toUpperCase();

        let User;
        try {
          User = mongoose.model(team_id);
        } catch {
          console.log("Model for", team_id, "did not exist, creating.");
          User = mongoose.model(team_id, mongooseUserSchema, team_id);
        }

        const UserSchema = mongoose.model(team_id).schema;
        UserSchema.index( { "$**": "text" } );


        console.log("starting Slack import");

        // create a Text index which has all text fields for searching
        // mongoose.connection.db.collection(team_id).createIndex( { "$**": "text" } );


        for (let i = 0; i < members.length; i++) {
          const user = createUserFromSlackMemeber(members[i], User);

          try {
            await User.findOne(
              { "slackData.id": user.slackData.id },
              (err, userDoc) => {
                if (userDoc != null) {
                  console.log(
                    "User already created:",
                    user.teamData.firstName + " " + user.teamData.lastName,
                    user.slackData.id
                  );
                } else if (user.slackData.is_bot || user.slackData.id === "USLACKBOT") {
                  console.log("User is bot, not saving");
                }
                else {
                  user.save();
                }
              }
            );
          } catch (e) {
            console.log("ERROR:", e);
          }
        }
        console.log("done for teamid", team_id);

        mongoose.connection.db.collection(team_id)
          .find()
          .toArray(function(err, result) {
            if (err) throw err;
            console.log("Team Data", result);
            res.send(result);
          });
      }
    });
};

// pulls user data from slack and updates the 'deleted' field in our database for each user, to update their inactivity status
// if there is a slack user that is not in our database, we will add them in
const updateSlackUserInactivity = async accessToken => {
  const response = await axios.get(
    "https://slack.com/api/users.list?token=" + accessToken
  );

  if (!response.data.ok) {
    console.log("Error!", response.data.error);
    return false;
  }
  const members = response.data.members;
  const team_id = response.data.members[0].team_id.toUpperCase();

  // we must generate schemas based on slack's data for mongoose
  // user schema
  const mongooseUserSchema = GenerateSchema.mongoose({
    slackData: members[0],
    teamData: {},
    isConfirmed: false,
    isInactive: false
  });

  let User;
  try {
    User = mongoose.model(team_id);
  } catch {
    console.log("Model for", team_id, "did not exist, creating.");
    User = mongoose.model(team_id, mongooseUserSchema, team_id);
  }

  for (let i = 0; i < members.length; i++) {
    try {
      // .exec() makes the operation a ture javascript promise
      const userDoc = await User.findOne({
        "slackData.id": members[i].id
      }).exec();

      if (userDoc != null) {
        // user already exists, need to update their isInactive field
        userDoc.slackData.deleted = members[i].deleted;

        // big async to ensure that all mongoose operations are completed
        try {
          await userDoc.save();
          // console.log("Success");
        } catch (e) {
          console.log("Error saving userDoc", e);
        }
      } else if (members[i].is_bot || members[i].id === "USLACKBOT" ) {
        console.log("User is a bot, not saving");
      }
      else {
        // user doesn't exist, create a new user with slack info and save
        console.log("Encounted user that hasn't been added, adding");
        const user = createUserFromSlackMemeber(members[i], User);
        user.save();
      }
    } catch (e) {
      console.log("ERROR:", e);
    }
  }
  console.log("done in func");
};

const createUserFromSlackMemeber = (slackMember, UserSchema) => {

  let imageUrl = slackMember.profile.image_512;
  if (!imageUrl)
    imageUrl = slackMember.profile.image_192;


  const user = new UserSchema({
    slackData: slackMember,
    teamData: {
      firstName: slackMember.profile.first_name,
      lastName: slackMember.profile.last_name,
      image_512: imageUrl,
      title: slackMember.profile.title,
      phone: slackMember.profile.phone,
      email: "",
      interests: [],
      skills: []
    },
    isConfirmed: false
  });

  return user;
};

module.exports = {
  importSlackUsers,
  updateSlackUserInactivity
};
