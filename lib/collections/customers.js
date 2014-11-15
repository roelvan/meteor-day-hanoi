CustomerSchema = new SimpleSchema({
	firstName: {
		type: String,
		label: 'First Name'
	},
	lastName: {
		type: String,
		label: 'Family Name'
	},
	email: {
		type: 'Email'
	}
});

Customers = new Mongo.Collection('customers');
Customers.attachSchema(CustomerSchema)

Customers.allow({
	insert: function (userId) {
		return userId;
	},
	remove: function (userId) {
		return userId;
	},
	update: function (userId) {
		return userId;
	}
});