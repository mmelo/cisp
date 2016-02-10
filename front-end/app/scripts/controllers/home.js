/*global define, App*/
define([
	'jquery',
	'backbone',
	'views/home/index',
	'views/home/newsList',
	'views/home/newsItem',
	'views/projects/index',
	'collections/news',
	'collections/projects',
], function ($, Backbone, HomeView, NewsListView, NewsItemView, ProjectListView, NewsCollection, ProjectCollection) {
	'use strict';
	/**
	*	Header module.
	*	@module HomeController
	*	@see module:HomeController
	*
	*	@author Andre Silva
	*	@version 1.0.0
	*	@summary: handle home view creation and behaviour handling
	*/
	var HomeController = Backbone.Router.extend({
		/**
		*	initialize - setup alert event listeners and handlers
		*
		*	@author Andre Silva
		*	@public
		*	@function
		*	@this HomeController
		*/
		initialize: function () {
			App.Vent.on('home:index', this._index, this);
			this._toggleHover();
		},


		/**
		*	_index - create and render home page
		*
		*	@private
		*	@function
		*/
		_index: function () {
			App.Views.Active = new HomeView;
			requestAnimationFrame(function () {
				App.Container.html(App.Views.Active.render().el);
			});

			this._news();
			// this._projects();
		},

		/**
		*	_toggleHover - create and render projects section @ home page
		*
		*	@private
		*	@function
		*/
		_news: function () {
			App.Collections.News = new NewsCollection;
			App.Collections.News.fetch({
				remove: false,
				success: function () {
					console.log(App.Collections.News.toJSON());
					requestAnimationFrame(function () {
						App.Views.News = new NewsListView({
							el: '#home-news',
							subview: NewsItemView,
							collection: App.Collections.News
						}).render();
						App.Vent.trigger('global:scroll');
					});
				},
				error: function (res, err) {
					requestAnimationFrame(function () {
						$('#home-news').html(App.Views.News.render().el);
					});
				}
			});
		},

		/**
		*	_toggleHover - create and render projects section @ home page
		*
		*	@private
		*	@function
		*/
		_projects: function () {
			App.Collections.Project = new ProjectCollection;
			App.Views.Projects = new ProjectListView({
				collection: App.Collections.Project
			});
			App.Collections.Project.fetch({
				remove: false,
				success: function (res) {
					requestAnimationFrame(function () {
						$('#home-publications').html(App.Views.Projects.render().el);
						App.Vent.trigger('global:scroll');
					});
				},
				error: function (res, err) {
					requestAnimationFrame(function () {
						$('#home-publications').html(App.Views.Projects.render().el);
					});
				}
			});
		},

		/**
		*	_toggleHover - toggle the ability to hover elements upon scrolling (to increase performance)
		*
		*	@private
		*	@function
		*/
		_toggleHover: function () {
			window.addEventListener('scroll', function () {
				clearTimeout(this.TIMER);

				if(!App.Body.hasClass('disable-hover')) {
					App.Body.addClass('disable-hover');
				}

				this.TIMER = setTimeout(function(){
					App.Body.removeClass('disable-hover');
				},500);

				App.Vent.trigger('global:scroll');
			}, false);
		},
	});

	return HomeController;
});
