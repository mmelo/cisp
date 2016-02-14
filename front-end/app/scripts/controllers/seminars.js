/*global define*/

define([
	'jquery',
	'backbone',
	'collections/seminars',
	'models/seminars',
	'views/seminars/index',
	'views/seminars/item'
], function ($, Backbone, SeminarsCollection, SeminarsModel, SeminarsListView, SeminarsItemView) {
	'use strict';

	var SeminarsController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('seminars:index', this._index, this);
			App.Vent.on('seminars:renderIndex', this._renderIndex, this);
			App.Vent.on('seminars:more', this._loadMore, this);
		},

		/**
		*	_index - fetch and render first list of seminars
		*
		*	@private
		*	@function
		*	@param {string} catg (optional)
		*	@param {string} params (optional) - params to be searched
		*/
		_index: function (catg, params) {
			App.Collections.Seminars = new SeminarsCollection;
			App.Collections.Seminars.catg = catg;
			
			if (params) {				
				var paramsUrl = params.replace(' ', '-').toLowerCase(); // prepare params to url (todo: replace special characters)
				App.Router.navigate('#seminars?' + paramsUrl)

				var paramsEscaped = escape(params); // html escape to params to be searched
				App.Collections.Seminars.search = paramsEscaped;
			}
			App.Views.Active = new SeminarsListView({
				collection: App.Collections.Seminars,
				target: '#post-list-container'
			});
			this._renderIndex();
		},

		/**
		*	_loadMore - load another "page" of seminars and append it to the current list
		*
		*	@private
		*	@function
		*	@param {string} category (optional)
		*/
		_loadMore: function (catg) {
			App.Collections.Seminars.page++;
			this._renderIndex(null, function () {
				requestAnimationFrame(function () {
					if ( (App.Collections.Seminars.page*10) > App.Collections.Seminars.length ) {
						$('.load-more').remove();
					}
				});
			});
		},

		/**
		*	_renderIndex - fetch and render list of seminars
		*
		*	@private
		*	@function
		*/
		_renderIndex: function (searchParams, callback) {
			App.Collections.Seminars.fetch({
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

	return SeminarsController;
});
