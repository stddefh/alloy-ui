YUI.add("aui-affix",function(e,t){var n=e.config.win;e.Affix=e.Base.create("affix",e.Base,[],{_eventHandle:null,_lastPosition:null,initializer:function(){this.publish({bottom:{defaultFn:this._defAffixBottomFn},"default":{defaultFn:this._defAffixFn},top:{defaultFn:this._defAffixTopFn}}),this.after({offsetBottomChange:this._afterOffsetChange,offsetTopChange:this._afterOffsetChange}),this.refresh(),this._eventHandle=e.one(n).on("scroll",this._onScroll,this)},destructor:function(){this._eventHandle.detach()},refresh:function(){var t=e.DOM.docScrollY(),n=this.get("offsetBottom"),r=this.get("offsetTop"),i;if(r>=0&&r>=t){this._handleAffixEvent(e.Affix.EVENTS.TOP);return}i=this.get("target").get("region");if(n>=0&&e.DOM.docHeight()-e.DOM.winHeight()-n<=i.bottom){this._handleAffixEvent(e.Affix.EVENTS.BOTTOM);return}this._handleAffixEvent(e.Affix.EVENTS.DEFAULT)},_afterOffsetChange:function(){this.refresh()},_defAffixBottomFn:function(){this._syncClassesUI(e.Affix.EVENTS.BOTTOM)},_defAffixFn:function(){this._syncClassesUI(e.Affix.EVENTS.DEFAULT)},_defAffixTopFn:function(){this._syncClassesUI(e.Affix.EVENTS.TOP)},_getOffset:function(t){return e.Lang.isFunction(t)&&(t=t.call(this)),t},_handleAffixEvent:function(e){e!==this._lastPosition&&this.fire(e)},_onScroll:function(){this.refresh()},_syncClassesUI:function(t){var n=this.get("target");n.toggleClass(e.Affix.CSS_CLASSES.BOTTOM,t===e.Affix.EVENTS.BOTTOM),n.toggleClass(e.Affix.CSS_CLASSES.DEFAULT,t===e.Affix.EVENTS.DEFAULT),n.toggleClass(e.Affix.CSS_CLASSES.TOP,t===e.Affix.EVENTS.TOP),this._lastPosition=t},_validateOffset:function(t){return e.Lang.isFunction(t)&&(t=t.call(this)),e.Lang.isNumber(t)||e.Lang.isFunction(t)||t===Number.NEGATIVE_INFINITY}},{ATTRS:{offsetBottom:{getter:"_getOffset",validator:"_validateOffset",value:Number.NEGATIVE_INFINITY},offsetTop:{getter:"_getOffset",validator:"_validateOffset",value:Number.NEGATIVE_INFINITY},target:{setter:e.one}},EVENTS:{BOTTOM:"bottom",DEFAULT:"default",TOP:"top"},CSS_CLASSES:{BOTTOM:e.getClassName("affix","bottom"),DEFAULT:e.getClassName("affix"),TOP:e.getClassName("affix","top")}})},"3.0.3-deprecated.78",{requires:["base","node-screen","aui-node"]});
