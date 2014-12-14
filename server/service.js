/**
 * Meteor Publish Policy
 *
 * :TODO: Refactor for performance according to http://andrewscala.com/meteor/ ?
 */

//var NXT_IP_ADDRESS = "54.83.4.11";
var NXT_IP_ADDRESS = "23.89.198.45:7876";

// :Security: All companies accessible to all users!
//Meteor.publish('companies', function () {
//    return Companies.find({}, {sort: {name: 1}});
//});


Meteor.methods({
    getVolatility: function (account) {
        this.unblock();
        return Meteor.http.call("GET", "http://btcvol.info/latest");
    }
});

Meteor.methods({
    pingServer: function () {
        this.unblock();
        return true;
    }
});
