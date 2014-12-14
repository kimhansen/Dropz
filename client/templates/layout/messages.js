
showMessage = function (title, message, type) {
    //var message = Session.get('displayMessage');
    //if (message) {
    //    var stringArray = message.split('&amp;');
    //    return stringArray[0];
    //}

    if (type == "info")
    {

    }
    else if (type == "success")
    {

    }
    else if (type == "warning")
    {

    }
    else if (type == "error")
    {

    }

    Session.set("displayMessageType", type);
    Session.set("displayMessageTitle", title);
    Session.set("displayMessageMessage", message);

    Meteor.setTimeout(function () {
        Session.set("displayMessageType", undefined);
        Session.set("displayMessageTitle", undefined);
        Session.set("displayMessageMessage", undefined);
    }, 5000);
};


Template.messages.helpers({
    messageType: function (type) {
        return type == Session.get("displayMessageType");
    },
    notificationTitle: function() {
        return Session.get("displayMessageTitle");
    },
    notificationMessage: function() {
        return Session.get("displayMessageMessage");
    }
});


//Meteor.autorun(function() {
//    // Whenever this session variable changes, run this function.
//    var message = Session.get('displayMessage');
//    console.log("autorun = " + message);
//    if (message) {
//        var stringArray = message.split('&amp;');
//        ui.notify(stringArray[0], stringArray[1])
//            .effect('slide')
//            .closable();
//
//        Session.set('displayMessage', null);
//    }
//});