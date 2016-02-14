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

        events: {},

        subview: AboutItemView
    });

    return AboutIndexView;
});
