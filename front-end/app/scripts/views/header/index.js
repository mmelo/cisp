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
		template: JST['app/scripts/templates/header/index.hbs'],

		tagName: 'section',

		className: 'header__wrapper',

		events: {}
	});

	return FooterView;
});
