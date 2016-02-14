/*global define*/

define([
	'underscore',
	'backbone',
	'models/project'
], function (_, Backbone, ProjectsModel) {
	'use strict';

	var ProjectsCollection = Backbone.Collection.extend({
		url: function () {
			var url = App.BaseUrl + '?json=get_posts&post_type=project';
			return url + (this.count ? '&count=' + this.count : '') + (this.page ? '&page=' + this.page : '');
		},
		model: ProjectsModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {
			this.totalPosts = res.count_total;
			return res.posts;
		}
	});

	return ProjectsCollection;
});
