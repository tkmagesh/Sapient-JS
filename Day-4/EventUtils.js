var myApp = myApp || {};
(function(){
	var eventUtils = {
		addEvent : function (node,eventName,fn){
		  if (node.addEventListener){
		    node.addEventListener(eventName,fn);
		  }
		  else if (node.attachEvent){
		    node.attachEvent("on" + eventName,fn)
		  }
		},

		removeEvent : function(node,eventName,fn){
		  if (node.removeEventListener){
		    node.removeEventListener(eventName,fn);
		  }
		  else if (node.detachEvent){
		    node.detachEvent("on" + eventName,fn)
		  }
		},

		getEventTarget : function(evtObj){
			if (evtObj.srcElement) return evtObj.srcElement;
			return evtObj.target;
		},

		stopEvent : function(evtObj){
			if (evtObj.stopPropagation) evtObj.stopPropagation();
			evtObj.cancelBubble = true;
		}
	};
	myApp.eventUtils = eventUtils;
})();

