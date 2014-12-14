Meteor.users.allow({
    update: function(userId, doc){
        return doc._id === userId;
    }
});