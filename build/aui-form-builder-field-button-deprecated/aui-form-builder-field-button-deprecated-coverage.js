if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-form-builder-field-button-deprecated/aui-form-builder-field-button-deprecated.js']) {
   __coverage__['build/aui-form-builder-field-button-deprecated/aui-form-builder-field-button-deprecated.js'] = {"path":"build/aui-form-builder-field-button-deprecated/aui-form-builder-field-button-deprecated.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":52},"end":{"line":1,"column":71}}},"2":{"name":"(anonymous_2)","line":13,"loc":{"start":{"line":13,"column":8},"end":{"line":13,"column":22}}},"3":{"name":"(anonymous_3)","line":82,"loc":{"start":{"line":82,"column":23},"end":{"line":82,"column":37}}},"4":{"name":"(anonymous_4)","line":114,"loc":{"start":{"line":114,"column":21},"end":{"line":114,"column":32}}},"5":{"name":"(anonymous_5)","line":156,"loc":{"start":{"line":156,"column":17},"end":{"line":156,"column":28}}},"6":{"name":"(anonymous_6)","line":177,"loc":{"start":{"line":177,"column":26},"end":{"line":177,"column":37}}},"7":{"name":"(anonymous_7)","line":205,"loc":{"start":{"line":205,"column":26},"end":{"line":205,"column":40}}},"8":{"name":"(anonymous_8)","line":219,"loc":{"start":{"line":219,"column":31},"end":{"line":219,"column":45}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":234,"column":79}},"2":{"start":{"line":10,"column":0},"end":{"line":30,"column":49}},"3":{"start":{"line":14,"column":12},"end":{"line":14,"column":72}},"4":{"start":{"line":41,"column":0},"end":{"line":228,"column":3}},"5":{"start":{"line":83,"column":16},"end":{"line":83,"column":77}},"6":{"start":{"line":115,"column":16},"end":{"line":115,"column":34}},"7":{"start":{"line":157,"column":12},"end":{"line":157,"column":32}},"8":{"start":{"line":159,"column":12},"end":{"line":167,"column":14}},"9":{"start":{"line":178,"column":12},"end":{"line":179,"column":48}},"10":{"start":{"line":181,"column":12},"end":{"line":181,"column":104}},"11":{"start":{"line":183,"column":12},"end":{"line":193,"column":15}},"12":{"start":{"line":195,"column":12},"end":{"line":195,"column":25}},"13":{"start":{"line":206,"column":12},"end":{"line":207,"column":60}},"14":{"start":{"line":209,"column":12},"end":{"line":209,"column":51}},"15":{"start":{"line":220,"column":12},"end":{"line":221,"column":60}},"16":{"start":{"line":223,"column":12},"end":{"line":223,"column":55}},"17":{"start":{"line":230,"column":0},"end":{"line":230,"column":50}},"18":{"start":{"line":231,"column":0},"end":{"line":231,"column":59}}},"branchMap":{},"code":["(function () { YUI.add('aui-form-builder-field-button-deprecated', function (A, NAME) {","","/**"," * The Form Builder Component"," *"," * @module aui-form-builder"," * @submodule aui-form-builder-field-button"," */","","var L = A.Lang,","","    toInitialCap = A.cached(","        function(str) {","            return str.substring(0, 1).toUpperCase() + str.substring(1);","        }","    ),","","    AEscape = A.Escape,","","    getCN = A.getClassName,","","    CSS_BTN = getCN('btn'),","    CSS_BTN_DEFAULT = getCN('btn', 'default'),","    CSS_FORM_BUILDER_FIELD = getCN('form-builder-field'),","    CSS_FORM_BUILDER_FIELD_NODE = getCN('form-builder-field', 'node'),","","    TPL_BUTTON = '<button id=\"{id}\" class=\"' + [CSS_FORM_BUILDER_FIELD_NODE, CSS_BTN,","        CSS_BTN_DEFAULT].join(' ') + '\" type=\"{type}\">{value}</button>',","","    BUTTON_TYPES = ['submit', 'reset', 'button'];","","/**"," * A base class for `A.FormBuilderButtonField`."," *"," * @class A.FormBuilderButtonField"," * @extends A.FormBuilderField"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","var FormBuilderButtonField = A.Component.create({","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type String","     * @static","     */","    NAME: 'form-builder-button-field',","","    /**","     * Static property used to define the default attribute","     * configuration for the `A.FormBuilderButtonField`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","","        /**","         * If `true` children are accepted.","         *","         * @attribute acceptChildren","         * @default false","         * @type Boolean","         * @readOnly","         */","        acceptChildren: {","            readOnly: true,","            value: false","        },","","        /**","         * Defines the button type attribute, e.g. `type=\"reset\"`.","         *","         * @attribute buttonType","         * @default 'submit'","         */","        buttonType: {","            validator: function(val) {","                return A.Array(BUTTON_TYPES).indexOf(val.toLowerCase()) > -1;","            },","            value: 'submit'","        },","","        /**","         * Specifies a predefined value for the button field.","         *","         * @attribute predefinedValue","         */","        predefinedValue: {","            value: toInitialCap('submit')","        },","","        /**","         * If `true` the label is showed.","         *","         * @attribute showLabel","         * @default false","         * @type Boolean","         */","        showLabel: {","            value: false","        },","","        /**","         * Reusable block of markup used to generate the field.","         *","         * @attribute template","         */","        template: {","            valueFn: function() {","                return TPL_BUTTON;","            }","        }","","    },","","    /**","     * Static property used to define the UI attributes.","     *","     * @property UI_ATTRS","     * @type Array","     * @static","     */","    UI_ATTRS: A.FormBuilderField.UI_ATTRS.concat(['buttonType']),","","    /**","     * Static property provides a string to identify the CSS prefix.","     *","     * @property CSS_PREFIX","     * @type String","     * @static","     */","    CSS_PREFIX: CSS_FORM_BUILDER_FIELD,","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type Object","     * @static","     */","    EXTENDS: A.FormBuilderField,","","    prototype: {","","        /**","         * Injects data into the template and returns the HTML result.","         *","         * @method getHTML","         * @return {String}","         */","        getHTML: function() {","            var instance = this;","","            return L.sub(","                instance.get('template'), {","                    id: AEscape.html(instance.get('id')),","                    label: AEscape.html(instance.get('label')),","                    name: AEscape.html(instance.get('name')),","                    type: AEscape.html(instance.get('buttonType')),","                    value: AEscape.html(instance.get('predefinedValue'))","                }","            );","        },","","        /**","         * Returns a list of property models including the `A.RadioCellEditor`","         * model.","         *","         * @method getPropertyModel","         * @return {Array}","         */","        getPropertyModel: function() {","            var instance = this,","                strings = instance.getStrings();","","            var model = A.FormBuilderButtonField.superclass.getPropertyModel.apply(instance, arguments);","","            model.push({","                attributeName: 'buttonType',","                editor: new A.RadioCellEditor({","                    options: {","                        'button': strings.button,","                        'reset': strings.reset,","                        'submit': strings.submit","                    }","                }),","                name: strings.buttonType","            });","","            return model;","        },","","        /**","         * Set the `buttonType` attribute on the UI.","         *","         * @method _uiSetButtonType","         * @param val","         * @protected","         */","        _uiSetButtonType: function(val) {","            var instance = this,","                templateNode = instance.get('templateNode');","","            templateNode.setAttribute('type', val);","        },","","        /**","         * Set the `predefinedValue` attribute on the UI.","         *","         * @method _uiSetPredefinedValue","         * @param val","         * @protected","         */","        _uiSetPredefinedValue: function(val) {","            var instance = this,","                templateNode = instance.get('templateNode');","","            templateNode.setContent(AEscape.html(val));","        }","","    }","","});","","A.FormBuilderButtonField = FormBuilderButtonField;","A.FormBuilderField.types.button = A.FormBuilderButtonField;","","","}, '3.1.0-deprecated.50', {\"requires\": [\"aui-form-builder-field-deprecated\"]});","","}());"]};
}
var __cov_R_VD6hOYFWF_DqvSjpsFfQ = __coverage__['build/aui-form-builder-field-button-deprecated/aui-form-builder-field-button-deprecated.js'];
__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['1']++;YUI.add('aui-form-builder-field-button-deprecated',function(A,NAME){__cov_R_VD6hOYFWF_DqvSjpsFfQ.f['1']++;__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['2']++;var L=A.Lang,toInitialCap=A.cached(function(str){__cov_R_VD6hOYFWF_DqvSjpsFfQ.f['2']++;__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['3']++;return str.substring(0,1).toUpperCase()+str.substring(1);}),AEscape=A.Escape,getCN=A.getClassName,CSS_BTN=getCN('btn'),CSS_BTN_DEFAULT=getCN('btn','default'),CSS_FORM_BUILDER_FIELD=getCN('form-builder-field'),CSS_FORM_BUILDER_FIELD_NODE=getCN('form-builder-field','node'),TPL_BUTTON='<button id="{id}" class="'+[CSS_FORM_BUILDER_FIELD_NODE,CSS_BTN,CSS_BTN_DEFAULT].join(' ')+'" type="{type}">{value}</button>',BUTTON_TYPES=['submit','reset','button'];__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['4']++;var FormBuilderButtonField=A.Component.create({NAME:'form-builder-button-field',ATTRS:{acceptChildren:{readOnly:true,value:false},buttonType:{validator:function(val){__cov_R_VD6hOYFWF_DqvSjpsFfQ.f['3']++;__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['5']++;return A.Array(BUTTON_TYPES).indexOf(val.toLowerCase())>-1;},value:'submit'},predefinedValue:{value:toInitialCap('submit')},showLabel:{value:false},template:{valueFn:function(){__cov_R_VD6hOYFWF_DqvSjpsFfQ.f['4']++;__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['6']++;return TPL_BUTTON;}}},UI_ATTRS:A.FormBuilderField.UI_ATTRS.concat(['buttonType']),CSS_PREFIX:CSS_FORM_BUILDER_FIELD,EXTENDS:A.FormBuilderField,prototype:{getHTML:function(){__cov_R_VD6hOYFWF_DqvSjpsFfQ.f['5']++;__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['7']++;var instance=this;__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['8']++;return L.sub(instance.get('template'),{id:AEscape.html(instance.get('id')),label:AEscape.html(instance.get('label')),name:AEscape.html(instance.get('name')),type:AEscape.html(instance.get('buttonType')),value:AEscape.html(instance.get('predefinedValue'))});},getPropertyModel:function(){__cov_R_VD6hOYFWF_DqvSjpsFfQ.f['6']++;__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['9']++;var instance=this,strings=instance.getStrings();__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['10']++;var model=A.FormBuilderButtonField.superclass.getPropertyModel.apply(instance,arguments);__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['11']++;model.push({attributeName:'buttonType',editor:new A.RadioCellEditor({options:{'button':strings.button,'reset':strings.reset,'submit':strings.submit}}),name:strings.buttonType});__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['12']++;return model;},_uiSetButtonType:function(val){__cov_R_VD6hOYFWF_DqvSjpsFfQ.f['7']++;__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['13']++;var instance=this,templateNode=instance.get('templateNode');__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['14']++;templateNode.setAttribute('type',val);},_uiSetPredefinedValue:function(val){__cov_R_VD6hOYFWF_DqvSjpsFfQ.f['8']++;__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['15']++;var instance=this,templateNode=instance.get('templateNode');__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['16']++;templateNode.setContent(AEscape.html(val));}}});__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['17']++;A.FormBuilderButtonField=FormBuilderButtonField;__cov_R_VD6hOYFWF_DqvSjpsFfQ.s['18']++;A.FormBuilderField.types.button=A.FormBuilderButtonField;},'3.1.0-deprecated.50',{'requires':['aui-form-builder-field-deprecated']});
