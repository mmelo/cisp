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

		className: 'posts-list posts-list--news',

		events: {
			'keyup': '_enterKey',
			'focusin': '_showSearchButton',
			'focusout': '_showSearchButton',
			'click #news-search-button': '_search',
			'click #load-more-posts': '_lazyLoad'
		},

		subview: NewsItemView,

		/**
		*    _enterKey - listen keyup events waiting for enter key
		*
		*   @private
		*   @this AlertIndexView
		*/
		_enterKey: function (ev) {
			if ( ev.keyCode === 13 ) {
				this._search();
			}
		},

		_showSearchButton: function () {
			$('#news-search-button').toggleClass('hidden');
		},

		_search: function () {
			var keywords = $('#post-list-search').val();
			App.Vent.trigger('news:index', null, keywords)
		},

		_lazyLoad: function () {
			App.Vent.trigger('news:more');
		}
	});

	return NewsIndexView;
});
