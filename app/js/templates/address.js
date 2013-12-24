// js/templates/address.js

(function(app) {

    var table = '' +
        '<table>' +
            '<thead>' +
                '<tr>' +
                    '<td>First Name</td>' +
                    '<td>Last Name</td>' +
                    '<td>Email</td>' +
                    '<td>Phone</td>' +
                    '<td>Edit</td>' +
                '</tr>' +
            '</thead>' +
            '<tbody>' +
            '</tbody>' +
        '</table>';

    var row = '' +
        '<td><a href="#address/<%= id %>"><%= firstName %></a></td>' +
        '<td><%= lastName %></td>' +
        '<td><a href="mailto:<%= email %>"><%= email %></td>' +
        '<td><%= phone %></td>' +
        '<td><a href="#address/<%= id %>/edit">Edit</a></td>' +
        '<td><a href="#address/index" class="delete">Delete</a></td>';

    var single = '' +
        '<p><span class="bold">First Name: </span> <span><%= firstName %></span></p>' +
        '<p><span class="bold">Last Name: </span> <span><%= lastName %></span></p>' +
        '<p><span class="bold">Email: </span> <span><%= email %></span></p>' +
        '<p><span class="bold">Phone: </span> <span><%= phone %></span></p>' +
        '<div>' +
            '<button class="address-delete" value="delete">Delete</button>' +
        '</div>';

    var form = '' +
        '<form>' +
            '<div>' +
                '<input type="text" name="first-name" placeholder="First Name" value="<%= firstName %>"/>' +
            '</div>' +
            '<div>' +
                '<input type="text" name="last-name" placeholder="Last Name" value="<%= lastName %>"/>' +
            '</div>' +
            '<div>' +
                '<input type="text" name="email" placeholder="Email" value="<%= email %>"/>' +
            '</div>' +
            '<div>' +
                '<input type="text" name="phone" placeholder="Phone" value="<%= phone %>"/>' +
            '</div>' +
            '<div>' +
                '<button class="save" type="submit">Save</button> or ' +
                '<a href="#address/index">Cancel</a>' +
            '</div>' +
        '</form>';

    var address = {
        table: table,
        row: row,
        single: single,
        form: form
    };

    $.extend(app.template = app.tempate || {}, {
        address: address
    });

}(window.app = window.app || {}));