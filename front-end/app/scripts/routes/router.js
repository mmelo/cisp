/*global define*/

define([
	'jquery',
	'backbone',
	'templates',
	'controllers/home',
	'controllers/post',
	'controllers/page'
], function ($, Backbone, JST, HomeController, PostController, PageController) {
	'use strict';

	var Router = Backbone.Router.extend({
		routes: {
			':category/:slug(/)':  	'_detail',
			':category(/)':     	'_category',
			'(/)':              	'_index'
		},

		spinner: JST['app/scripts/templates/components/spinner.hbs'],

		/**
		*   initialize - setup application's router
		*
		*   @public
		*/
		initialize: function () {
			var _this = this;

			if ( !App.Controllers.Home ) {
				App.Controllers.Home = new HomeController;
			}
			if ( !App.Controllers.Post ) {
				App.Controllers.Post = new PostController;
			}
			if ( !App.Controllers.Page ) {
				App.Controllers.Page = new PageController;
			}
		},

		/**
		*   _common - cleanup and render of common elements
		*
		*   @private
		*   @function
		*/
		_common: function () {
			if ( App.Views.Active ) {
				App.Views.Active.close();
				App.Views.Active = null;
			}
			if ( !App.Views.Footer ) {
				this._footer();
			}

			if ( !App.Views.header ) {
				this._header();
			}
			window.scrollTo(0,0);
		},

		/**
		*   _loading - add an animated spinner to the app's main container
		*
		*   @private
		*   @function
		*/
		_loading: function () {
			var _this = this;
			requestAnimationFrame(function () {
				App.Container.html(_this.spinner());
			});
		},

		/**
		*	_footer - render footer (with available pages)
		*
		*	@private
		*	@function
		*/
		_footer: function () {
			App.Vent.trigger('pages:footer');
		},

		/**
		*	_header - render hero section (with available pages)
		*
		*	@private
		*	@function
		*/
		_header: function () {
			App.Vent.trigger('pages:header');
		},

		/**
		*	_index - render homepage listing all posts
		*
		*	@private
		*	@function
		*/
		_index: function () {
			this._common();
			App.Vent.trigger('home:index');
			// App.Vent.trigger('posts:index');
		},

		/**
		*   _category - render post listing by category
		*
		*   @private
		*   @function
		*   @param {string} catg - category name/slug
		*/
		_category: function (catg) {
			this._common();
			this._loading();
			App.Vent.trigger('posts:index', catg);
		},

		/**
		*   _detail - render post detail based on category and post slug
		*
		*   @private
		*   @function
		*   @param {string} catg
		*   @param {string} slug
		*/
		_detail: function (catg, slug) {
			this._common();
			this._loading();
			App.Vent.trigger('posts:detail', {
				category: catg,
				slug: slug
			});
		}
	});

	return Router;
});
