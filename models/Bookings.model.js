const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bookingSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    Date:{
        type: Date,
        required: true
    },
    startTime:{
        type: String,
        required: true
    }
    
},
{
    timestamps: true
  }
);

module.exports = model("Booking", bookingSchema);