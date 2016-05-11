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

    var EffectiveListView = Backbone.CollectionView.extend({
        template: JST['app/scripts/templates/members/effectiveList.hbs'],

        tagName: 'section',

        id: 'effectiveList',

        className: 'posts-list effective-list',

        events: {
        },

        subview: MembersItemView,

    });

    return EffectiveListView;
});
