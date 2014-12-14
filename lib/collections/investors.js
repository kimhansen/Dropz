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

/**
 * Check if an investor with the given email has already been inserted in the database.
 */
investorExists = function (email) {
    var investors = Investors.find({"userId": Meteor.user()._id, "email" : email});
    return (investors.count() > 0)
};

Meteor.methods({
    insertInvestor: function (investorAttributes) {
        check(this.userId, String);
        //check(accountAttributes, {
        //    title: String,
        //    account: String
        //});

        if (investorExists(investorAttributes.email)) {
            throw new Meteor.Error(500, 1, "Investor with email: " + investorAttributes.email + " already exists.");
            //return("Investor with email: " + investorAttributes.email + " already exists.")
        } else {
            var investorInsertAttributes = extendOwnerInformation(investorAttributes);
            Investors.insert(investorInsertAttributes);
        }

        //var investor = _.extend(investorAttributes, {
        //    userId: user._id, startup_owner: user.emails[0].address, submitted: new Date()
        //});
        //Investors.insert(investor);
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