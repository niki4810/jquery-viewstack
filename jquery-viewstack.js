$.widget("nk.viewstack", {
	version:"0.1",
	options : {
		selectedIndex : 0
	},
	_create : function() {
		this.element.addClass("viewstack ui-widget");
		this._update();
	},
	_setOption : function(key, value) {
		this.options[key] = value;
		this._update();
	},
	_update : function() {
		
		var viewStackChildren = this.element.find("> div");
		
		for(var i=0; i<viewStackChildren.length; i++){
			if(this.options.selectedIndex === i){
			$(viewStackChildren[i]).addClass(" ui-widget-content ui-corner-all")	
			 $(viewStackChildren[i]).show();	
			}else{
				$(viewStackChildren[i]).hide();
			}
		}
	},
	getSelectedIndex: function(){
		return this.options.selectedIndex;
	}
});
