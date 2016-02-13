/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/publications/item',
    'collectionview'
], function ($, _, Backbone, JST, PublicationItemView) {
    'use strict';

    var PublicationsIndexView = Backbone.CollectionView.extend({
        template: JST['app/scripts/templates/publications/index.hbs'],

        tagName: 'section',

        id: 'publication-list',

        className: 'publication-list',

        events: {},

        subview: PublicationItemView
    });

    return PublicationsIndexView;
});
