YUI.add("aui-scheduler-view-table",function(e,t){var n=e.Lang,r=n.isFunction,i=e.DataType.DateMath,s=e.WidgetStdMod,o=i.WEEK_LENGTH,u=function(e,t){return function(n){var r=n.all(e);return r.size()>=t?r:null}},a=e.getClassName,f=a("icon"),l=a("icon","arrowstop-1-l"),c=a("icon","arrowstop-1-r"),h=a("scheduler-view","table","colgrid"),p=a("scheduler-view","table","colgrid","first"),d=a("scheduler-view","table","colgrid","today"),v=a("scheduler-view","table","container"),m=a("scheduler-view","table","events","overlay","node"),g=a("scheduler-view","table","events","overlay","node","body"),y=a("scheduler-view","table","events","overlay","node","close"),b=a("scheduler-view","table","header","col"),w=a("scheduler-view","table","header","day"),E=a("scheduler-view","table","header","table"),S=a("scheduler-view","table","more"),x=a("scheduler-view","table","row"),T=a("scheduler-view","table","row","container"),N=a("scheduler-view","table","data"),C=a("scheduler-view","table","data","col"),k=a("scheduler-view","table","data","col","title"),L=a("scheduler-view","table","data","col","title","down"),A=a("scheduler-view","table","data","col","title","first"),O=a("scheduler-view","table","data","col","title","next"),M=a("scheduler-view","table","data","col","title","today"),_=a("scheduler-view","table","data","event"),D=a("scheduler-view","table","data","event","left"),P=a("scheduler-view","table","data","event","right"),H=a("scheduler-view","table","data","first"),B=a("scheduler-view","table","grid"),j=a("scheduler-view","table","grid","container"),F=a("scheduler-view","table","grid","first"),I='<div class="'+v+'">'+'<div class="'+T+'"></div>'+"</div>",q='<div class="'+m+'">'+'<div class="'+g+'"></div>'+'<a href="javascript:;" class="'+y+'">{label}</a>'+"</div>",R='<td class="'+h+'">&nbsp;</td>',U='<th class="'+w+'"><div>&nbsp;</div></th>',z='<table cellspacing="0" cellpadding="0" class="'+E+'">'+"<tbody>"+'<tr class="'+b+'"></tr>'+"</tbody>"+"</table>",W='<a href="javascript:;" class="'+S+'">{showMoreLabel}</a>',X='<div class="'+x+'"></div>',V='<table cellspacing="0" cellpadding="0" class="'+N+'">'+"<tbody></tbody>"+"</table>",$='<div class="'+j+'">'+'<table cellspacing="0" cellpadding="0" class="'+B+'">'+"<tbody>"+"<tr></tr>"+"</tbody>"+"</table></div>",J='<span class="'+[f,l].join(" ")+'"></span>',K='<span class="'+[f,c].join(" ")+'"></span>',Q='<td class="'+C+'"><div></div></td>',G="<tr></tr>",Y=e.Component.create({NAME:"scheduler-view-table",ATTRS:{bodyContent:{value:""},displayDaysInterval:{value:42},displayRows:{value:3},eventsOverlayConstrain:{value:!0,writeOnce:!0},fixedHeight:{value:!0},name:{value:"table"},headerDateFormatter:{value:function(t){var n=this,r=n.get("scheduler");return e.DataType.Date.format(t,{format:"%a",locale:r.get("locale")})},validator:r},navigationDateFormatter:{value:function(t){var n=this,r=n.get("scheduler");return e.DataType.Date.format(t,{format:"%b %Y",locale:r.get("locale")})},validator:r},scrollable:{value:!1},strings:{value:{close:"Close",showMore:"Show {0} more"}},headerTableNode:{valueFn:function(){return e.Node.create(z)}},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},rowsContainerNode:{valueFn:function(){return e.Node.create(I)}},tableGridNode:{valueFn:"_valueTableGridNode"}},HTML_PARSER:{colHeaderDaysNode:u("."+w,7),headerTableNode:"."+E,rowsContainerNode:"."+v,tableGridNode:u("."+B,7)},EXTENDS:e.SchedulerView,prototype:{evtDateStack:null,evtRenderedStack:null,rowDataTableStack:null,initializer:function(){var t=this;t.evtDateStack={},t.evtRenderedStack={},t.rowDataTableStack={},t.colHeaderDaysNode=t.get("colHeaderDaysNode"),t.headerTableNode=t.get("headerTableNode"),t.rowsContainerNode=t.get("rowsContainerNode"),t.tableGridNode=t.get("tableGridNode"),t.columnDayHeader=t.headerTableNode.one("."+b),t.columnTableGrid=e.NodeList.create(),t.tableRowContainer=t.rowsContainerNode.one("."+T),t.tableRows=e.NodeList.create()},bindUI:function(){var t=this;t.rowsContainerNode.delegate("click",e.bind(t._onClickMore,t),"."+S)},renderUI:function(){var e=this,t=e._getDisplayRowsCount(),n;for(n=0;n<t;n++)e.tableRows.push(e.buildGridRowNode(n));e._renderEventsOverlay(),e.colHeaderDaysNode.appendTo(e.columnDayHeader),e.tableRows.appendTo(e.tableRowContainer)},buildEventsRow:function(t,r,i){var s=this,o=s.get("displayRows"),u=0,a=e.Node.create(G),f=!1;return s.loopDates(t,r,function(l,c){var h=s._getEvtRenderedStackKey(l),p=s.evtRenderedStack[h];p||(s.evtRenderedStack[h]=[],p=s.evtRenderedStack[h]);if(u>c){p.push(null);return}var d=s.evtDateStack[h];d||(d=[]),d=e.Array.filter(d,function(e){return e.get("visible")});var v=s._getRenderableEvent(d,t,r,l),m=e.Node.create(Q),g=m.one("div");if(p.length<d.length&&o&&i===o-1){var y=s.get("strings"),b=n.sub(y.showMore,[d.length-p.length]),w=e.Node.create(n.sub(W,{showMoreLabel:b}));w.setData("events",d),g.append(w),f=!0}else if(v){var E=s._getEvtSplitInfo(v,l,t,r);m.attr("colspan",E.colspan),u+=E.colspan-1,s._syncEventNodeContainerUI(v,g,E),s._syncEventNodeUI(v,g,l),p.push(v),f=!0}u++,a.append(m)}),f?a:null},buildEventsTable:function(t,n){var r=this,s=r.get("displayRows"),o=!1,u=i.clearTime(r._findCurrentIntervalStart()),a=String(u.getTime()).concat(t.getTime()).concat(n.getTime()),f=r.rowDataTableStack[a],l=0;if(!f){f=e.Node.create(V);var c=f.one("tbody"),h=r.buildEventsTitleRow(f,t,n);c.append(h);while(!o){var p=r.buildEventsRow(t,n,l);p?(c.append(p),l++,s&&l>=s&&(o=!0)):o=!0}r.rowDataTableStack[a]=f}return f},buildEventsTitleRow:function(t,n,r){var s=this,o=s.get("scheduler").get("todayDate"),u=e.Node.create(G);return s.loopDates(n,r,function(t,n){var r=e.Node.create(Q);r.addClass(k).toggleClass(A,n===0).toggleClass(M,!i.isDayOverlap(t,o)).toggleClass(O,!i.isDayOverlap(i.subtract(t,i.DAY,1),o)).toggleClass(L,!i.isDayOverlap(i.subtract(t,i.WEEK,1),o)),u.append(r.setContent(t.getDate()))}),u},buildGridRowNode:function(t){var n=this,r=n._getTableGridNode(t),i=e.Node.create(X);return i.append(r.toggleClass(F,t===0)),i},flushViewCache
:function(){var e=this;e.evtDateStack={},e.evtRenderedStack={},e.rowDataTableStack={}},getDateInterval:function(){var e=this.getWeekDaysCount()*this._getDisplayRowsCount()-1,t=this._findCurrentIntervalStart();return{endDate:i.toLastHour(i.add(t,i.DAY,e)),startDate:i.toMidnight(t)}},getIntersectEvents:function(t){var n=this,r=n.get("scheduler"),i=n._getEvtRenderedStackKey(t);if(!n.evtDateStack[i]){var s=r.getIntersectEvents(t);n.evtDateStack[i]=e.Array.filter(s,n.get("filterFn"))}return n.evtDateStack[i]},getNextDate:function(){var e=this,t=e.get("scheduler"),n=t.get("viewDate"),r=e.get("displayDaysInterval");return i.toLastHour(i.add(n,i.DAY,r))},getPrevDate:function(){var e=this,t=e.get("scheduler"),n=t.get("viewDate"),r=e.get("displayDaysInterval");return i.toMidnight(i.subtract(n,i.DAY,r))},getWeekDaysCount:function(){var e=this.get("displayDaysInterval");return Math.min(e,o)},hideEventsOverlay:function(){var e=this;e.eventsOverlay.set("visible",!1)},loopDates:function(e,t,n,r,s){var o=this,u=i.countDays(e,t)+1,a=i.clone(e),f;for(f=0;f<u;f++)n.apply(o,[a,f]),a=i.add(a,r||i.DAY,s||1)},plotEvents:function(){var e=this,t=e._findCurrentIntervalStart(),n=i.safeClearTime(t);e.flushViewCache(),e.hideEventsOverlay(),e.bodyNode.all("."+N).remove();var r=this.getWeekDaysCount(),s=i.add(n,i.DAY,r*this.tableRows.size()-1);e._findIntersections(n,s),e.tableRows.each(function(t,s){var o=i.add(n,i.DAY,r*s),u=i.add(o,i.DAY,r-1),a=e.buildEventsTable(o,u);s===0&&a.addClass(H),t.append(a)})},syncDaysHeaderUI:function(){var e=this,t=e.get("scheduler"),n=t.get("viewDate"),r=e.get("headerDateFormatter"),s=e._findFirstDayOfWeek(n);e.colHeaderDaysNode.all("div").each(function(t,n){var o=i.add(s,i.DAY,n);t.html(r.call(e,o))})},syncGridUI:function(){var e=this,t=e.get("scheduler"),n=t.get("todayDate");e.columnTableGrid.removeClass(d);var r=e._findCurrentIntervalStart(),s=e._findCurrentIntervalEnd();if(i.between(n,r,s)){var o=t.get("firstDayOfWeek"),u=e._findFirstDayOfWeek(n),a=i.getWeekNumber(n,o)-i.getWeekNumber(r,o),f=n.getDate()-u.getDate(),l=e._getCellIndex([f,a]),c=e.columnTableGrid.item(l);c&&c.addClass(d)}},syncStdContent:function(){var e=this;e.setStdModContent(s.BODY,e.rowsContainerNode.getDOM()),e.setStdModContent(s.HEADER,e.headerTableNode.getDOM())},_addEventToAllDates:function(e,t,n){var r=this,s=t,o=e.getClearEndDate();i.after(n,o)&&(n=o);while(!i.after(s,n))this._addToEvtDateStack(r._getEvtRenderedStackKey(s),e),s=i.add(s,i.DAY,1)},_addToEvtDateStack:function(e,t){this.evtDateStack[e]||(this.evtDateStack[e]=[]),this.evtDateStack[e].push(t)},_findCurrentIntervalEnd:function(){var e=this,t=e.get("scheduler"),n=t.get("viewDate"),r=e.get("displayDaysInterval");return i.add(n,i.DAY,r)},_findCurrentIntervalStart:function(){var e=this,t=e.get("scheduler");return t.get("viewDate")},_findFirstDayOfWeek:function(e){var t=this,n=t.get("scheduler"),r=n.get("firstDayOfWeek");return i.getFirstDayOfWeek(e,r)},_findIntersections:function(e,t){var n=e,r,s=this.get("scheduler").getEvents(null,!0),o,u=this.get("filterFn"),a=0;s.sort(function(e,t){return e.isAfter(t)?1:-1});while(a<s.length){o=s[a].getClearStartDate(),r=s[a].getClearEndDate();if(i.after(n,r))a++;else if(i.before(n,o)){n=i.add(n,i.DAY,1);if(i.after(n,t))break}else(!u||u(s[a]))&&this._addEventToAllDates(s[a],n,t),a++}},_getCellIndex:function(e){return e[1]*o+e[0]},_getDisplayRowsCount:function(){var e=this,t=e.get("displayDaysInterval");return Math.ceil(t/o)},_getDisplayRowDaysCount:function(){var e=this,t=e.get("displayDaysInterval");return Math.min(t,o)},_getEvtLabel:function(e){var t=e.get("endDate"),n=e.get("startDate");return[n.getHours(),"-",t.getHours()," ",e.get("content")].join("")},_getEvtRenderedStackKey:function(e){var t=n.String.padNumber(e.getDate(),2),r=n.String.padNumber(e.getMonth(),2);return[e.getFullYear(),r,t].join("")},_getEvtSplitInfo:function(e,t,n,r){var s=e.getClearStartDate(),o=e.getClearEndDate(),u=i.countDays(r,t),a={colspan:Math.min(i.countDays(o,t),u)+1,left:i.before(s,n),right:i.after(o,r)};return a},_getRenderableEvent:function(t,n,r,s){var o=this,u=o._getEvtRenderedStackKey(s),a;o.evtRenderedStack[u]||(o.evtRenderedStack[u]=[]);for(a=0;a<t.length;a++){var f=t[a],l=f.get("startDate"),c=i.after(s,l)&&!i.isDayOverlap(s,n),h=!i.isDayOverlap(l,s),p=e.Array.indexOf(o.evtRenderedStack[u],f)>-1;if(!p&&(h||c))return f}return null},_getTableGridNode:function(t){var n=this,r=n.get("displayDaysInterval"),i=n.tableGridNode.item(t),s=i.one("tr"),u;for(u=0;u<Math.min(r,o);u++){var a=e.Node.create(R);s.append(a),u===0&&a.addClass(p),n.columnTableGrid.push(a)}return i},_onClickMore:function(t){var n=this,r=t.target,i=r.getData("events"),s=e.NodeList.create();e.Array.each(i,function(e){e.syncNodeTitleUI();var t=e.get("node").item(0).clone();t.setData("scheduler-event",e),t.setStyles({height:"auto",left:0,position:"relative",top:0,width:"auto"}),s.push(t)}),n.eventsOverlay.bodyNode.one("."+g).setContent(s),n.eventsOverlay.setAttrs({visible:!0,xy:r.getXY()})},_renderEventsOverlay:function(){var t=this,r=t.get("strings");t.eventsOverlay=new e.Overlay({align:{points:["tl","tl"]},bodyContent:n.sub(q,{label:r.close}),constrain:t.get("eventsOverlayConstrain"),render:t.get("boundingBox"),visible:!1,width:250,zIndex:450}),t.eventsOverlay.bodyNode.delegate("click",e.bind(t.hideEventsOverlay,t),"."+y)},_syncEventNodeContainerUI:function(e,t,n){t.addClass(_),n.left&&t.addClass(D).prepend(J),n.right&&t.addClass(P).append(K)},_syncEventNodeUI:function(e,t,n){var r=this,s=r.get("scheduler"),u=s.get("firstDayOfWeek"),a=e.get("node"),f=e.get("startDate"),l=i.clearTime(r._findCurrentIntervalStart()),c=i.clearTime(i.getFirstDayOfWeek(new Date(Math.max(f,l)),u)),h=Math.floor(i.countDays(n,c)/o);a.size()<=h&&e.addPaddingNode(),a.size()<=h&&(h=a.size()-1);var p=a.item(h);p.show(),p.setStyles({height:"auto",left:0,top:0,width:"auto"}),p.appendTo(t),e.syncUI()},_uiSetDate:function(){var e=this;e.syncDaysHeaderUI(),e.syncGridUI()},_valueColHeaderDaysNode:function(
){var e=this,t=e.get("displayDaysInterval"),n=Math.min(t,o);return e._valueNodeList(n,U)},_valueTableGridNode:function(){var e=this,t=e.get("displayDaysInterval"),n=Math.min(t,o);return e._valueNodeList(n,$)},_valueNodeList:function(t,n){var r=[];while(t--)r.push(n);return e.NodeList.create(r.join(""))}}});e.SchedulerTableView=Y},"3.0.3-deprecated.58",{requires:["overlay","aui-scheduler-base"],skinnable:!0});
