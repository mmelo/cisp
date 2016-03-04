/*global define*/

define([
	'jquery',
	'backbone',
	'collections/about',
	'models/about',
	'views/about/index',
	'views/about/item',
], function ($, Backbone, AboutCollection, AboutModel, AboutListView, AboutItemView) {
	'use strict';

	var AboutController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('about:index', this._index, this);
			App.Vent.on('about:more', this._loadMore, this);
			App.Vent.on('about:detail', this._detail, this);
		},

		/**
		*	_index - fetch and render first list of about
		*
		*	@private
		*	@function
		*	@param {string} catg (optional)
		*/
		_index: function (catg) {
			$(window).scrollTop(0);
			App.Collections.About = new AboutCollection;
			App.Collections.About.catg = catg;
			App.Views.Active = new AboutListView({
				collection: App.Collections.About,
				target: '#about-container'
			});
			this._renderIndex();
		},

		/**
		*	_loadMore - load another "page" of about and append it to the current list
		*
		*	@private
		*	@function
		*	@param {string} category (optional)
		*/
		_loadMore: function (catg) {
			App.Collections.About.page++;
			this._renderIndex();
		},

		/**
		*	_renderIndex - fetch and render list of about
		*
		*	@private
		*	@function
		*/
		_renderIndex: function () {
			App.Collections.About.fetch({
				remove: false,
				success: function (res) {
					requestAnimationFrame(function () {
						App.Container.html(App.Views.Active.render().el);
						App.Vent.trigger('global:scroll');
					});
				},
				error: function (res, err) {
					requestAnimationFrame(function () {
						App.Container.html(App.Views.Active.render().el);
					});
				}
			});
		}
	});

	return AboutController;
});
