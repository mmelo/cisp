/*global define*/

define([
	'jquery',
	'backbone',
	'collections/publications',
	'collections/author',
	'models/publication',
	'views/publications/index',
	'views/publications/item',
	'views/publications/filters',
], function ($, Backbone, PublicationCollection, AuthorCollection, PublicationModel, PublicationListView, PublicationItemView, FiltersView) {
	'use strict';

	var PublicationController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('publications:index', this._index, this);
			App.Vent.on('publications:more', this._loadMore, this);
		},

		/**
		*	_index - fetch and render first list of publications
		*
		*	@private
		*	@function
		*	@param {string} author (optional)
		*/
		_index: function (author) {
			App.Collections.Publication = new PublicationCollection;
			App.Collections.Publication.author = author;
			App.Views.Active = new PublicationListView({
				collection: App.Collections.Publication,
				target: '#publications-container'
			});
			this._renderIndex();
		},

		/**
		*	_loadMore - load another "page" of publications and append it to the current list
		*
		*	@private
		*	@function
		*	@param {string} category (optional)
		*/
		_loadMore: function (catg) {
			App.Collections.Publication.page++;
			this._renderIndex(function () {
				requestAnimationFrame(function () {
					if ( (App.Collections.Publication.page*10) > App.Collections.Publication.length ) {
						$('.load-more').remove();
					}
				});
			});
		},

		/**
		*	_renderIndex - fetch and render list of publications
		*
		*	@private
		*	@function
		*/
		_renderIndex: function (callback) {
			var _this = this;
			App.Collections.Publication.fetch({
				remove: false,
				success: function (res) {
					requestAnimationFrame(function () {
						App.Container.html(App.Views.Active.render().el);
						App.Vent.trigger('global:scroll');

						_this._renderFilters();

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
		},

		_renderFilters: function () {
			App.Collections.Author = new AuthorCollection;
			App.Collections.Author.fetch({
				success: function () {
					var filters = new FiltersView({
						collection: App.Collections.Author,
						target: '#authors-list'
					});
					$('#publications-filter').html(filters.render().el);
				}
			});
		}
	});

	return PublicationController;
});
