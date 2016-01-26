/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'baseview'
], function ($, _, Backbone, JST) {
	'use strict';

	var PagesItemView = Backbone.BaseView.extend({
		template: JST['app/scripts/templates/pages/item.hbs'],

		tagName: 'article',

		id: function () {
			return 'page-' + this.model.get('id');
		},

		className: function () {
			var pagespan = this.model.get('custom_fields')['page-span'];
			return 'page' + (pagespan ? '--' + pagespan[0] : '');
		},

		events: {}
	});

	return PagesItemView;
});
