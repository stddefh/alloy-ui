YUI.add("aui-chart-deprecated",function(e,t){var n=e.Lang,r=e.getClassName,i=e.config.doc,t="chart",s=r(t),o=e.config.base+"aui-chart-deprecated/assets/chart.swf?t="+n.now();YUI.namespace("_CHART"),e.namespace("config.chart");var u=e.Component.create({NAME:t,ATTRS:{type:{value:"pie"},dataSource:{value:null},altText:{getter:"_getAltText",setter:"_setAltText"},swfURL:{valueFn:function(){return e.namespace("config.chart").swfURL||o}},swfCfg:{value:{}},request:{value:"*"},series:{value:null},categoryNames:{getter:"_getCategoryNames",setter:"_setCategoryNames"},dataTipFunction:{setter:"_setDataTipFunction"},legendLabelFunction:{setter:"_setLegendLabelFunction"},style:{value:null},pollingInterval:{value:0}},proxyFunctionCount:0,createProxyFunction:function(t,n){var r=u.proxyFunctionCount,i="proxyFunction"+r;return YUI._CHART[i]=e.bind(t,n),u.proxyFunctionCount++,"YUI._CHART."+i},getFunctionReference:function(e){var t=this;if(n.isFunction(e))e=u.createProxyFunction(e);else if(e.fn&&n.isFunction(e.fn)){var r=[e.fn];e.context&&n.isObject(context)&&r.push(e.context),e=u.createProxyFunction(t,r)}return e},removeProxyFunction:function(e){e&&e.indexOf("YUI._CHART.proxyFunction")>-1&&(e=e.substr(12),YUI._CHART[e]=null)},prototype:{renderUI:function(){var t=this,r={align:"",allowNetworking:"",allowScriptAccess:"",base:"",bgcolor:"",menu:"",name:"",quality:"",salign:"",scale:"",tabindex:"",wmode:""},s=t.get("contentBox"),o={boundingBox:s,fixedAttributes:{allowScriptAccess:"always"},flashVars:{allowedDomain:i.location.hostname},backgroundColor:s.getStyle("backgroundColor"),url:t.get("swfURL"),height:t.get("height"),width:t.get("width"),version:9.045},u=t.get("swfCfg");for(var a in u)r.hasOwnProperty(a)?o.fixedAttributes[a]=u[a]:o[a]=u[a];var f=o.version;if(f&&n.isValue(f)&&f!="undefined"){var l=/\w*.\w*/.exec(f.toString().replace(/.0./g,".")).toString(),c=l.split(".");f=c[0]+".";switch(c[1].toString().length){case 1:f+="00";break;case 2:f+="0"}f+=c[1],o.version=parseFloat(f)}t._swfWidget=new e.SWF(o),t._swfNode=t._swfWidget._swf,t._swfNode&&(t._swf=t._swfNode.getDOM(),t._swfWidget.on("swfReady",t._eventHandler,t),t.set("swfCfg",o))},bindUI:function(){var e=this;e.publish("itemMouseOver"),e.publish("itemMouseOut"),e.publish("itemClick"),e.publish("itemDblClick"),e.publish("itemDragStart"),e.publish("itemDragEnd"),e.publish("itemDrag"),e.after("seriesChange",e.refreshData),e.after("dataSourceChange",e.refreshData),e.after("pollingIntervalChange",e.refreshData);var t=e.get("dataSource");t.after("response",e._loadDataHandler,e)},setStyle:function(t,n){var r=this;n=e.JSON.stringify(n),r._swf.setStyle(t,n)},setStyles:function(t){var n=this;t=e.JSON.stringify(t),n._swf.setStyles(t)},setSeriesStyles:function(t){var n=this;for(var r=0;r<t.length;r++)t[r]=e.JSON.stringify(t[r]);n._swf.setSeriesStyles(t)},_eventHandler:function(e){var t=this;e.type=="swfReady"&&(t._swfNode=t._swfWidget._swf,t._swf=t._swfNode.getDOM(),t._loadHandler(),t.fire("contentReady"))},_loadHandler:function(){var e=this;if(e._swf&&e._swf.setType){e._swf.setType(e.get("type"));var t=e.get("style");t&&e.setStyles(t),e._syncChartAttrs(),e._initialized=!0,e.refreshData()}},_syncChartAttrs:function(){var e=this,t=e._originalConfig;t.categoryNames&&e.set("categoryNames",t.categoryNames),t.dataTipFunction&&e.set("dataTipFunction",t.dataTipFunction),t.legendLabelFunction&&e.set("legendLabelFunction",t.legendLabelFunction),t.series&&e.set("series",t.series)},refreshData:function(){var e=this;if(e._initialized){var t=e.get("dataSource");if(t){var n=e._pollingID;n!==null&&(t.clearInterval(n),e._pollingID=null);var r=e.get("pollingInterval"),i=e.get("request");r>0&&(e._pollingID=t.setInterval(r,i)),t.sendRequest(i)}}},_loadDataHandler:function(t){var n=this;if(n._swf&&!t.error){var r=n._seriesFunctions;if(r){for(var i=0;i<r.length;i++)u.removeProxyFunction(r[i]);n._seriesFunctions=null}n._seriesFunctions=[];var s=[],o=0,a=null,f=n.get("series");if(f!==null){o=f.length;for(var i=0;i<o;i++){a=f[i];var l={};for(var c in a)c=="style"?a.style!==null&&(l.style=e.JSON.stringify(a.style)):c=="labelFunction"?a.labelFunction!==null&&(l.labelFunction=u.getFunctionReference(a.labelFunction),n._seriesFunctions.push(l.labelFunction)):c=="dataTipFunction"?a.dataTipFunction!==null&&(l.dataTipFunction=u.getFunctionReference(a.dataTipFunction),n._seriesFunctions.push(l.dataTipFunction)):c=="legendLabelFunction"?a.legendLabelFunction!==null&&(l.legendLabelFunction=u.getFunctionReference(a.legendLabelFunction),n._seriesFunctions.push(l.legendLabelFunction)):l[c]=a[c];s.push(l)}}var h=n.get("type"),p=t.response.results;if(o>0)for(var i=0;i<o;i++)a=s[i],a.type||(a.type=h),a.dataProvider=p;else{var d={type:h,dataProvider:p};s.push(d)}try{n._swf.setDataProvider&&n._swf.setDataProvider(s)}catch(v){n._swf.setDataProvider(s)}}},_getCategoryNames:function(){var e=this;return e._swf.getCategoryNames()},_setCategoryNames:function(e){var t=this;return t._swf.setCategoryNames(e),e},_setDataTipFunction:function(e){var t=this;return t._dataTipFunction&&u.removeProxyFunction(t._dataTipFunction),e&&(t._dataTipFunction=e=u.getFunctionReference(e)),t._swf.setDataTipFunction(e),e},_setLegendLabelFunction:function(e){var t=this;return t._legendLabelFunction&&u.removeProxyFunction(t._legendLabelFunction),e&&(t._legendLabelFunction=e=u.getFunctionReference(e)),t._swf.setLegendLabelFunction(e),e},_getAltText:function(){var e=this;return e._swf.getAltText()},_setAltText:function(){var e=this;return e._swf.setAltText(value),value},_pollingID:null}});e.Chart=u;var n=e.Lang,r=e.getClassName,t="piechart",a=e.Component.create({NAME:t,ATTRS:{dataField:{getter:"_getDataField",setter:"_setDataField",validator:n.isString},categoryField:{getter:"_getCategoryField",setter:"_setCategoryField",validator:n.isString}},EXTENDS:e.Chart,prototype:{_syncChartAttrs:function(){var e=this;a.superclass._syncChartAttrs.apply(e,arguments);var t=e._originalConfig;t.dataField&&e.set("dataField",t.dataField),t.categoryField&&
e.set("categoryField",t.categoryField)},_getDataField:function(){var e=this;return e._swf.getDataField()},_setDataField:function(e){var t=this;return t._swf.setDataField(e),e},_getCategoryField:function(){var e=this;return e._swf.getCategoryField()},_setCategoryField:function(e){var t=this;return t._swf.setCategoryField(e),e}}});e.PieChart=a;var n=e.Lang,r=e.getClassName,t="cartesianchart",f=r(t),l=e.Component.create({NAME:t,ATTRS:{xField:{getter:"_getXField",setter:"_setXField",validator:n.isString},yField:{getter:"_getYField",setter:"_setYField",validator:n.isString},xAxis:{setter:"_setXAxis"},xAxes:{setter:"_setXAxes"},yAxis:{setter:"_setYAxis"},yAxes:{setter:"_setYAxes"},constrain2view:{setter:"_setConstrain2view"}},EXTENDS:e.Chart,prototype:{initializer:function(){var e=this;e._xAxisLabelFunctions=[],e._yAxisLabelFunctions=[]},destructor:function(){var e=this;e._removeAxisFunctions(e._xAxisLabelFunctions),e._removeAxisFunctions(e._yAxisLabelFunctions)},_syncChartAttrs:function(){var e=this;l.superclass._syncChartAttrs.apply(e,arguments);var t=e._originalConfig;t.xField&&e.set("xField",t.xField),t.yField&&e.set("yField",t.yField),t.xAxis&&e.set("xAxis",t.xAxis),t.yAxis&&e.set("yAxis",t.yAxis),t.xAxes&&e.set("xAxes",t.xAxes),t.yAxes&&e.set("yAxes",t.yAxes),t.constrain2view&&e.set("constrain2view",t.constrain2view)},_getXField:function(){var e=this;return e._swf.getHorizontalField()},_setXField:function(e){var t=this;return t._swf.setHorizontalField(e),e},_getYField:function(){var e=this;return e._swf.getVerticalField()},_setYField:function(e){var t=this;return t._swf.setVerticalField(e),e},_getClonedAxis:function(e){var t=this,n={};for(var r in e)r=="labelFunction"?e.labelFunction&&e.labelFunction!==null&&(n.labelFunction=u.getFunctionReference(e.labelFunction)):n[r]=e[r];return n},_setXAxis:function(e){var t=this;return e.position!="bottom"&&e.position!="top"&&(e.position="bottom"),t._removeAxisFunctions(t._xAxisLabelFunctions),e=t._getClonedAxis(e),t._xAxisLabelFunctions.push(e.labelFunction),t._swf.setHorizontalAxis(e),e},_setXAxes:function(e){var t=this;t._removeAxisFunctions(t._xAxisLabelFunctions);for(var n=0;n<e.length;n++){var r=e[n];r.position=="left"&&(r.position="bottom"),e[n]=t._getClonedAxis(r),r=e[n],r.labelFunction&&t._xAxisLabelFunctions.push(r.labelFunction),t._swf.setHorizontalAxis(r)}},_setYAxis:function(e){var t=this;t._removeAxisFunctions(t._yAxisLabelFunctions),e=t._getClonedAxis(e),t._yAxisLabelFunctions.push(e.labelFunction),t._swf.setVerticalAxis(e)},_setYAxes:function(e){var t=this;t._removeAxisFunctions(t._yAxisLabelFunctions);for(var n=0;n<e.length;n++){e[n]=t._getClonedAxis(e[n]);var r=e[n];r.labelFunction&&t._yAxisLabelFunctions.push(r.labelFunction),t._swf.setVerticalAxis(r)}},_setConstrain2view:function(e){var t=this;t._swf.setConstrainViewport(e)},setSeriesStylesByIndex:function(t,n){var r=this;r._swf&&r._swf.setSeriesStylesByIndex&&(n=e.JSON.stringify(n),r._swf.setSeriesStylesByIndex(t,n))},_removeAxisFunctions:function(t){var n=this;if(t&&t.length){for(var r=0;r<t.length;r++){var i=t[r];i&&e.Chart.removeProxyFunction(i)}t=[]}}}});e.CartesianChart=l;var n=e.Lang,r=e.getClassName,t="linechart",c=r(t),h=e.Component.create({NAME:t,ATTRS:{type:{value:"line"}},EXTENDS:e.CartesianChart});e.LineChart=h;var n=e.Lang,r=e.getClassName,t="columnchart",p=r(t),d=e.Component.create({NAME:t,ATTRS:{type:{value:"column"}},EXTENDS:e.CartesianChart});e.ColumnChart=d;var n=e.Lang,r=e.getClassName,t="barchart",v=r(t),m=e.Component.create({NAME:t,ATTRS:{type:{value:"bar"}},EXTENDS:e.CartesianChart});e.BarChart=m;var n=e.Lang,r=e.getClassName,t="stackedcolumnchart",g=r(t),y=e.Component.create({NAME:t,ATTRS:{type:{value:"stackcolumn"}},EXTENDS:e.CartesianChart});e.StackedColumnChart=y;var n=e.Lang,r=e.getClassName,t="stackedbarchart",b=r(t),w=e.Component.create({NAME:t,ATTRS:{type:{value:"stackbar"}},EXTENDS:e.CartesianChart});e.StackedBarChart=w;var E=function(){};E.prototype={type:null,reverse:!1,labelFunction:null,labelSpacing:2,title:null},e.Chart.Axis=E;var S=function(){S.superclass.constructor.apply(this,arguments)};e.extend(S,E,{type:"numeric",minimum:NaN,maximum:NaN,majorUnit:NaN,minorUnit:NaN,snapToUnits:!0,stackingEnabled:!1,alwaysShowZero:!0,scale:"linear",roundMajorUnit:!0,calculateByLabelSize:!0,position:"left",adjustMaximumByMajorUnit:!0,adjustMinimumByMajorUnit:!0}),e.Chart.NumericAxis=S;var x=function(){x.superclass.constructor.apply(this,arguments)};e.extend(x,E,{type:"time",minimum:null,maximum:null,majorUnit:NaN,majorTimeUnit:null,minorUnit:NaN,minorTimeUnit:null,snapToUnits:!0,stackingEnabled:!1,calculateByLabelSize:!0}),e.Chart.TimeAxis=x;var T=function(){T.superclass.constructor.apply(this,arguments)};e.extend(T,E,{type:"category",categoryNames:null,calculateCategoryCount:!1}),e.Chart.CategoryAxis=T;var N=function(){};N.prototype={type:null,displayName:null},e.Chart.Series=N;var C=function(){C.superclass.constructor.apply(this,arguments)};e.extend(C,N,{xField:null,yField:null,axis:"primary",showInLegend:!0}),e.Chart.CartesianSeries=C;var k=function(){k.superclass.constructor.apply(this,arguments)};e.extend(k,C,{type:"column"}),e.Chart.ColumnSeries=k;var L=function(){L.superclass.constructor.apply(this,arguments)};e.extend(L,C,{type:"line"}),e.Chart.LineSeries=L;var A=function(){A.superclass.constructor.apply(this,arguments)};e.extend(A,C,{type:"bar"}),e.Chart.BarSeries=A;var O=function(){O.superclass.constructor.apply(this,arguments)};e.extend(O,N,{type:"pie",dataField:null,categoryField:null,labelFunction:null}),e.Chart.PieSeries=O;var M=function(){M.superclass.constructor.apply(this,arguments)};e.extend(M,C,{type:"stackbar"}),e.Chart.StackedBarSeries=M;var _=function(){_.superclass.constructor.apply(this,arguments)};e.extend(_,C,{type:"stackcolumn"}),e.Chart.StackedColumnSeries=_},"3.0.3-deprecated.78",{requires:["datasource","json","aui-swf-deprecated"]});
