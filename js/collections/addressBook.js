// js/collections/addressBook.js

(function(app) {

    var addressBook = Backbone.Collection.extend({
        model: app.model.address
    });

    $.extend(app.collection = app.collection || {}, {
        addressBook: addressBook
    });

}(window.app = window.app || {}));