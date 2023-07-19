const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  
  rutinas_done:{
    type: [Schema.Types.ObjectId],
    ref: 'Rutina'
  },
  diasxmes:{
    type: Number,
    required: true,
    default: 3
  },
  rutinas_mes:{
    type: [Schema.Types.ObjectId],
    ref: 'Rutina'
  },
  rutinas_arch:{
    type: [Schema.Types.ObjectId],
    ref: 'Rutina'
  }
});

module.exports = model("User", userSchema);
