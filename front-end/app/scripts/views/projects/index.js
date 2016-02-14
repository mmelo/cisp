/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'views/projects/item',
	'collectionview'
], function ($, _, Backbone, JST, ProjectItemView) {
	'use strict';

	var ProjectsIndexView = Backbone.CollectionView.extend({
		template: JST['app/scripts/templates/projects/index.hbs'],

		tagName: 'section',

		id: 'posts-list',

		className: 'posts-list  posts-list--projects',

		events: {
			'click #load-more-posts': '_lazyLoad'
		},

		subview: ProjectItemView,

		_lazyLoad: function () {
			App.Vent.trigger('projects:more');
		}
	});

	return ProjectsIndexView;
});
