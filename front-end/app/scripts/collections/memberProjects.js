/*global define*/

define([
	'underscore',
	'backbone',
	'models/memberProject'
], function (_, Backbone, MemberProjectModel) {
	'use strict';

	var MemberProjectsCollection = Backbone.Collection.extend({
		url: function () {
			var url = App.BaseUrl + '?json=get_author_posts&post_type=member_projects&author_slug=' + this.slug;
			return url + (this.count ? '&count=' + this.count : '') + (this.page ? '&page=' + this.page : '');
		},
		model: MemberProjectModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {

			return res.posts;
		}
	});

	return MemberProjectsCollection;
});
