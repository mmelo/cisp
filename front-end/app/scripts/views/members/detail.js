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
		template: JST['app/scripts/templates/members/detail.hbs'],

		tagName: 'article',

		id: function () {
			return 'member-detail-' + this.model.get('id');
		},

		className: 'member__detail',

		events: {},
	});

	return PostsDetailView;
});
