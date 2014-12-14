Handlebars.registerHelper('page_title', function(path) {
    var page = Router.current().route.getName();
    var title = "";
    //console.log("page: " + page);
    if (page == "appOffers")
    {
        title = "Offers";
    }
    else if (page == "backofficeEmails")
    {
        title = "Emails";
    }
    else if (page == "backofficeOffers")
    {
        title = "Offers";
    }
    else if (page == "backofficeUsers")
    {
        title = "Users";
    }

    return title;
});