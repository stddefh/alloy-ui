YUI.add("aui-io-request",function(e,t){var n=e.Lang,r=n.isBoolean,i=n.isFunction,s=n.isString,o=e.namespace("config.io"),u=function(e){return function(){return o[e]}},a={all:"*/*",html:"text/html",json:"application/json, text/javascript",text:"text/plain",xml:"application/xml, text/xml"},f=e.Component.create({NAME:"IORequest",ATTRS:{autoLoad:{value:!0,validator:r},cache:{value:!0,validator:r},dataType:{setter:function(e){return(e||"").toLowerCase()},value:null,validator:s},responseData:{setter:function(e){return this._setResponseData(e)},value:null},uri:{setter:function(e){return this._parseURL(e)},value:null,validator:s},active:{value:!1,validator:r},cfg:{getter:function(){var t=this;return{arguments:t.get("arguments"),context:t.get("context"),data:t.getFormattedData(),form:t.get("form"),headers:t.get("headers"),method:t.get("method"),on:{complete:e.bind(t.fire,t,"complete"),end:e.bind(t._end,t),failure:e.bind(t.fire,t,"failure"),start:e.bind(t.fire,t,"start"),success:e.bind(t._success,t)},sync:t.get("sync"),timeout:t.get("timeout"),xdr:t.get("xdr")}},readOnly:!0},transaction:{value:null},arguments:{valueFn:u("arguments")},context:{valueFn:u("context")},data:{valueFn:u("data")},form:{valueFn:u("form")},headers:{getter:function(t){var n=[],r=this,i=r.get("dataType");return i&&n.push(a[i]),n.push(a.all),e.merge(t,{Accept:n.join(", ")})},valueFn:u("headers")},method:{setter:function(e){return e.toLowerCase()},valueFn:u("method")},selector:{value:null},sync:{valueFn:u("sync")},timeout:{valueFn:u("timeout")},xdr:{valueFn:u("xdr")}},EXTENDS:e.Plugin.Base,prototype:{init:function(){var e=this;f.superclass.init.apply(this,arguments),e._autoStart()},destructor:function(){var e=this;e.stop(),e.set("transaction",null)},getFormattedData:function(){var e=this,t=e.get("data"),n=o.dataFormatter;return i(n)&&(t=n.call(e,t)),t},start:function(){var t=this;t.destructor(),t.set("active",!0);var n=t._yuiIOObj;n||(n=new e.IO,t._yuiIOObj=n);var r=n.send(t.get("uri"),t.get("cfg"));t.set("transaction",r)},stop:function(){var e=this,t=e.get("transaction");t&&t.abort()},_autoStart:function(){var e=this;e.get("autoLoad")&&e.start()},_parseURL:function(e){var t=this,n=t.get("cache"),r=t.get("method");if(n===!1&&r==="get"){var s=+(new Date),u=e.replace(/(\?|&)_=.*?(&|$)/,"$1_="+s+"$2");e=u+(u===e?(e.match(/\?/)?"&":"?")+"_="+s:"")}var a=o.uriFormatter;return i(a)&&(e=a.apply(t,[e])),e},_end:function(e,t){var n=this;n.set("active",!1),n.set("transaction",null),n.fire("end",e,t)},_success:function(e,t,n){var r=this;r.set("responseData",t),r.fire("success",e,t,n)},_setResponseData:function(t){var n=null,r=this;if(t){var i=r.get("dataType"),s=t.getResponseHeader("content-type")||"";if(i==="xml"||!i&&s.indexOf("xml")>=0){n=t.responseXML;if(n.documentElement.tagName==="parsererror")throw"Parser error: IO dataType is not correctly parsing"}else n=t.responseText;n===""&&(n=null);if(i==="json")try{n=e.JSON.parse(n)}catch(o){}else{var u=r.get("selector");if(n&&u){var a;n.documentElement?a=e.one(n):a=e.Node.create(n),n=a.all(u)}}}return n}}});e.IORequest=f,e.io.request=function(t,n){return new e.IORequest(e.merge(n,{uri:t}))}},"3.0.3-deprecated.89",{requires:["io-base","json","plugin","querystring-stringify","aui-component"]});
