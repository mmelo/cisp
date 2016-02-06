/*global define*/

define([
	'jquery',
	'backbone',
	'collections/projects',
	'models/project',
	'views/projects/index',
	'views/projects/item'
], function ($, Backbone, ProjectCollection, ProjectModel, ProjectListView, ProjectItemView) {
	'use strict';

	var ProjectController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('projects:index', this._index, this);
			App.Vent.on('projects:more', this._loadMore, this);
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
				collection: App.Collections.Project
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
			this._renderIndex();
		},

		/**
		*	_renderIndex - fetch and render list of projects
		*
		*	@private
		*	@function
		*/
		_renderIndex: function () {
			App.Collections.Project.fetch({
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

	return ProjectController;
});
