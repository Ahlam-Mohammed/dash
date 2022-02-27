const mongoose = require('mongoose');

// Schema Landing 
const experienceSchema  = mongoose.Schema({
    job: {
        type: String,
        require: true
    },
    job_title:{
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    is_active: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('experience', experienceSchema);