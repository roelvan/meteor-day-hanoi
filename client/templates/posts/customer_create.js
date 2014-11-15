AutoForm.hooks({
    insertCustomerForm: {
        onSuccess: function() {
            Router.go('customersList');
        }
    }
});