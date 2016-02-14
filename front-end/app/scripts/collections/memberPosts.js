/*global define*/

define([
	'underscore',
	'backbone',
	'models/memberPosts'
], function (_, Backbone, MemberPostsModel) {
	'use strict';

	var MemberPostsCollection = Backbone.Collection.extend({
		url: function () {
			var url = App.BaseUrl + '?json=get_author_posts&post_type=publication&author_slug=' + this.slug;
			return url + (this.count ? '&count=' + this.count : '') + (this.page ? '&page=' + this.page : '');
		},
		model: MemberPostsModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {

			return res.posts;
		}
	});

	return MemberPostsCollection;
});
