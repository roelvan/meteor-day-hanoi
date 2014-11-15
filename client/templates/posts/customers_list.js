Template.customersList.helpers({
  customers: function () {
  	return Customers.find();
  }
});
