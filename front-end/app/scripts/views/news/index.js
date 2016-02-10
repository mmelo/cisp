/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/news/item',
    'collectionview'
], function ($, _, Backbone, JST, NewsItemView) {
    'use strict';

    var NewsIndexView = Backbone.CollectionView.extend({
        template: JST['app/scripts/templates/news/index.hbs'],

        tagName: 'section',

        id: 'posts-list',

        className: 'posts-list  posts-list--projects',

        events: {},

        subview: NewsItemView
    });

    return NewsIndexView;
});
