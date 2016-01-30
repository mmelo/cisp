/*global define*/

define([
	'underscore',
	'backbone',
	'models/publication'
], function (_, Backbone, PublicationModel) {
	'use strict';

	var PublicationCollection = Backbone.Collection.extend({
		url: function () {
			var url = App.BaseUrl + '?json=get_posts&post_type=publication';
			return url + (this.count ? '&count=' + this.count : '') + (this.page ? '&page=' + this.page : '');
		},
		model: PublicationModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {
			return res.posts;
		}
	});

	return PublicationCollection;
});
