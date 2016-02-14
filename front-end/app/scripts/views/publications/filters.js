/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/publications/filtersitem',
    'collectionview'
], function ($, _, Backbone, JST, FiltersItemView) {
    'use strict';

    var FiltersIndexView = Backbone.CollectionView.extend({
        template: JST['app/scripts/templates/publications/filters.hbs'],

        tagName: 'section',

        id: 'publication-filter-list',

        className: 'publication-filter-list',

        events: {},

        subview: FiltersItemView
    });

    return FiltersIndexView;
});
