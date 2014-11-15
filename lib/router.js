Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'customersList',
  waitOn: function() {
    return [
      Meteor.subscribe('customers'),
    ];
  },
});

Router.route('/customers/create', {
  name: 'customerCreate'
});


Router._filters = {
  	isLoggedIn: function() {
	    if (!Meteor.user()){
	    	if (Meteor.loggingIn())
	        	this.render(this.loadingTemplate);
	      	else
	        	this.redirect('atSignIn');
	    } else {
	    	this.next();
	    }
	}
};

var filters = Router._filters;

Router.onBeforeAction(filters.isLoggedIn, {
	except: ['atSignIn', 'atSignUp', 'atResetPwd', 'atForgotPwd']
});