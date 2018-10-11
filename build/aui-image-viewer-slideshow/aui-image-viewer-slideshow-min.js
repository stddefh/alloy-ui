YUI.add("aui-image-viewer-slideshow",function(e,t){function s(){}var n=e.getClassName("glyphicon","pause"),r=e.getClassName("glyphicon","play"),i=e.getClassName("image","viewer","player");s.prototype={TPL_IMAGE_VIEWER_PLAYER:'<div class="text-center '+i+'"><div class="text-center glyphicon '+r+'" style="cursor: pointer;"></span></div>',initializer:function(){this._slideshowEventHandles=[this.after({currentIndexChange:this._afterSlideshowCurrentIndexChange,intervalTimeChange:this._afterSlideshowIntervalTimeChange,playingChange:this._afterSlideshowPlayingChange,showPlayerChange:this._afterSlideshowShowPlayerChange}),e.after(this._afterSlideshowBindUI,this,"bindUI"),e.after(this._afterSlideshowRenderUI,this,"renderUI"),e.after(this._afterSlideshowUISetVisible,this,"_uiSetVisible")]},destructor:function(){this._playerEventHandle&&this._playerEventHandle.detach(),(new e.EventHandle(this._slideshowEventHandles)).detach()},pause:function(){this.set("playing",!1)},play:function(){this.set("playing",!0)},_afterSlideshowBindUI:function(){this._bindPlayer()},_afterSlideshowRenderUI:function(){this._renderPlayer()},_afterSlideshowCurrentIndexChange:function(){this._syncTimers()},_afterSlideshowIntervalTimeChange:function(){this._syncTimers()},_afterSlideshowPlayingChange:function(){this._syncPlaying(),this._syncTimers()},_afterSlideshowShowPlayerChange:function(){this._renderPlayer(),this._syncShowPlayer(),this._bindPlayer()},_afterSlideshowUISetVisible:function(){this.get("visible")?(this._syncPlaying(),this._syncShowPlayer(),this._syncTimers()):(this._syncShowPlayer(),this._clearTimer())},_bindPlayer:function(){this._player&&!this._playerEventHandle&&(this._playerEventHandle=this._player.on("click",e.bind(this._onPlayerClick,this)))},_clearTimer:function(){this._timer&&(clearInterval(this._timer),this._timer=null)},_onPlayerClick:function(){this.set("playing",!this.get("playing"))},_renderPlayer:function(){this.get("showPlayer")&&!this._player&&(this._player=e.Node.create(this.TPL_IMAGE_VIEWER_PLAYER),this.get("contentBox").append(this._player))},_startTimer:function(){this._clearTimer(),this._timer=setInterval(e.bind(this.next,this),this.get("intervalTime")*1e3)},_syncPlaying:function(){if(!this._player)return;this.get("playing")?this._player.one(".glyphicon").replaceClass(r,n):this._player.one(".glyphicon").replaceClass(n,r)},_syncShowPlayer:function(){if(!this._player)return;this.get("showPlayer")&&this.get("visible")?this._player.show():this._player.hide()},_syncTimers:function(){this.get("playing")?this._startTimer():this._clearTimer()}},s.ATTRS={intervalTime:{value:2,validator:e.Lang.isNumber},playing:{value:!0,validator:e.Lang.isBoolean},showPlayer:{value:!0,validator:e.Lang.isBoolean}},e.ImageViewerSlideshow=s},"3.1.0-deprecated.50",{requires:["node","aui-classnamemanager"]});
