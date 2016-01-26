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
		template: JST['app/scripts/templates/pages/detail.hbs'],

		tagName: 'article',

		id: function () {
			return 'page-detail-' + this.model.get('id');
		},

		className: 'page-detail',

		events: {},
	});

	return PostsDetailView;
});
