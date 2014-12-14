Investors = new Mongo.Collection('investors');

ownsDocument = function (userId, doc) {
    return true;
    //return doc && doc.userId === userId;
}

Investors.allow({
    update: ownsDocument,
    remove: ownsDocument
});

//Accounts.deny({
//    update: function (userId, post, fieldNames) {
//        // may only edit the following two fields:
//        return (_.without(fieldNames, 'url', 'title').length > 0);
//    }
//});

Meteor.methods({
    insertInvestor: function (investorAttributes) {
        check(this.userId, String);
        //check(accountAttributes, {
        //    title: String,
        //    account: String
        //});

        var user = Meteor.user();
        var investor = _.extend(investorAttributes, {
            userId: user._id, startup_owner: user.emails[0].address, submitted: new Date()
        });
        Investors.insert(investor);
    }
    //,
    //activateContract: function (contract) {
    //    check(this.userId, String);
    //    //check(accountId, String);
    //    //check(balance, String);
    //
    //    var user = Meteor.user();
    //    Investors.update(contract._id, {$set: {'earner': user.emails[0].address, 'state': 1}});
    //}
});