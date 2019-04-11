if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-form-builder-field-text/aui-form-builder-field-text.js']) {
   __coverage__['build/aui-form-builder-field-text/aui-form-builder-field-text.js'] = {"path":"build/aui-form-builder-field-text/aui-form-builder-field-text.js","s":{"1":0,"2":0,"3":0,"4":0},"b":{},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":58}}},"2":{"name":"(anonymous_2)","line":28,"loc":{"start":{"line":28,"column":19},"end":{"line":28,"column":30}}},"3":{"name":"(anonymous_3)","line":54,"loc":{"start":{"line":54,"column":27},"end":{"line":54,"column":38}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":81,"column":3}},"2":{"start":{"line":20,"column":0},"end":{"line":71,"column":3}},"3":{"start":{"line":29,"column":8},"end":{"line":44,"column":10}},"4":{"start":{"line":55,"column":8},"end":{"line":69,"column":10}}},"branchMap":{},"code":["(function () { YUI.add('aui-form-builder-field-text', function (A, NAME) {","","/**"," * The Form Builder Field Text Component"," *"," * @module aui-form-builder"," * @submodule aui-form-builder-field-text"," */","","/**"," * A base class for Form Builder Field Text."," *"," * @class A.FormBuilderFieldText"," * @extends A.FormFieldText"," * @uses A.FormBuilderFieldBase"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","A.FormBuilderFieldText = A.Base.create('form-builder-field-text', A.FormFieldText, [A.FormBuilderFieldBase], {","    /**","     * Fills the settings array with the information for this field.","     *","     * @method _fillSettings","     * @override","     * @protected","     */","    _fillSettings: function() {","        this._settings.push(","            {","                attrName: 'required',","                editor: new A.BooleanDataEditor({","                    label: 'Required question'","                })","            },","            {","                attrName: 'type',","                editor: new A.RadioGroupDataEditor({","                    inlineElements: true,","                    radioLabels: ['Singleline', 'Multiline'],","                    label: 'My text field type is:'","                })","            }","        );","    },","","    /**","     * Fills the advanced settings array with the information for this field.","     *","     * @method _fillAdvancedSettings","     * @override","     * @protected","     */","    _fillAdvancedSettings: function() {","        this._advancedSettings.push(","            {","                attrName: 'name',","                footerLabel: 'Name',","                editor: new A.TextDataEditor({","                    label: 'Name'","                })","            },","            {","            attrName: 'placeholder',","            editor: new A.TextDataEditor({","                label: 'Placeholder'","            })","        }","        );","    }","});","","","}, '3.0.3-deprecated.89', {","    \"requires\": [","        \"aui-boolean-data-editor\",","        \"aui-radio-group-data-editor\",","        \"aui-form-builder-field-base\",","        \"aui-form-field-text\"","    ]","});","","}());"]};
}
var __cov_fcWZ56HCDcxoHvc1WgFKEw = __coverage__['build/aui-form-builder-field-text/aui-form-builder-field-text.js'];
__cov_fcWZ56HCDcxoHvc1WgFKEw.s['1']++;YUI.add('aui-form-builder-field-text',function(A,NAME){__cov_fcWZ56HCDcxoHvc1WgFKEw.f['1']++;__cov_fcWZ56HCDcxoHvc1WgFKEw.s['2']++;A.FormBuilderFieldText=A.Base.create('form-builder-field-text',A.FormFieldText,[A.FormBuilderFieldBase],{_fillSettings:function(){__cov_fcWZ56HCDcxoHvc1WgFKEw.f['2']++;__cov_fcWZ56HCDcxoHvc1WgFKEw.s['3']++;this._settings.push({attrName:'required',editor:new A.BooleanDataEditor({label:'Required question'})},{attrName:'type',editor:new A.RadioGroupDataEditor({inlineElements:true,radioLabels:['Singleline','Multiline'],label:'My text field type is:'})});},_fillAdvancedSettings:function(){__cov_fcWZ56HCDcxoHvc1WgFKEw.f['3']++;__cov_fcWZ56HCDcxoHvc1WgFKEw.s['4']++;this._advancedSettings.push({attrName:'name',footerLabel:'Name',editor:new A.TextDataEditor({label:'Name'})},{attrName:'placeholder',editor:new A.TextDataEditor({label:'Placeholder'})});}});},'3.0.3-deprecated.89',{'requires':['aui-boolean-data-editor','aui-radio-group-data-editor','aui-form-builder-field-base','aui-form-field-text']});
