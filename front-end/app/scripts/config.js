/**
*	@author Miguel Melo
*	@version 1.0.0
*	@summary: webapps dependency management and sets-up webapps default namespace and objects
*/
/*global require*/
'use strict';
require.config({
	shim: {
		underscore: {
			deps: [],
			exports: '_'
		},
		jquery: {
			exports: '$'
		},
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		helpers: {
			deps: ['backbone']
		},
		baseview: {
			deps: ['backbone', 'helpers']
		},
		collectionview: {
			deps: ['backbone', 'helpers']
		},
		handlebars: {
			exports: 'Handlebars'
		},
		handlebarsHelpers: {
			deps: ['templates', 'handlebars']
		},
		loadcss: {
			exports: 'LoadCSS'
		},
		cookies: {
			deps: ['jquery'],
			exports: 'Cookies'
		}
	},
	paths: {
		text: '../bower_components/requirejs-text/text',
		jquery: 'vendor/zepto',
		backbone: '../bower_components/backbone/backbone-min',
		helpers: 'helpers/backbone/helpers',
		baseview: 'helpers/backbone/backbone.baseview',
		collectionview: 'helpers/backbone/backbone.collectionview',
		underscore: '../bower_components/lodash/lodash.min',
		handlebars: '../bower_components/handlebars/handlebars.min',
		handlebarsHelpers: 'helpers/handlebars/helpers',
		loadcss: 'vendor/loadCSS',
		cookies: '../bower_components/js-cookie/src/js.cookie'
	}
});

require(['main']);
