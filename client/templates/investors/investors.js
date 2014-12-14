// Deals List
Template.investors.helpers({
    investors: function () {
        return Investors.find({}, {sort: {name: 1}});
    }
});

// Deal Item
Template.investorItem.helpers({
    getInterested: function() {
        if (this.interested == 0) {
            return "Not interested";
        } else if (this.interested == 1) {
            return "Interested";
        }
        return "-";
    },
    getStatus: function () {
        if (this.status == 0) {
            return "Not registered";
        }
        return "-";
    }
});

Template.investors.events({
    "click #deleteButton": function () {

        if (confirm('Are you sure you want to delete investor?')) {
            Investors.remove(this._id);
        }

        //Meteor.call('insertInvestor', investorInfo, function (error, result) {
        //    if (error) {
        //        console.log("Error = " + error.reason);
        //        return alert(error.reason);
        //    } else {
        //        console.log("Investor inserted");
        //    }
        //});
    },
    'submit form': function (e) {
        e.preventDefault();

        var investorName = $("#investor_name").val();
        var investorEmail = $("#investor_email").val();
        var investorExpertise = $("#investor_expertise").val();
        var investorInterested = $("#investor_interested").is(":checked");

        console.log("investorInterested = " + investorInterested);
        var investorInfo = {
            name: investorName,
            email: investorEmail,
            expertise: investorExpertise,
            interested: Number(investorInterested),
            status: 0
        };

        Meteor.call('insertInvestor', investorInfo, function (error, result) {
            if (error) {
                return alert(error.details);
            } else {
                console.log("Investor inserted");
            }
        });
    }
});