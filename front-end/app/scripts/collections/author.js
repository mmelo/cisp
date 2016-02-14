/*global define*/

define([
	'underscore',
	'backbone',
	'models/author'
], function (_, Backbone, AuthorModel) {
	'use strict';

	var AuthorCollection = Backbone.Collection.extend({
		url: function () {
			var url = App.BaseUrl + '?json=get_author_index&post_type=publication';
			return url;
		},
		model: AuthorModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {
			return res.authors;
		}
	});

	return AuthorCollection;
});
