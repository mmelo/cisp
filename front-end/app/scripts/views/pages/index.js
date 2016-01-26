/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collectionview'
], function ($, _, Backbone, JST) {
    'use strict';

    var PagesIndexView = Backbone.CollectionView.extend({
        template: JST['app/scripts/templates/pages/index.hbs'],

        tagName: 'section',

        id: 'pages-list',

        className: 'pages-list',

        events: {}
    });

    return PagesIndexView;
});
