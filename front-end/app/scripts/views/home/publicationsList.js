/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collectionview'
], function ($, _, Backbone, JST) {
    'use strict';

    var PublicationsListView = Backbone.CollectionView.extend({
        template: JST['app/scripts/templates/home/publicationsList.hbs'],

    });

    return PublicationsListView;
});
