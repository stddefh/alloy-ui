if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-arraysort/aui-arraysort.js']) {
   __coverage__['build/aui-arraysort/aui-arraysort.js'] = {"path":"build/aui-arraysort/aui-arraysort.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":44}}},"2":{"name":"(anonymous_2)","line":30,"loc":{"start":{"line":30,"column":33},"end":{"line":30,"column":65}}},"3":{"name":"(anonymous_3)","line":60,"loc":{"start":{"line":60,"column":20},"end":{"line":60,"column":47}}},"4":{"name":"(anonymous_4)","line":71,"loc":{"start":{"line":71,"column":16},"end":{"line":71,"column":31}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":86,"column":55}},"2":{"start":{"line":9,"column":0},"end":{"line":9,"column":24}},"3":{"start":{"line":18,"column":0},"end":{"line":83,"column":2}},"4":{"start":{"line":31,"column":12},"end":{"line":31,"column":21}},"5":{"start":{"line":33,"column":12},"end":{"line":33,"column":51}},"6":{"start":{"line":35,"column":12},"end":{"line":46,"column":13}},"7":{"start":{"line":36,"column":16},"end":{"line":36,"column":25}},"8":{"start":{"line":38,"column":17},"end":{"line":46,"column":13}},"9":{"start":{"line":39,"column":16},"end":{"line":39,"column":25}},"10":{"start":{"line":41,"column":17},"end":{"line":46,"column":13}},"11":{"start":{"line":42,"column":16},"end":{"line":42,"column":26}},"12":{"start":{"line":45,"column":16},"end":{"line":45,"column":56}},"13":{"start":{"line":48,"column":12},"end":{"line":48,"column":24}},"14":{"start":{"line":61,"column":12},"end":{"line":61,"column":38}},"15":{"start":{"line":63,"column":12},"end":{"line":68,"column":13}},"16":{"start":{"line":64,"column":16},"end":{"line":67,"column":18}},"17":{"start":{"line":70,"column":12},"end":{"line":76,"column":14}},"18":{"start":{"line":72,"column":20},"end":{"line":72,"column":73}},"19":{"start":{"line":74,"column":20},"end":{"line":74,"column":73}},"20":{"start":{"line":78,"column":12},"end":{"line":80,"column":13}},"21":{"start":{"line":79,"column":16},"end":{"line":79,"column":42}}},"branchMap":{"1":{"line":33,"type":"binary-expr","locations":[{"start":{"line":33,"column":24},"end":{"line":33,"column":33}},{"start":{"line":33,"column":37},"end":{"line":33,"column":50}}]},"2":{"line":35,"type":"if","locations":[{"start":{"line":35,"column":12},"end":{"line":35,"column":12}},{"start":{"line":35,"column":12},"end":{"line":35,"column":12}}]},"3":{"line":35,"type":"binary-expr","locations":[{"start":{"line":35,"column":17},"end":{"line":35,"column":25}},{"start":{"line":35,"column":31},"end":{"line":35,"column":39}}]},"4":{"line":38,"type":"if","locations":[{"start":{"line":38,"column":17},"end":{"line":38,"column":17}},{"start":{"line":38,"column":17},"end":{"line":38,"column":17}}]},"5":{"line":41,"type":"if","locations":[{"start":{"line":41,"column":17},"end":{"line":41,"column":17}},{"start":{"line":41,"column":17},"end":{"line":41,"column":17}}]},"6":{"line":74,"type":"cond-expr","locations":[{"start":{"line":74,"column":45},"end":{"line":74,"column":62}},{"start":{"line":74,"column":66},"end":{"line":74,"column":72}}]}},"code":["(function () { YUI.add('aui-arraysort', function (A, NAME) {","","/**"," * The A.ArraySort Utility - A set of utility methods to the ArraySort."," *"," * @module aui-arraysort"," */","","var ASort = A.ArraySort;","","/**"," * Augment the [YUI3 ArraySort](ArraySort.html) with more util methods."," *"," * @class A.ArraySort"," * @uses ArraySort"," * @constructor"," */","A.mix(","    ASort, {","        /**","         * Compare two arrays ignoring white spaces.","         *","         * @method compareIgnoreWhiteSpace","         * @param a","         * @param b","         * @param desc","         * @param compareFn","         * @return sort","         */","        compareIgnoreWhiteSpace: function(a, b, desc, compareFn) {","            var sort;","","            compareFn = compareFn || ASort.compare;","","            if ((a === '') && (b === '')) {","                sort = 0;","            }","            else if (a === '') {","                sort = 1;","            }","            else if (b === '') {","                sort = -1;","            }","            else {","                sort = compareFn.apply(this, arguments);","            }","","            return sort;","        },","","        /**","         * Sorts an object array keeping the order of equal items. ECMA script","         * standard does not specify the behaviour when the compare function","         * returns the value 0;","         *","         * @method stableSort","         * @param array","         * @param compareFn","         */","        stableSort: function(array, compareFn) {","            var i, len = array.length;","","            for (i = 0; i < len; i++) {","                array[i] = {","                    index: i,","                    value: array[i]","                };","            }","","            array.sort(","                function(a, b) {","                    var result = compareFn.call(array, a.value, b.value);","","                    return (result === 0) ? (a.index - b.index) : result;","                }","            );","","            for (i = 0; i < len; i++) {","                array[i] = array[i].value;","            }","        }","    }",");","","","}, '3.1.0-deprecated.50', {\"requires\": [\"arraysort\"]});","","}());"]};
}
var __cov_RTd2CPYkXVBWnYHD4c1hEQ = __coverage__['build/aui-arraysort/aui-arraysort.js'];
__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['1']++;YUI.add('aui-arraysort',function(A,NAME){__cov_RTd2CPYkXVBWnYHD4c1hEQ.f['1']++;__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['2']++;var ASort=A.ArraySort;__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['3']++;A.mix(ASort,{compareIgnoreWhiteSpace:function(a,b,desc,compareFn){__cov_RTd2CPYkXVBWnYHD4c1hEQ.f['2']++;__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['4']++;var sort;__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['5']++;compareFn=(__cov_RTd2CPYkXVBWnYHD4c1hEQ.b['1'][0]++,compareFn)||(__cov_RTd2CPYkXVBWnYHD4c1hEQ.b['1'][1]++,ASort.compare);__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['6']++;if((__cov_RTd2CPYkXVBWnYHD4c1hEQ.b['3'][0]++,a==='')&&(__cov_RTd2CPYkXVBWnYHD4c1hEQ.b['3'][1]++,b==='')){__cov_RTd2CPYkXVBWnYHD4c1hEQ.b['2'][0]++;__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['7']++;sort=0;}else{__cov_RTd2CPYkXVBWnYHD4c1hEQ.b['2'][1]++;__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['8']++;if(a===''){__cov_RTd2CPYkXVBWnYHD4c1hEQ.b['4'][0]++;__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['9']++;sort=1;}else{__cov_RTd2CPYkXVBWnYHD4c1hEQ.b['4'][1]++;__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['10']++;if(b===''){__cov_RTd2CPYkXVBWnYHD4c1hEQ.b['5'][0]++;__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['11']++;sort=-1;}else{__cov_RTd2CPYkXVBWnYHD4c1hEQ.b['5'][1]++;__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['12']++;sort=compareFn.apply(this,arguments);}}}__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['13']++;return sort;},stableSort:function(array,compareFn){__cov_RTd2CPYkXVBWnYHD4c1hEQ.f['3']++;__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['14']++;var i,len=array.length;__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['15']++;for(i=0;i<len;i++){__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['16']++;array[i]={index:i,value:array[i]};}__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['17']++;array.sort(function(a,b){__cov_RTd2CPYkXVBWnYHD4c1hEQ.f['4']++;__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['18']++;var result=compareFn.call(array,a.value,b.value);__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['19']++;return result===0?(__cov_RTd2CPYkXVBWnYHD4c1hEQ.b['6'][0]++,a.index-b.index):(__cov_RTd2CPYkXVBWnYHD4c1hEQ.b['6'][1]++,result);});__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['20']++;for(i=0;i<len;i++){__cov_RTd2CPYkXVBWnYHD4c1hEQ.s['21']++;array[i]=array[i].value;}}});},'3.1.0-deprecated.50',{'requires':['arraysort']});
