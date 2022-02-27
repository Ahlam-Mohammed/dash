const mongoose = require('mongoose');

// Schema Landing 
const aboutSchema  = mongoose.Schema({
    displayName: {
        type: String,
        required: true
    },
    professionalName: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: true
    },
    cv: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    is_active: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('about', aboutSchema);