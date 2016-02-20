/*global define*/

define([
	'underscore',
	'backbone',
	'models/members'
], function (_, Backbone, MembersModel) {
	'use strict';

	var MembersCollection = Backbone.Collection.extend({
		url: function () {
			var url = App.BaseUrl + '?json=get_posts&post_type=members';
			return url + (this.count ? '&count=' + this.count : '') + (this.page ? '&page=' + this.page : '');
		},
		model: MembersModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {

			return res.posts;
		}
	});

	return MembersCollection;
});
