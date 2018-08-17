YUI.add("aui-datatable-property-list",function(e,t){var n=e.Lang,r=n.isFunction;e.PropertyList=e.Base.create(e.DataTable.NAME,e.DataTable,[e.WidgetCssClass,e.WidgetToggle],{initializer:function(e){var t=this;t.CLASS_NAMES_PROPERTY_LIST={cell:t.getClassName("cell")},t._initHighlight(),t.after(t._afterRenderUI,t,"renderUI"),t.after(t._afterUITriggerSort,t,"_onUITriggerSort"),t.on("activeCellChange",t._onActiveCellChange),e.columns||this.set("columns",t._state.get("columns","initValue"))},getDefaultEditor:function(){return new e.TextCellEditor},_afterRenderUI:function(){var e=this;e.get("boundingBox").addClass(e.getClassName("property-list"))},_afterUITriggerSort:function(){var e=this;e.highlight.clear()},_initHighlight:function(){var t=this;t.plug(e.Plugin.DataTableHighlight,{highlightRange:!1,type:"rows"})},_onActiveCellChange:function(e){var t=this,n=e.newVal,r;n&&(r=t.getColumn(n),r&&r.key==="name"&&(e.newVal=n.next("."+t.CLASS_NAMES_PROPERTY_LIST.cell)))},_onSelectionKey:function(t){var n=this;if(n.get("activeCell")&&n.get("focused")){var r=t.keyCode,i=e.Widget.getByNode(t.target);i instanceof e.DataTable&&(i&&r===13&&n._onEditCell(t),e.PropertyList.superclass._onSelectionKey.apply(this,arguments),n._syncPropertyListScrollUI())}},_syncPropertyListScrollUI:function(){var e=this,t=e.get("activeRow");t&&e.scrollTo&&e.scrollTo(t.get("id"))}},{CSS_PREFIX:e.DataTable.CSS_PREFIX,ATTRS:{columns:{valueFn:function(){var e=this;return[{editor:!1,key:"name",label:e.getString("propertyName"),sortable:!0},{editor:e.getDefaultEditor(),formatter:function(e){var t=this,n=e.data;if(!n)return;var i=n.formatter;return r(i)?i.apply(t,arguments):n.value},key:"value",label:e.getString("value"),sortable:!0,width:"auto"}]}},scrollable:{value:!0},editEvent:{valueFn:function(){return e.UA.touchEnabled&&e.UA.mobile?"click":"dblclick"}},width:{setter:String},strings:{value:{propertyName:"Property Name",value:"Value"}}}})},"3.0.3-deprecated.78",{requires:["datatable-scroll","datatable-sort","aui-datatable-core","aui-datatable-edit","aui-datatable-highlight","aui-datatable-selection","aui-widget-cssclass","aui-widget-toggle"],skinnable:!0});
