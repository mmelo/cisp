/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collectionview'
], function ($, _, Backbone, JST) {
    'use strict';

    var EventsListView = Backbone.CollectionView.extend({
        template: JST['app/scripts/templates/home/eventsList.hbs'],

    });

    return EventsListView;
});
