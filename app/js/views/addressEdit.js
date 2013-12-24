// js/views/addressEdit.js

(function(app) {

    var addressEdit = Backbone.View.extend({
        tagName: "form",

        template: _.template(app.template.address.form),

        initialize: function(id) {
            this.address = app.addressBook.get(id);
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
                phone: this.$el.find('input[name="phone"]').val()
            };

            this.address.set(addressInfo);

            window.location.hash = "address/index";
        }
    });

    $.extend(app.view = app.view || {}, {
        addressEdit: addressEdit
    });

}(window.app = window.app || {}));