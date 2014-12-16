Meteor.startup(function () {
    process.env.MAIL_URL = 'smtp://postmaster@sandbox37151f5f2462476285fa152b4d7c65c6.mailgun.org:52d47244ba57b9a751f576928b009779@smtp.mailgun.org:587';
});

Meteor.methods({
    sendEmail: function (email) {
        //if (this.userId == userId) {
        console.log("sending email = " + email);
        Email.send(email);
        //}
    }
});