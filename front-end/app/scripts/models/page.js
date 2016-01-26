/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var PageModel = Backbone.Model.extend({
		url: function () {
			return App.BaseUrl + '?json=get_page&slug=' + this.get('slug');
		},

		initialize: function() {
		},

		defaults: {
		},

		validate: function(attrs, options) {
		},

		parse: function(response, options)  {
			var res = response.page || response;
			// calculate Estimated Reading Time
			res.ert = Math.ceil((res.content.split(' ').length / 250));

			return res;
		}
	});

	return PageModel;
});
