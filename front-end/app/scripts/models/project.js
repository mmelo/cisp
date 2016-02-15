/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var PostModel = Backbone.Model.extend({
		url: function () {
			return App.BaseUrl + '?json=get_post&post_type=project&slug=' + this.get('slug');
		},

		initialize: function() {
		},

		defaults: {
		},

		validate: function(attrs, options) {
		},

		parse: function(response, options)  {
			var res = response.post || response;
			var d = new Date(res.date);
			var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAI', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
			// calculate Estimated Reading Time
			res.ert = Math.ceil((res.content.split(' ').length / 250));

			res.prettyDate = months[d.getMonth()] + '<br>' + d.getFullYear();

			return res;
		}
	});

	return PostModel;
});
