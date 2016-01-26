/*global define*/

define([
	'underscore',
	'backbone',
	'models/post'
], function (_, Backbone, PostModel) {
	'use strict';

	var PostCollection = Backbone.Collection.extend({
		url: function () {
			var url = App.BaseUrl + '?json=';
			if ( this.catg ) {
				url += 'get_category_posts&slug=' + this.catg;
			} else {
				url +='1';
			}
			return url + (this.count ? '&count=' + this.count : '') + (this.page ? '&page=' + this.page : '');
		},
		model: PostModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {
			return res.posts;
		}
	});

	return PostCollection;
});
