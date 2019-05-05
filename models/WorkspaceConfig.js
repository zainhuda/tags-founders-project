const mongoose = require('mongoose');
const { Schema } = mongoose;

const workspaceConfigSchema = new Schema({
    slackTeamId: String,
    labels: Object
});
module.exports = mongoose.model('workspaceConfigs', workspaceConfigSchema);
