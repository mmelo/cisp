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
		template: JST['app/scripts/templates/posts/detail.hbs'],

		tagName: 'article',

		id: function () {
			return 'post-detail-' + this.model.get('id');
		},

		className: 'detail',

		events: {},
	});

	return PostsDetailView;
});
