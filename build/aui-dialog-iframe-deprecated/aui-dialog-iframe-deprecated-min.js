YUI.add("aui-dialog-iframe-deprecated",function(e,t){var n=e.Lang,r=n.isFunction,i=e.getClassName,s="iframe",o="bindLoadHandler",u="bodyContent",a="closeOnEscape",f="contentWindow",l="detach",c="document",h="documentElement",p="gutter",d="host",v="iframeCssClass",m="iframeId",g="iframeTitle",y="key",b="load",w="offsetHeight",E="offsetWidth",S="paddingBottom",x="paddingLeft",T="paddingRight",N="paddingTop",C="renderUI",k="rendered",L="src",A="unload",O="uri",M="uriChange",_="visibleChange",D=i("dialog",s,"bd"),P=i("dialog",s,"node"),H=i("dialog",s,"root","node"),B=[P],j='<iframe class="{cssClass}" frameborder="0" id="{id}" name="{id}" src="{uri}" title="{title}"></iframe>',F=e.Widget.UI_SRC,I={src:F},q=e.Component.create({ATTRS:{bindLoadHandler:{validator:r,value:function(){var t=this;t.node.on("load",e.bind(t.fire,t,"load"))}},closeOnEscape:{validator:n.isBoolean,value:!0},gutter:{setter:"_setGutter",valueFn:"_gutterValueFn"},iframeCssClass:{value:"",setter:"_setIframeCssClass"},iframeId:{valueFn:function(){var t=this;return t.get("id")||e.guid()}},iframeTitle:{validator:n.isString,value:""},uri:{}},EXTENDS:e.Plugin.Base,NAME:s,NS:s,prototype:{initializer:function(){var t=this;t._host=t.get(d),t._eventHandles=[],t.publish(b,{defaultFn:t._defaultLoadIframeFn}),t._host.get(k)?t._initializeIframe():t.afterHostMethod(C,e.debounce(t._afterRenderUI,50,t),t),t.afterHostMethod("_uiSetVisible",e.bind(t._afterHostUISetVisible,t),t),t.afterHostMethod("_fillHeight",e.bind(t._setNodeDimensions,t),t),t.afterHostMethod("_uiSetWidth",e.bind(t._setNodeDimensions,t),t),t.after(a+"Change",t._uiSetCloseOnEscape,t)},destructor:function(){var e=this;e._bodyNode.loadingmask.destroy(),e._detachEventHandles(),e._host.set(u,e._previousBodyContent),e.node.remove(!0)},_afterHostUISetVisible:function(e){var t=this;e&&t._host._fillHeight()},_afterRenderUI:function(){var e=this;e._initializeIframe()},_afterUriChange:function(e){var t=this;e.src!==F&&t._uiSetUri(e.newVal,e.prevVal)},_bindEvents:function(){var t=this;t.afterHostEvent(_,t._afterDialogVisibleChange),t.after(M,t._afterUriChange),t.node.on(b,e.bind(t._onLoadIframe,t));var n=t.get(o);n.call(t)},_detachEventHandles:function(){var t=this,n=t._eventHandles;e.Array.invoke(n,l),t._eventCloseOnEscapeHandle&&t._eventCloseOnEscapeHandle.detach(),n.length=0},_defaultLoadIframeFn:function(){var e=this,t=e.node;try{var n=t.get(f);n.once(A,e._detachEventHandles,e);var r=n.get(c);r.get(h).addClass(H),e.set(O,r.get("location.href"),I),e._uiSetCloseOnEscape()}catch(i){}e._bodyNode.loadingmask.hide(),e._host._syncUIPosAlign()},_gutterValueFn:function(){return function(){var e=this,t=e._host.bodyNode;return{bottom:t.getStyle(S),left:t.getStyle(x),right:t.getStyle(T),top:t.getStyle(N)}}},_initializeIframe:function(){var t=this;t._plugIframe(),t._bindEvents();var n=t._bodyNode;n.plug(e.LoadingMask);var r=n.loadingmask;r.overlayMask.after(_,t._afterMaskVisibleChange,t),r.show()},_onLoadIframe:function(){var e=this;e._setIframeContentGutter(),e._setNodeDimensions()},_plugIframe:function(){var t=this,r=n.sub(j,{cssClass:t.get(v),title:t.get(g),id:t.get(m),uri:t.get(O)}),i=t._host.bodyNode,s=e.Node.create(r);t._host.set(u,s),i.addClass(D),t._bodyNode=i,t.node=s},_setGutter:function(e){var t=this;return r(e)&&(e=e.call(t)),e},_setIframeContentGutter:function(){var e=this,t=e._host.bodyNode,n=e.get(p),r=e.node.get(f),i=r.get(c);i.get(h).setStyles({paddingBottom:n.bottom,paddingLeft:n.left,paddingRight:n.right,paddingTop:n.top}),t.setStyles({height:t.get(w),padding:"0"})},_setIframeCssClass:function(e){return B[1]=e,B.join(" ")},_setNodeDimensions:function(){var e=this,t=e._host.bodyNode,n=e.node;t&&n&&n.setStyles({height:t.get(w),width:t.get(E)})},_uiSetCloseOnEscape:function(){var t=this;if(t.get(a))try{var n=t.node.get(f),r=n.get(c);t._eventCloseOnEscapeHandle=e.on(y,function(){t._host.hide()},[r],"down:27")}catch(i){}else t._eventCloseOnEscapeHandle&&(t._eventCloseOnEscapeHandle.detach(),t._eventCloseOnEscapeHandle=null)},_uiSetUri:function(e,t){var n=this,r=n._bodyNode.loadingmask,i=t.split("#"),s=e.split("#");s[0]!==i[0]&&r&&r.show(),n.node.attr(L,e)}}});e.Plugin.DialogIframe=q},"3.0.3-deprecated.89",{requires:["plugin","array-invoke","aui-base-deprecated","aui-loading-mask-deprecated"],skinnable:!0});
