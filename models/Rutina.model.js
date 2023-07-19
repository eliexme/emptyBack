const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const rutinaSchema = new Schema({
  userId:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  exercises:{
    type: [Schema.Types.ObjectId],
    ref: 'ExerciseLog'
  },
  porcentaje:{
    type: Number
  },
  completed:{
    type: Boolean,
    default: false
  },
  fecha:{
    type: Date,
    default: Date.now
  }
    
});

module.exports = model("Rutina", rutinaSchema);
