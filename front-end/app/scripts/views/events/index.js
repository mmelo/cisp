/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'views/events/item',
	'collectionview'
], function ($, _, Backbone, JST, EventsItemView) {
	'use strict';

	var EventsIndexView = Backbone.CollectionView.extend({
		template: JST['app/scripts/templates/events/index.hbs'],

		tagName: 'section',

		id: 'posts-list',

		className: 'posts-list posts-list--news',

		events: {
			'keyup': '_enterKey',
			'focusin': '_showSearchButton',
			'focusout': '_showSearchButton',
			'click #events-search-button': '_search',
			'click #load-more-posts': '_lazyLoad'
		},

		subview: EventsItemView,

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
			$('#events-search-button').toggleClass('hidden');
		},

		_search: function () {
			var keywords = $('#post-list-search').val();
			App.Vent.trigger('events:index', null, keywords)
		},

		_lazyLoad: function () {
			App.Vent.trigger('events:more');
		}
	});

	return EventsIndexView;
});
