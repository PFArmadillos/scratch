const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const Subscriptions = require('./SubscriptionsModel');
const Trials = require('./TrialsModel');

const userSchema = new Schema ({
	firstName: {
		type: String,
		required: [true, 'Please input your first name'], //This mean the field 'firstName' is required, if it's empty, it will log the string as the error message
	},
	lastName: {
		type: String,
		required: [true, 'Please input your last name'],
	},
	email: {
		type: String,
		required: [true, 'Please input your email'],
	},
	subscriptionsID: {
		type: Schema.Types.ObjectId,
		ref: 'Subscriptions',
	}, // This refered to the 'Subscriptions' model by '_id' property created in SubscriptionsModel.js
	trialsID: {
		type: Schema.Types.ObjectId,
		ref: 'Trials',
	}, // This refered to the 'Trials' model by '_id' property created in TrialsModel.js
  Budget: Number,
});

const User = model('User', userSchema);

module.exports = User;