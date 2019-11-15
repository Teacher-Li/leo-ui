(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2d1c"],{2679:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"loading-page"},[t("h1",[e._v("Upload 上传")]),e._m(0),t("div",{staticClass:"card",attrs:{vertical:""}},[t("div",{staticClass:"demo"},[t("div",{staticClass:"example"},[t("o-form",{attrs:{"label-width":60}},[t("o-form-item",{attrs:{label:"尺寸"}},[t("o-radio-group",[e._l(e.sizeOptions,(function(a){return[t("o-radio",{attrs:{current:a.value},model:{value:e.size,callback:function(a){e.size=a},expression:"size"}},[e._v("\n                  "+e._s(a.label)+"\n                ")])]}))],2)],1),t("o-form-item",{attrs:{label:"状态"}},[t("o-checkbox-group",[t("o-checkbox",{model:{value:e.dragable,callback:function(a){e.dragable=a},expression:"dragable"}},[e._v("dragable")])],1)],1)],1),t("br"),t("o-upload",{attrs:{suffix:["xlsx","csv"],dragable:e.dragable,size:e.size},on:{"on-success":e.handlerSuccess,"on-error":e.handlerError}},[e._v("\n          Click "+e._s(e.dragable?"or drag files":"")+" here to upload\n        ")])],1),e._m(1),t("div",{staticClass:"description"},[e._v("\n        上传属性设置\n      ")])]),t("div",{staticClass:"code",class:{visible:e.visible}},[t("div",{staticClass:"html"},[t("a",{on:{click:e.copy}},[e._v("Copy")]),t("textarea",{domProps:{value:e.html}}),t("pre",[t("code",{domProps:{innerHTML:e._s(e.HLHTML(e.html))}})])]),t("div",{staticClass:"js"},[t("a",{on:{click:e.copy}},[e._v("Copy")]),t("textarea",{domProps:{value:e.java}}),t("pre",[t("code",{domProps:{innerHTML:e._s(e.HTJAVA(e.java))}})])])]),t("div",{staticClass:"more",class:{open:e.visible},on:{click:function(a){e.visible=!e.visible}}})]),e._m(2),e._m(3),t("o-table",[t("tr",{attrs:{slot:"thead"},slot:"thead"},e._l(e.propsThead,(function(a){return t("th",[e._v(e._s(a.label))])})),0),e._l(e.propsTbody,(function(a){return t("tr",e._l(e.propsThead,(function(l){return t("td",{domProps:{innerHTML:e._s(a[l.value])}})})),0)}))],2),e._m(4),t("o-table",[t("tr",{attrs:{slot:"thead"},slot:"thead"},e._l(e.eventsThead,(function(a){return t("th",[e._v(e._s(a.label))])})),0),e._l(e.eventsTbody,(function(a){return t("tr",e._l(e.eventsThead,(function(l){return t("td",{domProps:{innerHTML:e._s(a[l.value])}})})),0)}))],2),e._m(5),t("o-table",[t("tr",{attrs:{slot:"thead"},slot:"thead"},e._l(e.slotThead,(function(a){return t("th",[e._v(e._s(a.label))])})),0),e._l(e.slotTbody,(function(a){return t("tr",e._l(e.slotThead,(function(l){return t("td",{domProps:{innerHTML:e._s(a[l.value])}})})),0)}))],2)],1)},n=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"anchor"},[t("h2",[e._v("Examples")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"title"},[t("span",[e._v("基本用法")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"anchor"},[t("h2",[e._v("API")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"anchor"},[t("h3",[e._v("Upload props")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"anchor"},[t("h3",[e._v("Upload events")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"anchor"},[t("h3",[e._v("Upload slot")])])}],r={name:"Upload",data:function(){return{visible:!1,size:"",dragable:!1,propsTbody:[{label:"encode",type:"String",introduce:"解码类型，可选值为 <em>GBK</em> 和 <em>UTF-8</em>",default:"GBK"},{label:"size",type:"String",introduce:"上传输入框大小，可选值为 <em>large</em>、<em>small</em>、<em>mini</em> 或者不设置。设置 <em>dragable</em> 时 <em error>无效</em>",default:"-"},{label:"suffix",type:"Array",introduce:"匹配上传文件后缀名",default:"[]"},{label:"height",type:"Number",introduce:"上传显示框高度。未设置 <em>dragable</em> 时 <em error>无效</em>",default:"200"},{label:"dragable",type:"Boolean",introduce:"设置上传文件可拖拽状态",default:"false"}],eventsTbody:[{name:"on-success",introduce:"文件上传成功是触发",return:"res"},{name:"on-error",introduce:"文件上传失败是触发",return:"无"}],slotTbody:[{name:"无",introduce:"自定义上传窗口内文字"}],html:'<o-form :label-width="60">\n  <o-form-item label="尺寸">\n    <o-radio-group>\n      <template v-for="x in sizeOptions">\n        <o-radio\n          :current="x.value"\n          v-model="size">\n          {{ x.label }}\n        </o-radio>\n      </template>\n    </o-radio-group>\n  </o-form-item>\n  <o-form-item label="状态">\n    <o-checkbox-group>\n      <o-checkbox v-model="dragable">dragable</o-checkbox>\n    </o-checkbox-group>\n  </o-form-item>\n</o-form>\n<br>\n<o-upload\n  @on-success="handlerSuccess"\n  :suffix="[\'xlsx\', \'csv\']"\n  @on-error="handlerError"\n  :dragable="dragable"\n  :size="size">\n  Click or drag files here to upload\n</o-upload>',java:"export default {\n  data () {\n    return {\n      size: '',\n\n      dragable: false,\n\n      sizeOptions: [\n        { label: 'large', value: 'large' },\n        { label: 'small', value: 'small' },\n        { label: 'mini', value: 'mini' },\n        { label: 'default', value: '' }\n      ]\n    }\n  },\n  methods: {\n    handlerSuccess (res) {\n      console.log(res)\n    },\n    handlerError () {\n      console.log('文件格式错误，请上传后缀名为 xlsx 或者 csv 的文件')\n    }\n  }\n}"}},methods:{handlerSuccess:function(e){console.log(e)},handlerError:function(){console.log("文件格式错误，请上传后缀名为 xlsx 或者 csv 的文件")}}},o=r,s=t("2877"),i=Object(s["a"])(o,l,n,!1,null,null,null);a["default"]=i.exports}}]);