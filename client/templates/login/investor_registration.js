Template.registration.events({
    'submit #register-form' : function(e, t) {
        e.preventDefault();
        var email = t.find('#account-email').value,
            password = t.find('#account-password').value,
            name = t.find('#account-name').value;

        //Trim and validate the input

        // TODO - add startup name
        Accounts.createUser({"email": email, "password": password}, function(error, result){
            if (error) {
                showMessage("Error", "Please fill in all fields", "warning");
                console.log("Error = " + err);
                // Inform the user that account creation failed
            } else {
                console.log("Successfully created user - " + result);

                var result = Meteor.users.update({_id: Meteor.user()._id}, {$set : {account_type: 'admin', startup: name}});

                Router.go("investors");
            }
        });

        return false;
    }
});