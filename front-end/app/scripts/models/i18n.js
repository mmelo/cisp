/*global define, App*/
define([
	'underscore',
	'backbone',
	'text!locales/i18n/resource.json'
], function (_, Backbone, source) {
	'use strict';
	/**
	*   i18nModel Module.
	*   @module i18nModel
	*   @see module:i18nModel
	*   @listens user:change
	*
	*   @author Miguel Melo
	*   @version 1.0.0
	*   @summary: wrapper used to handle internationalization and localization within the webapp
	*/
	var I18nModel = Backbone.Model.extend({
		/**
		*   initialize - wrapper used to handle internationalization and localization within the webapp
		*
		*   @public
		*	@function
		*   @this i18n 
		*/
		initialize: function() {
			this.listenTo(App.User, 'change:language', this._changeLanguage, this);
			this.set(JSON.parse(source)[App.defaultLanguage]);
		},

		/**
		*   parse - format/trasnform API's response
		*
		*   @public
		*	@function
		*   @param {object} response we need to parse
		*   @param {object} [options] we may need to control parse's outup
		*   @return {Model} model after being parsed
		*/
		parse: function(response, options)  {// jshint unused:false
			return response;
		},

		/**
		*   changeLanguage - change target app language and fetch the appropriate json map
		*
		*   @private
		*	@function
		*   @this i18n
		*/
		_changeLanguage: function () {
			if ( this.getLanguage() !== App.User.get('language') ) {
				this.setLanguage(App.User.get('language'));
			}
			App.Document.documentElement.attributes.lang.value = this.getLanguage();
		},

		/**
		*	getLanguage - return the currently selected language code
		*
		*	@public
		*	@function
		*	@return {string} currentLanguage
		*/
		getLanguage: function () {
			return this.language;
		},

		/**
		*	setLanguage - set the currently selected language code
		*
		*	@public
		*	@function
		*	@param {string} lang
		*/
		setLanguage: function (lang) {
			this.language = lang;
			this.set(JSON.parse(source)[lang]);
			return this;
		},

		/**
		*	_isSupportedLanguage - test if passed language code is within the supported languages
		*
		*	@private
		*	@function
		*	@param {string} lang
		*	@return {boolean}
		*/
		isSupportedLanguage: function (lang) {
			return App.Languages.indexOf(lang) > -1;
		}
	});

	return I18nModel;
});
