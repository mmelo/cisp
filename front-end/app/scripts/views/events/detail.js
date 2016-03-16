/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'baseview'
], function ($, _, Backbone, JST) {
	'use strict';

	var EventsDetailView = Backbone.BaseView.extend({
		template: JST['app/scripts/templates/events/detail.hbs'],

		tagName: 'article',

		id: function () {
			return 'event-detail-' + this.model.get('id');
		},

		className: 'event__detail',

		events: {},
	});

	return EventsDetailView;
});
