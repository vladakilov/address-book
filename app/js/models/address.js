// js/models/address.js

(function(app) {

    var address = Backbone.Model.extend({
        defaults: {
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
        }
    });

    $.extend(app.model = app.model || {}, {
        address: address
    });

}(window.app = window.app || {}));