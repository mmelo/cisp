/*global define*/

define([
	'underscore',
	'backbone',
	'models/news'
], function (_, Backbone, NewsModel) {
	'use strict';

	var NewsCollection = Backbone.Collection.extend({
		url: function () {
			var url = this.search ? App.BaseUrl + '?json=get_posts&post_type=news&s=' + this.search : App.BaseUrl + '?json=get_posts&post_type=news';
			return url + (this.count ? '&count=' + this.count : '') + (this.page ? '&page=' + this.page : '');
		},
		model: NewsModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {

			return res.posts;
		}
	});

	return NewsCollection;
});
