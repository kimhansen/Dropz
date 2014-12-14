Router.configure({
    layoutTemplate: 'layout_holder'
    //loadingTemplate: 'loading',
    //notFoundTemplate: 'notFound',
    //waitOn: function () {
    //    return Meteor.subscribe('accounts');
    //}
});

// Splash page
Router.route('/', function () {
    this.render('splash_page');
});

// Investor list page
Router.route('/investors',
    function () {
        this.render('app');
        this.render('investors', {to: 'content'});
        this.render('top_navigation', {to: 'top_navigation'});
        this.next();
    }, {
        name: 'investors'
    });

Router.route('/investorRegistrationThankyou',
    function () {
        this.render('app');
        this.render('investorRegistrationThankyou', {to: 'content'});
        this.render('top_navigation', {to: 'top_navigation_investors'});
        this.next();
    }, {
        name: 'investorRegistrationThankyou'
    });




// Backoffice
Router.route('/backoffice', function () {
    //Session.set('layout', 'backoffice');
    //this.layout("backoffice");
    //this.render('backoffice');
    //this.render('emails', {to: 'content'});
    //this.next();

    Router.go("/backofficeUsers");
});


// Registration and login
Router.route('/signin', {name: 'signin'});
Router.route('/registration', {name: 'registration'});

// Registration and login
Router.route('/investorsignin', {name: 'investorSignin'});
Router.route('/investorregistration', {name: 'investorRegistration'});


var requireLogin = function () {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            Router.go('signin');
        }
    } else {
        this.next();
    }
}


Router.onBeforeAction(requireLogin, {only: 'investors'});

Router.onBeforeAction(requireLogin, {only: 'backofficeUsers'});

//Router.onBeforeAction('dataNotFound', {only: 'accountPage'});
//Router.onBeforeAction(requireLogin, {only: 'accountSubmit'});
//Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
