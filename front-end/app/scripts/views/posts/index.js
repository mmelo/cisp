/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/posts/item',
    'collectionview'
], function ($, _, Backbone, JST, PostItemView) {
    'use strict';

    var PostsIndexView = Backbone.CollectionView.extend({
        template: JST['app/scripts/templates/posts/index.hbs'],

        tagName: 'section',

        id: 'posts-list',

        className: 'posts-list',

        events: {},

        subview: PostItemView
    });

    return PostsIndexView;
});
