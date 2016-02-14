/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var PostModel = Backbone.Model.extend({
		url: function () {
			return App.BaseUrl + '?json=get_post&post_type=members&slug=' + this.get('slug');
		},

		initialize: function() {
		},

		defaults: {
		},

		validate: function(attrs, options) {
		},

		parse: function(response, options)  {
			var res = response.post || response;
			if(res.date) {
				var d = new Date(res.date);
				var months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEC'];
				res.prettyDate = months[d.getMonth()] + '<br>' + d.getFullYear();
			}

			// calculate Estimated Reading Time
			res.ert = Math.ceil((res.content.split(' ').length / 250));

			

			return res;
		}
	});

	return PostModel;
});
