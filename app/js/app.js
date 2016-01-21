import $ from 'jquery';
import Backbone from 'backbone';

import router from './router';
import addressBook from './collections/addressBook';

var data = [{
    id: 1,
    firstName: "Vlad",
    lastName: "Test",
    email: "test@aol.com",
    phone: "7182342345"
}, {
    id: 2,
    firstName: "John",
    lastName: "Snow",
    email: "test2@aol.com",
    phone: "2122345234"
}, {
    id: 3,
    firstName: "Test",
    lastName: "Name",
    email: "test3@aol.com",
    phone: "6469838342"
}, {
    id: 4,
    firstName: "Bla",
    lastName: "Bla",
    email: "test4@aol.com",
    phone: "9173435684"
}];

function initializeUiCache() {
    window.app.ui = {
        $wrapper: $("#wrapper"),
        $header: $("#header"),
        $content: $("#content"),
        $footer: $("#footer")
    };
}

function initializeApp() {
    window.app.addressBook = new addressBook();
    window.app.addressBook.add(data);
    window.app.Router = new router();
    Backbone.history.start();
}

function init() {
    window.app = window.app || {};
    initializeUiCache();
    initializeApp();
}

init();