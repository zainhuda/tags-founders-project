const mongoose = require('mongoose');
const { Schema } = mongoose;

const defaultLabels = {
    All: [],
    Office: [
        {label: "Calgary", sort: ""},
        {label: "Toronto", sort: ""},
        {label: "San Francisco", sort: ""},
        {label: "Beijing", sort: ""}
    ],
    Department: [
        {label: "Finance", sort: ""},
        {label: "Marketing", sort: ""},
        {label: "Engineering", sort: ""},
        {label: "Human Resources", sort: ""}
    ]
}

const workspaceConfigSchema = new Schema({
    labels: Object
});
module.exports = mongoose.model('workspaceConfig', workspaceConfigSchema);
