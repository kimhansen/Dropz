Template.top_navigation.events({
    'click #overview_button': function (e) {
        e.preventDefault();
        Router.go("overview");
    },
    'click #faq_button': function (e) {
        e.preventDefault();
        Router.go("faq");
    },
    'click #logout': function (e) {
        e.preventDefault();
        Meteor.logout(function (err) {
            if (err) {
                console.log("error = " + err);
            }
            else {
                //Router.go("takeyourpick");
                console.log("logged out successful");
            }
        });
    }
});

Template.top_navigation.helpers({
    user_information: function() {
        var user = Meteor.user();
        return user.startup;
    }
});
