/*global define*/

define([
	'jquery',
	'backbone',
	'collections/events',
	'models/events',
	'views/events/index',
	'views/events/item'
], function ($, Backbone, EventsCollection, EventsModel, EventsListView, EventsItemView) {
	'use strict';

	var EventsController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('events:index', this._index, this);
			App.Vent.on('events:renderIndex', this._renderIndex, this);
			App.Vent.on('events:more', this._loadMore, this);
		},

		/**
		*	_index - fetch and render first list of events
		*
		*	@private
		*	@function
		*	@param {string} catg (optional)
		*	@param {string} params (optional) - params to be searched
		*/
		_index: function (catg, params) {
			App.Collections.Events = new EventsCollection;
			App.Collections.Events.catg = catg;

			if (params) {
				var paramsUrl = params.replace(' ', '-').toLowerCase(); // prepare params to url (todo: replace special characters)
				App.Router.navigate('#events?' + paramsUrl)

				var paramsEscaped = escape(params); // html escape to params to be searched
				App.Collections.Events.search = paramsEscaped;
			}
			App.Views.Active = new EventsListView({
				collection: App.Collections.Events,
				target: '#post-list-container'
			});
			this._renderIndex();
		},

		/**
		*	_loadMore - load another "page" of events and append it to the current list
		*
		*	@private
		*	@function
		*	@param {string} category (optional)
		*/
		_loadMore: function (catg) {
			App.Collections.Events.page++;
			this._renderIndex(null, function () {
				requestAnimationFrame(function () {
					if ( (App.Collections.Events.page*10) > App.Collections.Events.length ) {
						$('.load-more').remove();
					}
				});
			});
		},

		/**
		*	_renderIndex - fetch and render list of events
		*
		*	@private
		*	@function
		*/
		_renderIndex: function (searchParams, callback) {
			App.Collections.Events.fetch({
				remove: false,
				success: function (res) {
					requestAnimationFrame(function () {
						App.Container.html(App.Views.Active.render().el);
						App.Vent.trigger('global:scroll');

						if ( callback ) {
							callback();
						}
					});
				},
				error: function (res, err) {
					requestAnimationFrame(function () {
						App.Container.html(App.Views.Active.render().el);
						if ( callback ) {
							callback();
						}
					});
				}
			});
		}
	});

	return EventsController;
});
