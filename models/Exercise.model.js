const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const exerciseSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  imagen:{
    type: String,
    required: true
  },
  video:{
    type: String
  },
  notas:{
    type: String
  }
});

module.exports = model("Exercise", exerciseSchema);
