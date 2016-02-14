/*global define*/

define([
	'jquery',
	'backbone',
	'collections/post',
	'models/post',
	'views/posts/index',
	'views/posts/item',
	'views/posts/detail'
], function ($, Backbone, PostCollection, PostModel, PostListView, PostItemView, PostDetailView) {
	'use strict';

	var PostController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('posts:index', this._index, this);
			App.Vent.on('posts:more', this._loadMore, this);
			App.Vent.on('posts:detail', this._detail, this);
		},

		/**
		*	_index - fetch and render first list of posts
		*
		*	@private
		*	@function
		*	@param {string} catg (optional)
		*/
		_index: function (catg) {
			App.Collections.Post = new PostCollection;
			App.Collections.Post.catg = catg;
			App.Views.Active = new PostListView({
				collection: App.Collections.Post
			});
			this._renderIndex();
		},

		/**
		*	_loadMore - load another "page" of posts and append it to the current list
		*
		*	@private
		*	@function
		*	@param {string} category (optional)
		*/
		_loadMore: function (catg) {
			App.Collections.Post.page++;
			this._renderIndex();
		},

		/**
		*	_renderIndex - fetch and render list of posts
		*
		*	@private
		*	@function
		*/
		_renderIndex: function () {
			App.Collections.Post.fetch({
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
		},

		/**
		*	_related - fetch and render list of related posts
		*
		*	@private
		*	@function
		*	@param {string} catg
		*/
		_related: function (catg) {
			App.Collections.RelatedPosts = new PostCollection;
			App.Collections.RelatedPosts.catg = catg;
			App.Collections.RelatedPosts.count = 3;
			App.Collections.RelatedPosts.fetch({
				success: function () {
					var temp = new PostListView({
						collection: App.Collections.RelatedPosts,
						subview: PostItemView
					});
					App.Views.Active.subviews.push(temp);
					requestAnimationFrame(function () {
						$('#related-posts').append(temp.render().el);
					});
				}
			});
		},

		/**
		*	_detail - fetch post detail
		*
		*	@private
		*	@function
		*	@param {object} options
		*		@param {string} category
		*		@param {string} slug
		*/
		_detail: function (options) {
			var _this = this;

			if ( App.Collections.Post && App.Collections.Post.findWhere({ slug: options.slug }) ) {
				App.Models.Detail = App.Collections.Post.findWhere({ slug: options.slug });
				this._detailView(App.Models.Detail);
			} else {
				App.Models.Detail = new PostModel;
				App.Models.Detail.set('slug', options.slug);
				App.Models.Detail.fetch({
					success: function () {
						_this._detailView(App.Models.Detail);
					}
				});
			}
		},

		/**
		*	_detailView - render post detail view
		*
		*	@private
		*	@function
		*	@param {object} post - post model to be rendered
		*/
		_detailView: function (post) {
			var _this = this;
			App.Views.Active = new PostDetailView({
				model: post
			});
			requestAnimationFrame(function () {
				App.Container.html(App.Views.Active.render().el);
				_this._related(post.get('categories')[0].slug);
			});
		}
	});

	return PostController;
});
