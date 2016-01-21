import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import * as template from '../templates/address';

var addressEdit = Backbone.View.extend({
    tagName: "form",

    template: _.template(template.address.form),

    initialize: function(id) {
        this.address = app.addressBook.get(id);
        window.app.ui.$content.html(this.render().el);
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

export default addressEdit;