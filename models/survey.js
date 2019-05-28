const mongoose = require('mongoose');
const RecipientShcema = require('./recipient');
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientShcema],
  yes: {type: Number, default:0},
  no: {type: Number, default:0},
  _user: { type: Schema.Types.ObjectId, ref: "user"},
  dateSent: Date,
  lastREsponded: Date
});

mongoose.model('surveys', surveySchema);