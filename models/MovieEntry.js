const mongoose = require('mongoose');

const movieEntrySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    year: { type: Number, required: true},
    director: { type: String, required: true },
    rating: {type: Number, required: true, min: 0, max: 10},
    description: {type: String, required: true, trim: true}
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('MovieEntry', movieEntrySchema);
