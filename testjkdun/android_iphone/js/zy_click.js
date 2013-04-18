	var $support = {
		transform3d: ('WebKitCSSMatrix' in window),
		touch: ('ontouchstart' in window)
	};

	var $E = {
		start: $support.touch ? 'touchstart' : 'mousedown',
		move: $support.touch ? 'touchmove' : 'mousemove',
		end: $support.touch ? 'touchend' : 'mouseup',
		transEnd:'webkitTransitionEnd'
	};
	function getPage (event, page) {
		return $support.touch ? event.changedTouches[0][page] : event[page];
	}
	var zyClick = function(selector,clickFun,css){
		var self = this;
		self._clickFun = clickFun || null;
		self._click=false;
		self.css = css;
		if(typeof selector == 'object')
			self.element = selector;
		else if(typeof selector == 'string')
			self.element = document.getElementById(selector);
		
		self.element.addEventListener($E.start, self, false);
		self.element.addEventListener($E.move, self, false);
		self.element.addEventListener($E.end, self, false);
		document.addEventListener($E.end, self, false);

		return self;
	}

	zyClick.prototype = {
		handleEvent: function(event) {
			var self = this;
			switch (event.type) {
				case $E.start:
					self._touchStart(event);
					break;
				case $E.move:
					self._touchMove(event);
					break;
				case $E.end:
					self._touchEnd(event);
					break;
			}
		},
        _touchStart: function(event) {
            var self = this;
            self.start = true;
            self._click=true;
            self.startPageX = getPage(event, 'pageX');
            self.startPageY = getPage(event, 'pageY');
            self.startTime = event.timeStamp;
            if(self.css)
            	self.element.className+=(" "+self.css);
        },
        _touchMove: function(event) {
        	
            var self = this;
			if(!self.start)
				return;

            var pageX = getPage(event, 'pageX'),
                pageY = getPage(event, 'pageY'),
                deltaX = pageX - self.startPageX,
                deltaY = pageY - self.startPageY;
			
           if(Math.abs(deltaX)>10 || Math.abs(deltaY)>10)
           		self._click=false;
        },
        _touchEnd: function(event) {
            var self = this;
            if(self.start == true)
            {
            	self.start = false;
            	if(self.css)
            		self.element.className=self.element.className.replace(" "+self.css,"");
            	if(self._click)
            	{
            		self._click=false;
            		if(event.timeStamp - self.startTime>600)
            			return;
            		
            		if(self._clickFun &&(event.currentTarget==self.element))
	           			self._clickFun(self.element);
	           		
            	}
            }
        },
        destroy: function() {
            var self = this;

            self.element.removeEventListener($E.start, self);
            self.element.removeEventListener($E.move, self);
            self.element.removeEventListener($E.end, self);
            document.removeEventListener($E.end, self);
        }
	}

function zy_touch(c,f)
{
	
	var t=event.currentTarget;
	if(!t.zTouch)
	{
		t.zTouch=new zyClick(t,f,c);
		t.zTouch._touchStart(event);
	}
}