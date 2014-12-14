Meteor.publish('investors', function () {
    return Investors.find({"userId": this.userId});
});
