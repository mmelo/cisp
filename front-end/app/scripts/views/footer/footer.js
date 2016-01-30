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
		template: JST['app/scripts/templates/footer/footer.hbs'],

		tagName: 'footer',

		className: 'footer__container',

		events: {}
	});

	return FooterView;
});
