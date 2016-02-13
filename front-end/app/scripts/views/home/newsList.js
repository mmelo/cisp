/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collectionview'
], function ($, _, Backbone, JST) {
    'use strict';

    var NewsListView = Backbone.CollectionView.extend({
        template: JST['app/scripts/templates/home/newsList.hbs'],

    });

    return NewsListView;
});
