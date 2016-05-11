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

        className: 'posts-list associated-list',

        events: {
        },

        subview: MembersItemView,

    });

    return AssociatedListView;
});
