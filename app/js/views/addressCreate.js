// js/views/addressCreate.js

(function(app) {

    var addressCreate = Backbone.View.extend({
        tagName: "form",

        template: _.template(app.template.address.form),

        initialize: function() {
            this.address = new app.model.address();
            app.ui.$content.html(this.render().el);
        },

        render: function() {
            this.$el.html(this.template(this.address.toJSON()));
            return this;
        },

        events: {
            "click button.save": "save"
        },

        save: function(event) {
            event.stopPropagation();
            event.preventDefault();

            var addressInfo = {
                firstName: this.$el.find('input[name="first-name"]').val(),
                lastName: this.$el.find('input[name="last-name"]').val(),
                email: this.$el.find('input[name="email"]').val(),
                phone: this.$el.find('input[name="phone"]').val(),
                id: Math.floor(Math.random() * 100) + 1
            };

            this.address.set(addressInfo);
            app.addressBook.add(this.address);

            window.location.hash = "address/index";
        }
    });

    $.extend(app.view = app.view || {}, {
        addressCreate: addressCreate
    });

}(window.app = window.app || {}));