YUI.add("aui-tree-data",function(e,t){var n=e.Lang,r=n.isArray,i=n.isObject,s=n.isUndefined,o=function(t){return e.instanceOf(t,e.TreeNode)},u=function(t){return e.instanceOf(t,e.TreeView)},a=e.getClassName,f=a("tree","node"),l=function(){};l.ATTRS={container:{setter:e.one},children:{value:[],validator:r,setter:"_setChildren"},index:{value:{}}},e.mix(l.prototype,{_indexPrimed:!1,childrenLength:0,initializer:function(){var e=this;e.publish("move"),e.publish("append",{defaultFn:e._appendChild}),e.publish("remove",{defaultFn:e._removeChild})},destructor:function(){var e=this;e.eachChildren(function(e){e.destroy()},!0)},getNodeById:function(e){var t=this;return t._indexPrimed||t.refreshIndex(),t.get("index")[e]},isRegistered:function(e){var t=this;return!!t.get("index")[e.get("id")]},updateReferences:function(t,n,r){var i=this,s=t.get("parentNode"),o=t.get("ownerTree"),u=s&&s!==n;if(s){if(u){var a=s.get("children");e.Array.removeItem(a,t),s.set("children",a)}s.unregisterNode(t)}o&&o.unregisterNode(t),t.set("parentNode",n),t.set("ownerTree",r),n&&n.registerNode(t),r&&r.registerNode(t),o!==r&&t.eachChildren(function(e){i.updateReferences(e,e.get("parentNode"),r)});if(u){var f=i.getEventOutputMap(t);s.get("children").length||s.collapse(),f.tree.oldParent=s,f.tree.oldOwnerTree=o,i.bubbleEvent("move",f)}},refreshIndex:function(){var e=this;e.updateIndex({}),e.eachChildren(function(t){e.registerNode(t)},!0)},registerNode:function(e){var t=this,n=e.get("id"),r=t.get("index");n&&(r[n]=e),u(t)&&(e.addTarget(t),e.set("ownerTree",t)),e._inheritOwnerTreeAttrs(),t.updateIndex(r)},updateIndex:function(e){var t=this;e&&(t._indexPrimed=!0,t.set("index",e))},unregisterNode:function(e){var t=this,n=t.get("index");delete n[e.get("id")],u(t)&&e.removeTarget(t),t.updateIndex(n)},collapseAll:function(){var e=this;e.eachChildren(function(e){e.collapse()},!0)},expandAll:function(){var e=this;e.eachChildren(function(e){e.expand()},!0)},selectAll:function(){var e=this;e.eachChildren(function(e){e.select()},!0)},unselectAll:function(){var e=this;e.eachChildren(function(e){e.unselect()},!0)},eachChildren:function(t,n){var r=this,i=r.getChildren(n);e.Array.each(i,function(e){e&&t.apply(r,arguments)})},eachParent:function(e){var t=this,n=t.get("parentNode");while(n)n&&e.call(t,n),n=n.get("parentNode")},bubbleEvent:function(e,t,n,r){var i=this;i.fire(e,t);if(!n){var o=i.get("parentNode");t=t||{},s(r)&&(r=!0),t.stopActionPropagation=r;while(o)o.fire(e,t),o=o.get("parentNode")}},createNode:function(t){var n=e.TreeNode.nodeTypes[i(t)?t.type:t]||e.TreeNode;return new n(i(t)?t:{})},appendChild:function(e,t){var n=this,r=n.getEventOutputMap(e);n.bubbleEvent("append",r,t)},_appendChild:function(e){if(e.stopActionPropagation)return!1;var t=this,n=e.tree.node,r=t.get("ownerTree"),i=t.get("children");t.updateReferences(n,t,r);var s=i.push(n);t.childrenLength=i.length;var o=s-2,u=t.item(o);n._nextSibling=null,n._prevSibling=u,n.render(t.get("container"))},item:function(e){var t=this;return t.get("children")[e]},indexOf:function(t){var n=this;return e.Array.indexOf(n.get("children"),t)},hasChildNodes:function(){var e=this;return e.getChildrenLength()>0},getChildren:function(e){var t=this,n=[],r=t.get("children");return n=n.concat(r),e&&t.eachChildren(function(t){n=n.concat(t.getChildren(e))}),n},getChildrenLength:function(){var e=this;return e.childrenLength||e.get("children").length},getEventOutputMap:function(e){var t=this;return{tree:{instance:t,node:e||t}}},removeChild:function(e){var t=this,n=t.getEventOutputMap(e);t.bubbleEvent("remove",n)},_removeChild:function(t){if(t.stopActionPropagation)return!1;var n=this,r=t.tree.node,i=n.get("ownerTree");if(n.isRegistered(r)){r.set("parentNode",null),n.unregisterNode(r),r.set("ownerTree",null),i&&i.unregisterNode(r),r.get("boundingBox").remove();var s=n.get("children");e.Array.removeItem(s,r),n.set("children",s)}},empty:function(){var e=this;e.eachChildren(function(e){var t=e.get("parentNode");t&&t.removeChild(e)})},insert:function(e,t,n){t=t||this;if(t===e)return!1;var r=t.get("parentNode");if(e&&r){var i=e.get("boundingBox"),s=t.get("boundingBox"),o=t.get("ownerTree");n==="before"?s.placeBefore(i):n==="after"&&s.placeAfter(i);var u=[],a=r.get("boundingBox").all("> ul > li");a.each(function(e){u.push(e.getData("tree-node"))});var f=i.get("nextSibling");e.set("nextSibling",f&&f.getData("tree-node"));var l=i.get("previousSibling");e.set("prevSibling",l&&l.getData("tree-node")),t.updateReferences(e,r,o),r.set("children",u)}e.render();var c=t.getEventOutputMap(e);c.tree.refTreeNode=t,t.bubbleEvent("insert",c)},insertAfter:function(e,t){var n=this;n.insert(e,t,"after")},insertBefore:function(e,t){var n=this;n.insert(e,t,"before")},getNodeByChild:function(e){var t=e.ancestor("."+f);return t?t.getData("tree-node"):null},_inheritOwnerTreeAttrs:n.emptyFn,_setChildren:function(t){var n=this,r=[],s=n.get("container");s||(s=n._createNodeContainer()),n.childrenLength=t.length;var a=n;o(n)&&(a=n.get("ownerTree"));var f=u(a),l=!0;return f&&(l=a.get("lazyLoad")),n.updateIndex({}),n.childrenLength>0&&n.set("leaf",!1),e.Array.each(t,function(t){if(t){if(!o(t)&&i(t)){var u=t.children,c=u&&u.length;t.ownerTree=a,t.parentNode=n,c&&l&&delete t.children;var h=t;t=n.createNode(t),c&&l&&(h.children=u,t.childrenLength=u.length,e.setTimeout(function(){t.set("children",u)},50))}n.registerNode(t),f&&a.registerNode(t),t.render(s),e.Array.indexOf(r,t)===-1&&r.push(t)}}),r}}),e.TreeData=l},"3.0.3-deprecated.89",{requires:["aui-base-core","aui-base-lang","aui-node-base","aui-timer","aui-component"]});
