Meteor.publish('customers', function () {
	return Customers.find();
});

Meteor.publish('singleCustomer', function (id) {
	check(id, String);
	return Customers.findOne(id);
})