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

        className: 'publications-filter-list',

        events: {
            'click #search': '_loadByAuthor'
        },

        subview: FiltersItemView,

        _loadByAuthor: function (ev) {
            var author = $('#authors-list option:selected').attr('value');
            if ( author !== 'all' ) {
                App.Router.navigate('publicacoes/' + author, { trigger: true });
            } else {
                App.Router.navigate('publicacoes', { trigger: true });
            }
        }
    });

    return FiltersIndexView;
});
