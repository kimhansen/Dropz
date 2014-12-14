/**
 * Extend the attributes to be inserted in the database with user information.
 */
extendOwnerInformation = function (attributes) {
    var user = Meteor.user();

    return _.extend(attributes, {
        userId: user._id, startup_owner: user.emails[0].address, submitted: new Date()
    });
};

