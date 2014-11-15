Template.header.helpers({
	email: function () {
		return Meteor.user().emails[0].address;
	}
})

Template.header.events({
	'click #sign-out': function () {
		Meteor.logout(function () {
			Router.go('atSignIn');
		})
	}
})