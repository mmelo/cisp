/*global define*/

define([
	'underscore',
	'backbone',
	'models/events'
], function (_, Backbone, EventsModel) {
	'use strict';

	var EventsCollection = Backbone.Collection.extend({
		url: function () {
			var url = this.search ? App.BaseUrl + '?json=get_posts&post_type=events&s=' + this.search : App.BaseUrl + '?json=get_posts&post_type=events';
			return url + (this.count ? '&count=' + this.count : '') + (this.page ? '&page=' + this.page : '');
		},
		model: EventsModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {
			this.totalPosts = res.count_total;
			return res.posts;
		}
	});

	return EventsCollection;
});
