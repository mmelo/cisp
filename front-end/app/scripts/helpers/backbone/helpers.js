/**
*	@author Miguel Melo
*	@version 1.1.0
*/
/*global */
(function(factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		define(['backbone'], factory);
	}
})(function(Backbone) {
	'use strict';

	/**
	*	Utility function to ease view lifecycle management.
	*
	*	@exports Backbone.View.close()
	*	@extends Backbone.View
	*	@see module:Backbone.View
	*	@author Miguel Melo
	*	@version 1.1.0
	*/
	Backbone.View.prototype._dispose = function(){
		this.undelegateEvents();

		if (this.model){ this.model.off(null, null, this); }
		if (this.collection){ this.collection.off(null, null, this); }

		this.stopListening();

		return this;
	};

	/**
	*	Utility function to ease view lifecycle management.
	*
	*	@exports Backbone.View.close()
	*	@extends Backbone.View
	*	@see module:Backbone.View
	*	@author Miguel Melo
	*	@version 1.1.0
	*/
	Backbone.View.prototype.close = function(){
		if (this.onClose) this.onClose();
		this._dispose().remove();
	};
});

