(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3d15"],{"0494":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loading-page"},[a("h1",[e._v("Select 选择器")]),e._m(0),a("div",{staticClass:"card",attrs:{vertical:""}},[a("div",{staticClass:"demo"},[a("div",{staticClass:"example"},[a("o-form",{attrs:{"label-width":60}},[a("o-form-item",{attrs:{label:"尺寸"}},[a("o-radio-group",[e._l(e.sizeOptions,(function(t){return[a("o-radio",{attrs:{current:t.value},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},[e._v("\n                  "+e._s(t.label)+"\n                ")])]}))],2)],1),a("o-form-item",{attrs:{label:"方向"}},[a("o-radio-group",[e._l(e.placementOptions,(function(t){return[a("o-radio",{attrs:{current:t.value},model:{value:e.placement,callback:function(t){e.placement=t},expression:"placement"}},[e._v("\n                  "+e._s(t.label)+"\n                ")])]}))],2)],1),a("o-form-item",{attrs:{label:"状态"}},[a("o-checkbox-group",[a("o-checkbox",{model:{value:e.clearable,callback:function(t){e.clearable=t},expression:"clearable"}},[e._v("clearable")]),a("o-checkbox",{model:{value:e.disabled,callback:function(t){e.disabled=t},expression:"disabled"}},[e._v("disabled")])],1)],1)],1),a("br"),a("o-select",{staticStyle:{width:"320px"},attrs:{placement:e.placement,clearable:e.clearable,disabled:e.disabled,options:e.options,size:e.size},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e._v("\n          请选择城市\n        ")]),e._v("\n        "+e._s(e.value)+"\n      ")],1),e._m(1),a("div",{staticClass:"description"},[e._v("\n        选择器属性设置\n      ")])]),a("div",{staticClass:"code",class:{visible:e.visible1}},[a("div",{staticClass:"html"},[a("textarea",{attrs:{type:"text",id:"html1"},domProps:{value:e.html1}}),a("a",{on:{click:function(t){return e.copy(t,"html1")}}},[e._v("Copy")]),a("pre",[e._v("                    "+e._s(e.html1))])]),a("div",{staticClass:"js"},[a("textarea",{attrs:{type:"text",id:"java1"},domProps:{value:e.java1}}),a("a",{on:{click:function(t){return e.copy(t,"java1")}}},[e._v("Copy")]),a("pre",[e._v("                    "+e._s(e.java1))])])]),a("div",{staticClass:"more",class:{open:e.visible1},on:{click:function(t){e.visible1=!e.visible1}}})]),e._m(2),e._m(3),a("o-table",[a("tr",{attrs:{slot:"thead"},slot:"thead"},e._l(e.propsThead,(function(t){return a("th",[e._v(e._s(t.label))])})),0),e._l(e.propsTbody,(function(t){return a("tr",e._l(e.propsThead,(function(l){return a("td",{domProps:{innerHTML:e._s(t[l.value])}})})),0)}))],2),e._m(4),a("o-table",[a("tr",{attrs:{slot:"thead"},slot:"thead"},e._l(e.eventsThead,(function(t){return a("th",[e._v(e._s(t.label))])})),0),e._l(e.eventsTbody,(function(t){return a("tr",e._l(e.eventsThead,(function(l){return a("td",{domProps:{innerHTML:e._s(t[l.value])}})})),0)}))],2)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"anchor"},[a("h2",[e._v("Examples")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("span",[e._v("基本用法")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"anchor"},[a("h2",[e._v("API")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"anchor"},[a("h3",[e._v("Select props")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"anchor"},[a("h3",[e._v("Select events")])])}],o={name:"Select",data:function(){return{visible1:!1,value:"",size:"",placement:"bottom",disabled:!1,clearable:!1,options:["New York","London","Sydney","Ottawa","Paris","Canberra"],placementOptions:[{label:"top",value:"top"},{label:"bottom",value:"bottom"}],propsTbody:[{label:"size",type:"String",introduce:"选择器大小，可选值为 <em>large</em>、<em>small</em>、<em>mini</em> 或者不设置",default:"-"},{label:"placement",type:"String",introduce:"弹窗的展开方向，可选值为 <em>top</em> 和 <em>bottom</em>",default:"bottom"},{label:"value",type:"String 或 Number",introduce:"绑定的值，可使用 <em success>v-model</em> 双向绑定",default:"-"},{label:"notFoundText",type:"String",introduce:"当下拉列表为空时显示的内容",default:"无匹配数据"},{label:"options",type:"Array",introduce:"选项数组",default:"[]"},{label:"disabled",type:"Boolean",introduce:"设置选择器禁用状态",default:"false"},{label:"clearable",type:"Boolean",introduce:"设置选择器可清除状态",default:"false"}],eventsTbody:[{name:"on-change",introduce:"数据改变时触发",return:"value"},{name:"on-clear",introduce:"点击清除按钮时触发",return:"无"}],html1:'<o-form :label-width="60">\n                      <o-form-item label="尺寸">\n                        <o-radio-group>\n                          <template v-for="x in sizeOptions">\n                            <o-radio\n                              :current="x.value"\n                              v-model="size">\n                              {{ x.label }}\n                            </o-radio>\n                          </template>\n                        </o-radio-group>\n                      </o-form-item>\n                      <o-form-item label="方向">\n                        <o-radio-group>\n                          <template v-for="x in placementOptions">\n                            <o-radio\n                              :current="x.value"\n                              v-model="placement">\n                              {{ x.label }}\n                            </o-radio>\n                          </template>\n                        </o-radio-group>\n                      </o-form-item>\n                      <o-form-item label="状态">\n                        <o-checkbox-group>\n                          <o-checkbox v-model="clearable">clearable</o-checkbox>\n                          <o-checkbox v-model="disabled">disabled</o-checkbox>\n                        </o-checkbox-group>\n                      </o-form-item>\n                    </o-form>\n                    <br>\n                    <o-select\n                      :placement="placement"\n                      :clearable="clearable"\n                      :disabled="disabled"\n                      :options="options"\n                      v-model="value"\n                      :size="size">\n                    </o-select>\n                    {{ value }}',java1:"export default {\n                      data () {\n                        return {\n                          value: '',\n\n                          size: '',\n                          placement: 'bottom',\n\n                          disabled: false,\n                          clearable: false,\n\n                          options: ['New York', 'London', 'Sydney', 'Ottawa', 'Paris', 'Canberra'],\n                          sizeOptions: [\n                            { label: 'large', value: 'large' },\n                            { label: 'small', value: 'small' },\n                            { label: 'mini', value: 'mini' },\n                            { label: 'default', value: '' }\n                          ],\n                          placementOptions: [\n                            { label: 'top', value: 'top' },\n                            { label: 'bottom', value: 'bottom' }\n                          ]\n                        }\n                      }\n                    }"}}},r=o,s=a("2877"),i=Object(s["a"])(r,l,n,!1,null,null,null);t["default"]=i.exports}}]);