/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'baseview'
], function ($, _, Backbone, JST) {
	'use strict';

	var NewsDetailView = Backbone.BaseView.extend({
		template: JST['app/scripts/templates/news/detail.hbs'],

		tagName: 'article',

		id: function () {
			return 'event-detail-' + this.model.get('id');
		},

		className: 'event__detail',

		events: {},
	});

	return NewsDetailView;
});
