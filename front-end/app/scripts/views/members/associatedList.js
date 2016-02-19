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

    var AssociatedListView = Backbone.CollectionView.extend({
        template: JST['app/scripts/templates/members/effectiveList.hbs'],

        tagName: 'section',

        id: 'associatedList',

        className: 'posts-list posts-list--members',

        events: {
        },

        subview: MembersItemView,

    });

    return AssociatedListView;
});
