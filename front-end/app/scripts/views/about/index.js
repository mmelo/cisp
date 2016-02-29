/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/about/item',
    'collectionview'
], function ($, _, Backbone, JST, AboutItemView) {
    'use strict';

    var AboutIndexView = Backbone.CollectionView.extend({
        template: JST['app/scripts/templates/about/index.hbs'],

        tagName: 'section',

        id: 'posts-list',

        className: 'posts-about',

        events: {
            'click #navigate-mission': '_mission',
            'click #navigate-scientific-board': '_scientificBoard',
            'click #navigate-scientific-comission': '_scientificComission',
            'click #navigate-thematic': '_thematic',
            'click #navigate-management': '_management',
            'click #navigate-contacts': '_contacts'
        },

        subview: AboutItemView,

        _mission: function () {
            $(window).scrollTop($('#about-mission')[0].getBoundingClientRect().top);
            App.Router.navigate('#sobre/mission', { trigger: false });
        },

        _scientificBoard: function () {
            $(window).scrollTop($('#scientific-board')[0].getBoundingClientRect().top);
            App.Router.navigate('#sobre/scientific-board', { trigger: false });
        },

        _scientificComission: function () {// WHERE IS THIS SECTION ?
            $(window).scrollTop(1763);
            App.Router.navigate('#sobre/scientific-comission', { trigger: false });
        },

        _thematic: function () {
            $(window).scrollTop($('#thematic-lines')[0].getBoundingClientRect().top);
            App.Router.navigate('#sobre/scientific-thematic-lines', { trigger: false });
        },

        _management: function () {
            $(window).scrollTop($('#management')[0].getBoundingClientRect().top);
            App.Router.navigate('#sobre/scientific-management', { trigger: false });
        },

        _contacts: function () {
            $(window).scrollTop($('#contacts')[0].getBoundingClientRect().top);
            App.Router.navigate('#sobre/contacts', { trigger: false });
        }
    });

    return AboutIndexView;
});
