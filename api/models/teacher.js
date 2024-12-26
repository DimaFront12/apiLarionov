const mongoose = require('mongoose');

const classroom = require("./class.js");

const TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    classes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: classroom,
    }],
});

module.exports = mongoose.model('teacher', TeacherSchema);