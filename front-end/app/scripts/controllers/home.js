/*global define, App*/
define([
	'jquery',
	'backbone',
	'views/home/index',
	'views/home/newsList',
	'views/home/newsItem',
	'views/home/publicationsList',
	'views/home/publicationsItem',
	'collections/news',
	'collections/publications',
], function ($, Backbone, HomeView, NewsListView, NewsItemView, PublicationsListView, PublicationsItemView, NewsCollection, PublicationsCollection) {
	'use strict';
	/**
	*	HomeController module.
	*	@module HomeController
	*	@see module:HomeController
	*
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
			this._publications();
		},

		/**
		*	_news - create and render _news section @ home page
		*
		*	@private
		*	@function
		*/
		_news: function () {
			App.Collections.News = new NewsCollection;
			App.Collections.News.count = 3;
			App.Collections.News.isHome = true;
			App.Collections.News.fetch({
				remove: false,
				success: function () {

					// setting isLarge attribute to n'th model of the collection to stylize.
					var index = App.Collections.News.indexOf(App.Collections.News.model);
					var indexSelected = App.Collections.News.at(index-2);
					
					if ( indexSelected.get('thumbnail') ) {
						indexSelected.set('isLarge', true);
					} else {
						indexSelected = App.Collections.News.at(index-1);

						if ( indexSelected.get('thumbnail') ) {
							indexSelected.set('isLarge', true);
						} else {
							indexSelected = App.Collections.News.at(index);
							if ( indexSelected.get('thumbnail') ) {
								indexSelected.set('isLarge', true);
							}
						}

					}
					
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
		*	_publications - create and render publications section @ home page
		*
		*	@private
		*	@function
		*/
		_publications: function () {
			App.Collections.Publications = new PublicationsCollection;
			App.Collections.Publications.count = 3;
			App.Collections.Publications.fetch({
				remove: false,
				success: function () {
					requestAnimationFrame(function () {
						App.Views.Publications = new PublicationsListView({
							el: '#home-publications',
							subview: PublicationsItemView,
							collection: App.Collections.Publications
						}).render();
						App.Vent.trigger('global:scroll');
					});
				},
				error: function (res, err) {
					requestAnimationFrame(function () {
						$('#home-publications').html(App.Views.Publications.render().el);
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
