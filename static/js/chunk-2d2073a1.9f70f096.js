(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2073a1"],{a040:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loading-page"},[a("h1",[t._v("Heart 比心")]),t._m(0),a("div",{staticClass:"card",attrs:{vertical:""}},[a("div",{staticClass:"demo"},[a("div",{staticClass:"example"},[a("o-form",{attrs:{"label-width":60}},[a("o-form-item",{attrs:{label:"颜色"}},[a("o-radio-group",[t._l(t.customOptions,(function(e){return[a("o-radio",{attrs:{current:e.value},model:{value:t.custom,callback:function(e){t.custom=e},expression:"custom"}},[t._v("\n                  "+t._s(e.label)+"\n                ")])]}))],2)],1)],1),a("br"),a("div",{directives:[{name:"heart",rawName:"v-heart",value:{custom:t.custom},expression:"{ custom: custom }"}],staticStyle:{height:"100px",border:"1px dashed #ccc","line-height":"100px","text-align":"center"}},[t._v("\n          点击此虚线区域，比心^_^\n        ")])],1),t._m(1),a("div",{staticClass:"description"},[t._v("\n        比心属性设置\n      ")])]),a("div",{staticClass:"code",class:{visible:t.visible1}},[a("div",{staticClass:"html"},[a("textarea",{attrs:{type:"text",id:"html1"},domProps:{value:t.html1}}),a("a",{on:{click:function(e){return t.copy(e,"html1")}}},[t._v("Copy")]),a("pre",[t._v("                    "+t._s(t.html1))])]),a("div",{staticClass:"js"},[a("textarea",{attrs:{type:"text",id:"java1"},domProps:{value:t.java1}}),a("a",{on:{click:function(e){return t.copy(e,"java1")}}},[t._v("Copy")]),a("pre",[t._v("                    "+t._s(t.java1))])])]),a("div",{staticClass:"more",class:{open:t.visible1},on:{click:function(e){t.visible1=!t.visible1}}})]),t._m(2),t._m(3),a("o-table",[a("tr",{attrs:{slot:"thead"},slot:"thead"},t._l(t.valueThead,(function(e){return a("th",[t._v(t._s(e.label))])})),0),t._l(t.valueTbody,(function(e){return a("tr",t._l(t.valueThead,(function(n){return a("td",{domProps:{innerHTML:t._s(e[n.value])}})})),0)}))],2)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"anchor"},[a("h2",[t._v("Examples")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("基本用法")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"anchor"},[a("h2",[t._v("API")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"anchor"},[a("h3",[t._v("Heart value")])])}],s={name:"Tooltip",data:function(){return{visible1:!1,custom:"",valueTbody:[{name:"custom",type:"String",introduce:"比心颜色，可选值为 <em>primary</em>、<em>info</em>、<em>success</em>、<em>warning</em>、<em>error</em> 或者不设置。不设置的话，颜色随机变化",default:"-"},{name:"color",type:"String",introduce:"自定义比心颜色，设置 <em>custom</em> 时 <em error>无效</em>",default:"-"}],html1:'<o-form :label-width="60">\n                      <o-form-item label="颜色">\n                        <o-radio-group>\n                          <template v-for="x in customOptions">\n                            <o-radio\n                              :current="x.value"\n                              v-model="custom">\n                              {{ x.label }}\n                            </o-radio>\n                          </template>\n                        </o-radio-group>\n                      </o-form-item>\n                    </o-form>\n                    <br>\n                    <div v-heart="{ custom: custom }"></div>',java1:"export default {\n                      data () {\n                        return {\n                          custom: '',\n\n                          customOptions: [\n                            { label: 'primary', value: 'primary' },\n                            { label: 'info', value: 'info' },\n                            { label: 'success', value: 'success' },\n                            { label: 'warning', value: 'warning' },\n                            { label: 'error', value: 'error' },\n                            { label: 'default', value: '' }\n                          ]\n                        }\n                      }\n                    }"}}},l=s,o=a("2877"),i=Object(o["a"])(l,n,r,!1,null,null,null);e["default"]=i.exports}}]);