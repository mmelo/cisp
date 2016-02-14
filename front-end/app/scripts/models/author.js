/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var AuthorModel = Backbone.Model.extend({
		url: '',

		initialize: function() {},

		defaults: {},

		validate: function(attrs, options) {
		}
	});

	return AuthorModel;
});
