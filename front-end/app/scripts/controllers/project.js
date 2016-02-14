/*global define*/

define([
	'jquery',
	'backbone',
	'collections/projects',
	'models/project',
	'views/projects/index',
	'views/projects/item',
	'views/projects/detail'
], function ($, Backbone, ProjectCollection, ProjectModel, ProjectListView, ProjectItemView, ProjectDetailView) {
	'use strict';

	var ProjectController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('projects:index', this._index, this);
			App.Vent.on('projects:more', this._loadMore, this);
			App.Vent.on('projects:detail', this._detail, this);
		},

		/**
		*	_index - fetch and render first list of projects
		*
		*	@private
		*	@function
		*	@param {string} catg (optional)
		*/
		_index: function (catg) {
			App.Collections.Project = new ProjectCollection;
			App.Collections.Project.catg = catg;
			App.Views.Active = new ProjectListView({
				collection: App.Collections.Project,
				target: '#projects-container'
			});
			this._renderIndex();
		},

		/**
		*	_loadMore - load another "page" of projects and append it to the current list
		*
		*	@private
		*	@function
		*	@param {string} category (optional)
		*/
		_loadMore: function (catg) {
			App.Collections.Project.page++;
			this._renderIndex(function () {
				requestAnimationFrame(function () {
					if ( (App.Collections.Project.page*10) > App.Collections.Project.length ) {
						$('.load-more').remove();
					}
				});
			});
		},

		/**
		*	_renderIndex - fetch and render list of projects
		*
		*	@private
		*	@function
		*/
		_renderIndex: function (callback) {
			App.Collections.Project.fetch({
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
		},

		/**
		*	_detail - fetch and render project detail page
		*
		*	@private
		*	@function
		*/
		_detail: function (options) {
			var _this = this;

			if ( App.Collections.Project && App.Collections.Project.findWhere({ slug: options.slug }) ) {
				App.Models.Detail = App.Collections.Project.findWhere({ slug: options.slug });
				this._detailView(App.Models.Detail);
			} else {
				App.Models.Detail = new ProjectModel;
				App.Models.Detail.set('slug', options.slug);
				App.Models.Detail.fetch({
					success: function () {
						_this._detailView(App.Models.Detail);
					}
				});
			}
		},

		/**
		*	_detailView - render project detail view
		*
		*	@private
		*	@function
		*	@param {object} project - project model to be rendered
		*/
		_detailView: function (project) {
			var _this = this;
			App.Views.Active = new ProjectDetailView({
				model: project
			});
			requestAnimationFrame(function () {
				App.Container.html(App.Views.Active.render().el);
			});
		}
	});

	return ProjectController;
});
