/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'baseview'
], function ($, _, Backbone, JST) {
	'use strict';

	var PostsDetailView = Backbone.BaseView.extend({
		template: JST['app/scripts/templates/projects/detail.hbs'],

		tagName: 'article',

		id: function () {
			return 'project-detail-' + this.model.get('id');
		},

		className: 'project__detail',

		events: {},
	});

	return PostsDetailView;
});
