const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const exerciseLogSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    exerciseId:{
        type: Schema.Types.ObjectId,
        ref: 'Exercise'
    },
    series:{
        type: Number
    },
    repes:{
        type: Number
    },
    peso:{
        type: Number
    }
});

module.exports = model("ExerciseLog", exerciseLogSchema);