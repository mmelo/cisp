/*global define*/

define([
	'underscore',
	'backbone',
	'models/memberPublication'
], function (_, Backbone, MemberPublicationModel) {
	'use strict';

	var MemberPublicationsCollection = Backbone.Collection.extend({
		url: function () {
			var url = App.BaseUrl + '?json=get_author_posts&post_type=member_publications&author_slug=' + this.slug;
			return url + (this.count ? '&count=' + this.count : '') + (this.page ? '&page=' + this.page : '');
		},
		model: MemberPublicationModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {

			return res.posts;
		}
	});

	return MemberPublicationsCollection;
});
