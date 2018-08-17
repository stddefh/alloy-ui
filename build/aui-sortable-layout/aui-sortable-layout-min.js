YUI.add("aui-sortable-layout",function(e,t){var n=e.Lang,r=n.isBoolean,i=n.isFunction,s=n.isObject,o=n.isString,u=n.isValue,a=n.toInt,f=Math.ceil,l=e.DD.DDM,c=0,h=0,p=0,d=0,v=function(){return Array.prototype.slice.call(arguments).join(" ")},m=function(t){return e.Lang.isNodeList(t)?t:e.all(t)},g=function(e,t){return a(e.getStyle(t))},y=e.getClassName,b=y("sortable-layout","drag","indicator"),w=y("sortable-layout","drag","indicator","icon"),E=y("sortable-layout","drag","indicator","icon","left"),S=y("sortable-layout","drag","indicator","icon","right"),x=y("sortable-layout","drag","target","indicator"),T=y("icon"),N=y("icon","circle","triangle","l"),C=y("icon","circle","triangle","r"),k='<div class="'+b+'">'+'<div class="'+v(w,E,T,C)+'"></div>'+'<div class="'+v(w,S,T,N)+'"></div>'+"<div>",L=e.Component.create({NAME:"sortable-layout",ATTRS:{delegateConfig:{value:null,setter:function(t){var n=this,r=e.merge({bubbleTargets:n,dragConfig:{},nodes:n.get("dragNodes"),target:!0},t);return e.mix(r.dragConfig,{groups:n.get("groups"),startCentered:!0}),r},validator:s},proxyNode:{setter:function(t){return o(t)?e.Node.create(t):t}},dragNodes:{validator:o},dropContainer:{value:function(e){return e},validator:i},dropNodes:{setter:"_setDropNodes"},groups:{value:["sortable-layout"]},lazyStart:{value:!1,validator:r},placeholder:{value:k,setter:function(t){var n=o(t)?e.Node.create(t):t;return n.inDoc()||e.getBody().prepend(n.hide()),c=g(n,"marginBottom"),h=g(n,"marginTop"),n.addClass(x),p=g(n,"marginBottom"),d=g(n,"marginTop"),n}},proxy:{value:null,setter:function(t){var n=this,r={moveOnEnd:!1,positionProxy:!1};return n.get("proxyNode")&&(r.borderStyle=null),e.merge(r,t||{})}}},EXTENDS:e.Base,prototype:{initializer:function(){var e=this;e.bindUI()},bindUI:function(){var e=this;e.publish("placeholderAlign",{defaultFn:e._defPlaceholderAlign,queuable:!1,emitFacade:!0,bubbles:!0}),e._bindDDEvents(),e._bindDropZones()},addDropNode:function(t,n){var r=this;t=e.one(t),l.getDrop(t)||r.addDropTarget(new e.DD.Drop(e.merge({bubbleTargets:r,groups:r.get("groups"),node:t},n)))},addDropTarget:function(e){var t=this;e.addToGroup(t.get("groups"))},alignPlaceholder:function(e,t){var n=this,r=n.get("placeholder");n.lazyEvents||r.show(),n._syncPlaceholderSize(),r.setXY(n.getPlaceholderXY(e,t))},calculateDirections:function(e){var t=this,n=t.lastY,r=t.lastX,i=e.lastXY[0],s=e.lastXY[1];i!==r&&(t.XDirection=i<r?"left":"right"),s!==n&&(t.YDirection=s<n?"up":"down"),t.lastX=i,t.lastY=s},calculateQuadrant:function(e,t){var n=this,r=1,i=t.get("node").get("region"),s=e.mouseXY,o=s[0],u=s[1],a=i.top,f=i.left,l=a+(i.bottom-a)/2,c=f+(i.right-f)/2;return u<l?r=o>c?1:2:r=o<c?3:4,n.quadrant=r,r},getPlaceholderXY:function(e,t){var n=this,r=n.get("placeholder"),i=c,s=h;t&&(i=p,s=d),r.toggleClass(x,t);var o=f(e.bottom),u=f(e.left),a=f(e.top),l=u,v=n.quadrant<3?a-(r.get("offsetHeight")+i):o+s;return[l,v]},removeDropTarget:function(e){var t=this;e.removeFromGroup(t.get("groups"))},_alignCondition:function(){var e=this,t=l.activeDrag,n=e.activeDrop;if(t&&n){var r=t.get("node"),i=n.get("node");return!r.contains(i)}return!0},_bindDDEvents:function(){var t=this,n=t.get("delegateConfig"),r=t.get("proxy");t.delegate=new e.DD.Delegate(n),t.delegate.dd.plug(e.Plugin.DDProxy,r),t.on("drag:end",e.bind(t._onDragEnd,t)),t.on("drag:enter",e.bind(t._onDragEnter,t)),t.on("drag:exit",e.bind(t._onDragExit,t)),t.on("drag:over",e.bind(t._onDragOver,t)),t.on("drag:start",e.bind(t._onDragStart,t)),t.after("drag:start",e.bind(t._afterDragStart,t)),t.on("quadrantEnter",t._syncPlaceholderUI),t.on("quadrantExit",t._syncPlaceholderUI)},_bindDropZones:function(){var e=this,t=e.get("dropNodes");t&&t.each(function(t){e.addDropNode(t)})},_defPlaceholderAlign:function(){var e=this,t=e.activeDrop,n=e.get("placeholder");if(t&&n){var r=t.get("node"),i=!!r.drop;e.lastAlignDrop=t,e.alignPlaceholder(t.get("node").get("region"),i)}},_evOutput:function(){var e=this;return{drag:l.activeDrag,drop:e.activeDrop,quadrant:e.quadrant,XDirection:e.XDirection,YDirection:e.YDirection}},_fireQuadrantEvents:function(){var t=this,n=t._evOutput(),r=t.lastQuadrant,i=t.quadrant;i!==r&&(r&&t.fire("quadrantExit",e.merge({lastDrag:t.lastDrag,lastDrop:t.lastDrop,lastQuadrant:t.lastQuadrant,lastXDirection:t.lastXDirection,lastYDirection:t.lastYDirection},n)),t.fire("quadrantEnter",n)),t.fire("quadrantOver",n),t.lastDrag=l.activeDrag,t.lastDrop=t.activeDrop,t.lastQuadrant=i,t.lastXDirection=t.XDirection,t.lastYDirection=t.YDirection},_getAppendNode:function(){return l.activeDrag.get("node")},_positionNode:function(){var e=this,t=e.lastAlignDrop||e.activeDrop;if(t){var n=e._getAppendNode(),r=t.get("node"),i=u(r.drop),s=e.quadrant<3;if(e._alignCondition())if(i)r[s?"placeBefore":"placeAfter"](n);else{var o=e.get("dropContainer").apply(e,[r]);o[s?"prepend":"append"](n)}}},_syncPlaceholderUI:function(e){var t=this;t._alignCondition()&&t.fire("placeholderAlign",{drop:t.activeDrop,originalEvent:e})},_syncPlaceholderSize:function(){var e=this,t=e.activeDrop.get("node"),n=e.get("placeholder");n&&n.set("offsetWidth",t.get("offsetWidth"))},_syncProxyNodeUI:function(){var e=this,t=l.activeDrag.get("dragNode"),n=e.get("proxyNode");n&&!n.compareTo(t)&&(t.append(n),e._syncProxyNodeSize())},_syncProxyNodeSize:function(){var e=this,t=l.activeDrag.get("node"),n=e.get("proxyNode");t&&n&&(n.set("offsetHeight",t.get("offsetHeight")),n.set("offsetWidth",t.get("offsetWidth")))},_afterDragStart:function(e){var t=this;t.get("proxy")&&t._syncProxyNodeUI(e)},_onDragEnd:function(e){var t=this,n=t.get("placeholder"),r=t.get("proxyNode");t.lazyEvents||t._positionNode(e),r&&r.remove(),n&&n.hide(),t.lastQuadrant=null,t.lastXDirection=null,t.lastYDirection=null},_onDragEnter:function(e){var t=this;t.activeDrop=l.activeDrop,t.lazyEvents&&t.lastActiveDrop&&(t.lazyEvents=!1,t._syncPlaceholderUI(e)),t.lastActiveDrop||(t.lastActiveDrop=l.activeDrop)},_onDragExit:function(e){var t=this;t._syncPlaceholderUI(e),t.activeDrop=l.activeDrop,t.lastActiveDrop=
l.activeDrop},_onDragOver:function(e){var t=this,n=e.drag;t.activeDrop===l.activeDrop&&(t.calculateDirections(n),t.calculateQuadrant(n,t.activeDrop),t._fireQuadrantEvents())},_onDragStart:function(){var e=this;e.get("lazyStart")&&(e.lazyEvents=!0),e.lastActiveDrop=null,e.activeDrop=l.activeDrop},_setDropNodes:function(e){var t=this;return i(e)&&(e=e.call(t)),m(e)}}});e.SortableLayout=L},"3.0.3-deprecated.78",{requires:["dd-delegate","dd-drag","dd-drop","dd-proxy","aui-node","aui-component"],skinnable:!0});
