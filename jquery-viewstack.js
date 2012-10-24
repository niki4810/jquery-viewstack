/*!
 * jquery viewstack (0.22)
 * Copyright 2012, Nikhilesh Katakam
 * Distributed under MIT license.
 * https://github.com/niki4810/jquery-viewstack
 */

$.widget("nk.viewstack", {
	version : "0.1",
	options : {
		selectedIndex : 0
	},
	_viewStackChildren : null,
	_create : function() {
		this._viewStackChildren = this.element.find("> div");
		if (!this._viewStackChildren) {
			throw Error("Expected viewstack children to be defined");
		}
		this._createView();
	},
	_setOption : function(key, value) {
		if (key === "selectedIndex") {
			this.options[key] = value;
			this._updateDisplayList();
		}

	},
	_createView : function() {
		this._refreshView();
		//trigger a creation complete event
		this._trigger("creationComplete", null, {
			selectedIndex : this.options.selectedIndex
		});
	},
	_updateDisplayList : function() {
		this._refreshView();
		//trigger selected index changed event
		this._trigger("selectedIndexChanged", null, {
			selectedIndex : this.options.selectedIndex
		});
	},
	_refreshView : function() {
		var viewStackChildren = this._viewStackChildren;
		for (var i = 0; i < viewStackChildren.length; i++) {
			if (this.options.selectedIndex === i) {
				$(viewStackChildren[i]).show();
			} else {
				$(viewStackChildren[i]).hide();
			}
		}
	},
	destroy : function() {
		// call the base destroy function
		$.Widget.prototype.destroy.call(this);
	},
	/*public methods*/
	getSelectedIndex : function() {
		return this.options.selectedIndex;
	},
	getChildrenCount : function() {
		return this._viewStackChildren.length;
	}
});
