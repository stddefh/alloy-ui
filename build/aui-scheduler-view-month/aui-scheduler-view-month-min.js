YUI.add("aui-scheduler-view-month",function(e,t){var n=e.Lang,r=n.isFunction,i=e.DataType.DateMath,s=e.getClassName,o=s("scheduler-view-month","table","data","col","nomonth"),u=s("scheduler-view","table","data","col","title"),a=e.Component.create({NAME:"scheduler-view-month",ATTRS:{displayDaysInterval:{readOnly:!0,value:42},name:{value:"month"},navigationDateFormatter:{value:function(t){var n=this,r=n.get("scheduler");return e.DataType.Date.format(t,{format:"%B %Y",locale:r.get("locale")})},validator:r}},EXTENDS:e.SchedulerTableView,prototype:{getAdjustedViewDate:function(e){return i.toMidnight(i.findMonthStart(e))},getNextDate:function(){var e=this,t=e.get("scheduler"),n=t.get("viewDate");return i.toLastHour(i.add(n,i.MONTH,1))},getPrevDate:function(){var e=this,t=e.get("scheduler"),n=t.get("viewDate");return i.toMidnight(i.subtract(n,i.MONTH,1))},plotEvents:function(){var t=this;e.SchedulerMonthView.superclass.plotEvents.apply(t,arguments);var n=t.get("scheduler"),r=n.get("viewDate"),s=i.findMonthEnd(r),a=i.findMonthStart(r),f=t._findCurrentIntervalStart(),l=t.tableRowContainer.all("."+u);l.each(function(e,t){var n=i.add(f,i.DAY,t);(i.before(n,a)||i.after(n,s))&&e.addClass(o)})},_findCurrentIntervalStart:function(){var e=this,t=e.get("scheduler"),n=t.get("viewDate");return e._findFirstDayOfWeek(n)},_findFirstDayOfWeek:function(e){var t=this,n=t.get("scheduler"),r=n.get("firstDayOfWeek");return i.getFirstDayOfWeek(e,r)}}});e.SchedulerMonthView=a},"3.0.3-deprecated.58",{requires:["aui-scheduler-view-table"],skinnable:!0});
