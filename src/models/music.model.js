const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  uri: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId, // Acts as foreign key
    ref: "user", // this is reference given -> in which collection in DB we can find the ObjectId
    required: true,
  },
});

const musicModel = mongoose.model("music", musicSchema);

module.exports = musicModel;
