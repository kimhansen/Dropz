
Template.splash_page.events({
    "click #start_app": function(e) {
        e.preventDefault();
        Router.go("investors");
    }
});