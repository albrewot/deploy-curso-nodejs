const mongoose = require("mongoose");
require("dotenv").config();

// console.log(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/test`);
// mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/test`, {
// mongoose.connect(`mongodb://${process.env.DB_HOST}/leccion`, {
if (process.env.NODE_ENV === "production") {
  mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/test?retryWrites=true&w=majority`, {
    useCreateIndex: true,
    useNewUrlParser: true
  });
} else {
  mongoose.connect(`mongodb://${process.env.DB_HOST}/leccion`, {
    useCreateIndex: true,
    useNewUrlParser: true
  });
}

mongoose.Promise = global.Promise;

module.exports = {
  User: require("../models/User")
};
