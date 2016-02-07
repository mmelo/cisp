/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'baseview'
], function ($, _, Backbone, JST) {
	'use strict';

	var FooterView = Backbone.BaseView.extend({
		template: JST['app/scripts/templates/header/heroSection.hbs'],

		tagName: 'section',

		className: 'hero-section',

		events: {}
	});

	return FooterView;
});
