Meteor.publish('investors', function () {
    return Investors.find();
});
