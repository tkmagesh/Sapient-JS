$.fn.hint = function(options){
	var _default = {
		attrName : 'hint',
		styleName : 'hintStyle'
	};

	/*if (options && options.attrName)
		_default.attrName = options.attrName;
	if (options && options.styleName)
		_default.styleName = options.styleName;
	*/
	//extend the options object
	$.extend(_default,options);

	//override the default val function
	$.fn.val = function(){
	  if (arguments.length == 0){
	    if (this.first()[0].value === this.first().attr("hint")) return "";
	    return this.first()[0].value;
	  }
	  var valueToBeSet = arguments[0];
	  this.each(function(){
	  	this.value = valueToBeSet;
	  });
	  return this;
	}
	this.focus(function(){
		var $this = $(this);
		if (this.value == $(this).attr(_default.attrName)){
			$(this).removeClass(_default.styleName);
			this.value = '';
		}
	}).blur(function(){
		var $this = $(this);
		if (this.value == ''){
			$this.addClass(_default.styleName);
			this.value = $(this).attr(_default.attrName);
		}
	}).each(function(index,elem){
		elem.value = $(this).attr(_default.attrName); 
		$(elem).addClass(_default.styleName);
	});	
	return this;
};
