/*global define*/

define([
	'jquery',
	'backbone',
	'collections/page',
	'models/page',
	'views/pages/index',
	'views/pages/item',
	'views/pages/detail',
	'views/footer/footer',
	'views/header/index',
	'views/header/heroSection',
	'views/header/menu'
], function ($, Backbone, PageCollection, PageModel, PageListView, PageItemView, PageDetailView, FooterView, HeaderView, HeroSectionView, MenuView) {
	'use strict';

	var PageController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('pages:footer', this._footer, this);
			App.Vent.on('pages:header', this._header, this);
			App.Vent.on('pages:index', this._index, this);
			App.Vent.on('pages:detail', this._detail, this);
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
			App.Views.Footer = new FooterView();
			requestAnimationFrame(function () {
				App.Footer.html(App.Views.Footer.render().el);
			});
		},

		/**
		*	_header
		*
		*	@private
		*	@function
		*	@param {string} catg - page context
		*/
		_header: function (catg) {
			App.Views.Header = new HeaderView({
				catg: catg
			});
			requestAnimationFrame(function () {
				App.Header.html(App.Views.Header.render().el);
			});
			this._heroSection(catg);
			this._menu();
		},

		/**
		*	_menu
		*
		*	@private
		*	@function
		*/
		_menu: function () {
			requestAnimationFrame(function () {
				App.Views.Menu = new MenuView({
					el: '#menu'
				}).render();
			});
		},

		/**
		*	_heroSection
		*
		*	@private
		*	@function
		*	@param {string} catg - page context
		*/
		_heroSection: function (catg) {
			var lastClass = $('#header').attr('class').split(' ')[1];

			if ( lastClass ) {
				$('#header').removeClass(lastClass);
			}

			$('#header').addClass(catg);

			if ( !catg ) {
				catg = 'home';
				$('#hero-section').addClass('active');
			} else {
				$('#hero-section').removeClass('active');
			}

			requestAnimationFrame(function () {
				App.Views.HeroSection = new HeroSectionView({
					el: '#hero-section',
					catg: catg
				}).render();
			});
		}

	});

	return PageController;
});
