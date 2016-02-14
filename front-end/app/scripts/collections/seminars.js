/*global define*/

define([
	'underscore',
	'backbone',
	'models/seminars'
], function (_, Backbone, SeminarsModel) {
	'use strict';

	var SeminarsCollection = Backbone.Collection.extend({
		url: function () {
			var url = this.search ? App.BaseUrl + '?json=get_posts&post_type=seminars&s=' + this.search : App.BaseUrl + '?json=get_posts&post_type=seminars';
			return url + (this.count ? '&count=' + this.count : '') + (this.page ? '&page=' + this.page : '');
		},
		model: SeminarsModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {

			return res.posts;
		}
	});

	return SeminarsCollection;
});
