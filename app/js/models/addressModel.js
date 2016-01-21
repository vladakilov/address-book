import Backbone from 'backbone';

var model = Backbone.Model.extend({
    defaults: {
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    }
});

export default model;
