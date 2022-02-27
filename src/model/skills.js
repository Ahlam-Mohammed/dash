const mongoose = require('mongoose');

// Schema Landing 
const skillsSchema  = mongoose.Schema({
    // _id:{
    //     type: String,
    // },
    name: {
        type: String,
    },
    ratio:{
        type: String,
        require: true
    },
    is_active: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('skill', skillsSchema);