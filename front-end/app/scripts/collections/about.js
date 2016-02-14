/*global define*/

define([
	'underscore',
	'backbone',
	'models/about'
], function (_, Backbone, AboutModel) {
	'use strict';

	var AboutCollection = Backbone.Collection.extend({
		url: function () {
			var url = App.BaseUrl + '?json=get_posts&post_type=about';
			return url + (this.count ? '&count=' + this.count : '') + (this.page ? '&page=' + this.page : '');
		},
		model: AboutModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {
			return res.posts;
		}
	});

	return AboutCollection;
});
