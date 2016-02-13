/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var NewsModel = Backbone.Model.extend({
		url: function () {
			return App.BaseUrl + '?json=get_post&post_type=publication&slug=' + this.get('slug');
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
			var months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEC'];
			// calculate Estimated Reading Time
			res.ert = Math.ceil((res.content.split(' ').length / 250));

			res.prettyDate = months[d.getMonth()] + '<br>' + d.getFullYear();

			return res;
		}
	});

	return NewsModel;
});
