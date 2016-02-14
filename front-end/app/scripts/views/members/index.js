/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/members/item',
    'collectionview'
], function ($, _, Backbone, JST, MembersItemView) {
    'use strict';

    var MembersIndexView = Backbone.CollectionView.extend({
        template: JST['app/scripts/templates/members/index.hbs'],

        tagName: 'section',

        id: 'posts-list',

        className: 'posts-list posts-list--members',

        events: {
        },

        subview: MembersItemView,

    });

    return MembersIndexView;
});
