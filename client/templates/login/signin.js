Template.signin.events({
    'click #account-click': function (event) {
        //console.dir(event);
        //console.log("id = " + this.account);
        Session.set("accountId", this.account);
        //var account = Accounts.findOne(this.params._id);
        //console.log("account")

        Meteor.call('setSavedAccount', this.account, function (error, result) { // display the error to the user and abort
            if (error) {
                return alert(error.reason);
            }
        });

        //getAccountDetails(this.account);
    },
    'click #refreshAccount': function (event) {
        getAccountDetails(getSelectedAccountId());
    },


    'submit #login-form': function (e, t) {
        e.preventDefault();
        // retrieve the input field values
        var email = t.find('#login-email').value
            , password = t.find('#login-password').value;

        // Trim and validate your fields here....

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function (err) {
            if (err) {
                console.log("error = " + err);
                // TODO improve error messages
                showMessage("Error", "Please fill in all fields", "warning");
            }
            // The user might not have been found, or their passwword
            // could be incorrect. Inform the user that their
            // login attempt has failed.
            else {
                Router.go("investors");
            }

            // The user has been logged in.
        });
        return false;
    }

});