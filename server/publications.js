Meteor.publish("userData", function () {
    return Meteor.users.find({_id: this.userId},
        {fields: {"account_type": 1, "startup": 1}});
});

Meteor.publish('investors', function () {
    return Investors.find({"userId": this.userId});
});
