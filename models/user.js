const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    lat: String,
    lng: String,
    phone: String,
    website: String,
    company_name: String,
    company_catchPhrase: String,
    bs: String,
    status: String,
    created_at: Date,
    updated_at: Date
});

// the schema is useless so far

// we need to create a models using it
const User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;