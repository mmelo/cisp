/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'views/seminars/item',
	'collectionview'
], function ($, _, Backbone, JST, SeminarsItemView) {
	'use strict';

	var SeminarsIndexView = Backbone.CollectionView.extend({
		template: JST['app/scripts/templates/seminars/index.hbs'],

		tagName: 'section',

		id: 'posts-list',

		className: 'posts-list posts-list--news',

		events: {
			'keyup': '_enterKey',
			'focusin': '_showSearchButton',
			'focusout': '_showSearchButton',
			'click #seminars-search-button': '_search',
			'click #load-more-posts': '_lazyLoad'
		},

		subview: SeminarsItemView,

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
			$('#seminars-search-button').toggleClass('hidden');
		},

		_search: function () {
			var keywords = $('#post-list-search').val();
			App.Vent.trigger('seminars:index', null, keywords)
		},

		_lazyLoad: function () {
			App.Vent.trigger('seminars:more');
		}
	});

	return SeminarsIndexView;
});
