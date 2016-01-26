/*global define*/

define([
	'jquery',
	'backbone',
	'collections/page',
	'models/page',
	'views/pages/index',
	'views/pages/item',
	'views/pages/detail'
], function ($, Backbone, PageCollection, PageModel, PageListView, PageItemView, PageDetailView) {
	'use strict';

	var PageController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('pages:index', this._index, this);
			App.Vent.on('pages:detail', this._detail, this);
			App.Vent.on('pages:footer', this._footer, this);
		},

		/**
		*	_index - fetch and render first list of pages
		*
		*	@private
		*	@function
		*	@param {string} catg (optional)
		*/
		_index: function (catg) {
			App.Collections.Page = new PageCollection;
			App.Collections.Page.fetch({
				success: function () {
					App.Views.Active = new PageListView({
						collection: App.Collections.Page,
						subview: PageItemView
					});
					requestAnimationFrame(function () {
						App.Container.html(App.Views.Active.render().el);
					});
				}
			});
		},

		/**
		*	_detail - fetch page detail
		*
		*	@private
		*	@function
		*	@param {object} options
		*		@param {string} slug
		*/
		_detail: function (options) {
			var _this = this;

			if ( App.Collections.Page && App.Collections.Page.findWhere({ slug: options.slug }) ) {
				App.Models.Detail = App.Collections.Page.findWhere({ slug: options.slug });
				this._detailView(App.Models.Detail);
			} else {
				App.Models.Detail = new PageModel;
				App.Models.Detail.set('slug', options.slug);
				App.Models.Detail.fetch({
					success: function () {
						_this._detailView(App.Models.Detail);
					}
				});
			}
		},

		/**
		*	_detailView - render page detail view
		*
		*	@private
		*	@function
		*	@param {object} page - page model to be rendered
		*/
		_detailView: function (page) {
			var _this = this;
			App.Views.Active = new PageDetailView({
				model: page
			});
			requestAnimationFrame(function () {
				App.Container.html(App.Views.Active.render().el);
			});
		},

		/**
		*	_footer
		*
		*	@private
		*	@function
		*/
		_footer: function () {
			
		}
	});

	return PageController;
});
