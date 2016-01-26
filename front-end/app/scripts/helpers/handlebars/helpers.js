/**
*	@author Miguel Melo
*	@update Andre Silva
*	@version 1.0.1
*/
define([
	'underscore',
	'handlebars',
	'templates'
], function (_, Handlebars, JST) {
	'use strict';

	/**
	*	@author Miguel Melo
	*	@Version 1.0.0
	*	@Summary: simple view helper
	*/
	function viewHelper(context, options) {
		var viewName = context,
			viewOptions = options.hash || {},
			templatePath;

		// Allow passing in context with special 'context' key.
		if (viewOptions.context) {
			viewOptions = viewOptions.context;
		}
		// If no viewOptions are passed, let's just pass through the
		// current context untouched.
		if (_.isEmpty(viewOptions)) {
			viewOptions = _.clone(this);
		}

		templatePath = 'app/scripts/templates/' + viewName + '.hbs';

		return JST[templatePath](viewOptions);
	}

	Handlebars.registerHelper('view', viewHelper);
	
	/**
	*	@author Andre Silva
	*	@Version 1.0.0
	*	@Summary: helper to execute an IF statement with comparison and logical operator
	*/
	function ifCondHelper (v1, operator, v2, options) {
		switch (operator) {
	        case '==':
	            return (v1 == v2) ? options.fn(this) : options.inverse(this);
	        case '===':
	            return (v1 === v2) ? options.fn(this) : options.inverse(this);
	        case '<':
	            return (v1 < v2) ? options.fn(this) : options.inverse(this);
	        case '<=':
	            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
	        case '>':
	            return (v1 > v2) ? options.fn(this) : options.inverse(this);
	        case '>=':
	            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
	        case '&&':
	            return (v1 && v2) ? options.fn(this) : options.inverse(this);
	        case '||':
	            return (v1 || v2) ? options.fn(this) : options.inverse(this);
	        default:
	            return options.inverse(this);
    	}
	}

	Handlebars.registerHelper('ifCond', ifCondHelper);

	/*
	*	@author Miguel Melo
	*	@Version 1.0.0
	*	@Summary: helper to execute an html repeater
	*/
	Handlebars.registerHelper('repeat', function(count, options) {
		var out = "";
		var c = typeof count === 'number' ? count : 1; 
		var i = count - 1;

		for (; i >= 0; i--) {
			out+= options.fn();
		}

		return out;
	});

	/*
	*	@author Miguel Melo
	*	@Version 1.0.0
	*	@Summary: helper to execute an html repeater
	*/
	Handlebars.registerHelper('repeatUnless', function(count, options) {
		var out = "";
		var c = typeof count === 'number' ? count : 1; 
		var i = 5 - count - 1;

		if (!count) i = 4;

		for (; i >= 0; i--) {
			out+= options.fn();
		}

		return out;
	});

	/*
	*	@author Miguel Melo
	*	@Version 1.0.0
	*	@Summary: helper for simple i18n support
	*/
	Handlebars.registerHelper('t', function(str, options) {
		var msg = str;
		if ( options.hash.count ) {
			msg = parseInt(options.hash.count, 10) > 1 ? str+"__plural" : str;
		}

		return App.i18n.toJSON()[msg] || '{{' + msg + '}}';
	});
});
