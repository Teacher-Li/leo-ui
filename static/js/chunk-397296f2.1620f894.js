(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-397296f2"],{"36bd":function(e,t,s){"use strict";var a=s("4bf8"),n=s("77f1"),i=s("9def");e.exports=function(e){var t=a(this),s=i(t.length),l=arguments.length,c=n(l>1?arguments[1]:void 0,s),r=l>2?arguments[2]:void 0,o=void 0===r?s:n(r,s);while(o>c)t[c++]=e;return t}},"6c7b":function(e,t,s){var a=s("5ca1");a(a.P,"Array",{fill:s("36bd")}),s("9c6c")("fill")},bc99:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"loading-page"},[s("h1",[e._v("DragSelect 框选")]),e._m(0),s("div",{staticClass:"card",attrs:{vertical:""}},[s("div",{staticClass:"demo"},[s("div",{staticClass:"example"},[s("div",{directives:[{name:"drag-select",rawName:"v-drag-select",value:{selector:"div.test-item",className:["active"]},expression:"{ selector: 'div.test-item', className: ['active'] }"}],staticClass:"test"},[s("p",{staticStyle:{"text-align":"center","margin-bottom":"20px"}},[e._v("在此虚线区域内，按下鼠标，然后拖动鼠标，松开鼠标")]),e._l(e.list,function(t,a){return s("div",{staticClass:"test-item"},[e._v("\n            测试-"+e._s(a)+"\n          ")])})],2)]),e._m(1),s("div",{staticClass:"description"},[e._v("\n        框选属性设置\n      ")])]),s("div",{staticClass:"code",class:{visible:e.visible1}},[s("div",{staticClass:"html"},[s("textarea",{attrs:{type:"text",id:"html1"},domProps:{value:e.html1}}),s("a",{on:{click:function(t){return e.copy(t,"html1")}}},[e._v("Copy")]),s("pre",[e._v("                    "+e._s(e.html1))])]),s("div",{staticClass:"js"},[s("textarea",{attrs:{type:"text",id:"java1"},domProps:{value:e.java1}}),s("a",{on:{click:function(t){return e.copy(t,"java1")}}},[e._v("Copy")]),s("pre",[e._v("                    "+e._s(e.java1))])])]),s("div",{staticClass:"more",class:{open:e.visible1},on:{click:function(t){e.visible1=!e.visible1}}})]),e._m(2),e._m(3),s("o-table",[s("tr",{attrs:{slot:"thead"},slot:"thead"},e._l(e.valueThead,function(t){return s("th",[e._v(e._s(t.label))])}),0),e._l(e.valueTbody,function(t){return s("tr",e._l(e.valueThead,function(a){return s("td",{domProps:{innerHTML:e._s(t[a.value])}})}),0)})],2)],1)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"anchor"},[s("h2",[e._v("Examples")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"title"},[s("span",[e._v("基本用法")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"anchor"},[s("h2",[e._v("API")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"anchor"},[s("h3",[e._v("DragSelect value")])])}],i=(s("6c7b"),{name:"DragSelect",data:function(){return{visible1:!1,valueTbody:[{name:"selector",type:"String",introduce:"定义框选 <em>DOM</em> 节点对象",default:"-"},{name:"className",type:"Array",introduce:"给被选中的 <em>DOM</em> 节点添加的 <em>class</em> 类名",default:"-"}],html1:'<div\n                      v-drag-select="{ selector: \'div.test-item\', className: [\'active\'] }"\n                      class="test">\n                      <div\n                        v-for="(item, i) in list"\n                        class="test-item">\n                        测试-{{ i }}\n                      </div>\n                    </div>',java1:"export default {\n                      computed: {\n                        list () {\n                          return new Array(10).fill(null)\n                        }\n                      },\n                      methods: {\n                        dragSelected (elements) {\n                          console.log(elements)\n                        }\n                      }\n                    }"}},computed:{list:function(){return new Array(10).fill(null)}},methods:{dragSelected:function(e){console.log(e)},copy:function(e,t){var s=e.target;s.className||(document.querySelector("#"+t).select(),document.execCommand("Copy"),s.innerHTML="Copied",s.className="success",setTimeout(function(){s.className="",s.innerHTML="Copy"},5e3))}}}),l=i,c=(s("ed33"),s("2877")),r=Object(c["a"])(l,a,n,!1,null,null,null);t["default"]=r.exports},ed33:function(e,t,s){"use strict";var a=s("f709"),n=s.n(a);n.a},f709:function(e,t,s){}}]);