Template.registration.events({
    'submit #register-form' : function(e, t) {
        e.preventDefault();
        var email = t.find('#account-email').value,
            password = t.find('#account-password').value,
            name = t.find('#account-name').value;

        //Trim and validate the input

        // TODO - add startup name
        Accounts.createUser({"email": email, "password": password, "name": name}, function(err){
            if (err) {
                showMessage("Error", "Please fill in all fields", "warning");
                console.log("Error = " + err);
                // Inform the user that account creation failed
            } else {
                console.log("Successfully created user");
                Router.go("investors");

                // Success. Account has been created and the user
                // has logged in successfully.
            }
        });

        return false;
    }
});