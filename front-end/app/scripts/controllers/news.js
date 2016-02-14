/*global define*/

define([
	'jquery',
	'backbone',
	'collections/news',
	'models/news',
	'views/news/index',
	'views/news/item'
], function ($, Backbone, NewsCollection, NewsModel, NewsListView, NewsItemView) {
	'use strict';

	var NewsController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('news:index', this._index, this);
			App.Vent.on('news:renderIndex', this._renderIndex, this);
			App.Vent.on('news:more', this._loadMore, this);
		},

		/**
		*	_index - fetch and render first list of News
		*
		*	@private
		*	@function
		*	@param {string} catg (optional)
		*	@param {string} params (optional) - params to be searched
		*/
		_index: function (catg, params) {
			App.Collections.News = new NewsCollection;
			App.Collections.News.catg = catg;
			
			if ( params) {
				
				var paramsUrl = params.replace(' ', '-').toLowerCase(); // prepare params to url (todo: replace special characters)
				App.Router.navigate('#news?' + paramsUrl)

				var paramsEscaped = escape(params); // html escape to params to be searched
				App.Collections.News.search = paramsEscaped;
			}
			App.Views.Active = new NewsListView({
				collection: App.Collections.News,
				target: '#post-list-container'
			});
			this._renderIndex();
		},

		/**
		*	_loadMore - load another "page" of news and append it to the current list
		*
		*	@private
		*	@function
		*	@param {string} category (optional)
		*/
		_loadMore: function (catg) {
			App.Collections.News.page++;
			this._renderIndex();
		},

		/**
		*	_renderIndex - fetch and render list of news
		*
		*	@private
		*	@function
		*/
		_renderIndex: function (searchParams) {
			App.Collections.News.fetch({
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

	return NewsController;
});
