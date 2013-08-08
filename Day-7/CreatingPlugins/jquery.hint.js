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
	$.extend(_default,options);
	this.focus(function(){
		var $this = $(this);
		if ($this.val() == $this.attr(_default.attrName)){
			$this.removeClass(_default.styleName);
			$this.val('');
		}
	}).blur(function(){
		var $this = $(this);
		if ($this.val() == ''){
			$this.addClass(_default.styleName);
			$this.val($(this).attr(_default.attrName));
		}
	}).each(function(index,elem){
		$(elem).val($(this).attr(_default.attrName)).addClass(_default.styleName);
	});	
};
