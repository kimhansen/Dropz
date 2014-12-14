//Number.prototype.formatMoney = function(c, d, t){
//    var n = this,
//        c = isNaN(c = Math.abs(c)) ? 2 : c,
//        d = d == undefined ? "." : d,
//        t = t == undefined ? "," : t,
//        s = n < 0 ? "-" : "",
//        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
//        j = (j = i.length) > 3 ? j % 3 : 0;
//    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
//};

var DateFormats = {
    short: "DD MMMM YYYY - HH:mm",
    long: "ddd DD MMM",
    deals: "DD MMM"
};

formatDate = function (datetime, format) {
    if (moment) {
        var f = DateFormats[format];
        return moment(datetime).format(f);
    }
    else {
        return datetime;
    }
};

Handlebars.registerHelper("formatDate", function (datetime, format) {
    return formatDate(datetime, format);
});

Handlebars.registerHelper("formatLongName", function (name, length) {
    if (name.length > length) {
        return name.substring(0, length - 2) + "..";
    }
    return name;
});

Handlebars.registerHelper("formatNxtToFixed", function (number, decimals) {
    if (number != undefined) {
        var value = Number(number);
        value = value / 100000000;
        return value.toFixed(decimals);
    }
    return "-";
});

Handlebars.registerHelper("formatVolatility", function (number) {
    if (number != undefined) {
        return Number(number).toFixed(2);
    }
    return "-";
});

Handlebars.registerHelper("formatBalanceDecimals", function (number, decimals) {
    if (number != undefined) {
        var value = Number(number);
        value = value / Math.pow(10, decimals);
        return value.toFixed(decimals);
    }
    return "-";
});

Handlebars.registerHelper("formatNoDecimals", function (number) {
    var value = Number(number);
    return value.toFixed(0);
});

Handlebars.registerHelper("formatRatio", function (number) {
    var value = Number(number);
    return Math.round(value * 10000) / 100;
});

formatBalanceDecimals = function (number, decimals) {
    if (number != undefined) {
        var value = Number(number);
        value = value / Math.pow(10, decimals);
        return value;
    }
    return "-";
};

Number.prototype.formatMoney = function(decPlaces, thouSeparator, decSeparator, currencySymbol) {
    // check the args and supply defaults:
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces;
    decSeparator = decSeparator == undefined ? "." : decSeparator;
    thouSeparator = thouSeparator == undefined ? "," : thouSeparator;
    currencySymbol = currencySymbol == undefined ? "$" : currencySymbol;

    var n = this,
        sign = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;

    return sign + currencySymbol + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
};

Handlebars.registerHelper("formatQuantity", function (number) {
    var quantity = Number(number);
    return quantity.formatMoney(0, ",", ".", "");
});
