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
			if ( this.author ) {
				url = App.BaseUrl + ('?json=get_author_posts&post_type=publication&slug=' + this.author.slug);
			}
			// commented because sticky request is not working
			if ( this.isHome ) {
				return url + '&post__in=sticky_posts';
			}
			return url + (this.count ? '&count=' + this.count : '') + (this.page ? '&page=' + this.page : '');
			//return url + (this.count ? '&count=' + this.count : '') + (this.page ? '&page=' + this.page : '');
		},
		model: PublicationModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {
			this.totalPosts = res.count_total;
			return res.posts;
		}
	});

	return PublicationCollection;
});
