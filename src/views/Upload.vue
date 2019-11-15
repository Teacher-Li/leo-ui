<template>
  <div class="loading-page">
    <h1>Upload 上传</h1>
    <div class="anchor">
      <h2>Examples</h2>
    </div>
    <div class="card" vertical>
      <div class="demo">
        <div class="example">
          <o-form :label-width="60">
            <o-form-item label="尺寸">
              <o-radio-group>
                <template v-for="x in sizeOptions">
                  <o-radio
                    :current="x.value"
                    v-model="size">
                    {{ x.label }}
                  </o-radio>
                </template>
              </o-radio-group>
            </o-form-item>
            <o-form-item label="状态">
              <o-checkbox-group>
                <o-checkbox v-model="dragable">dragable</o-checkbox>
              </o-checkbox-group>
            </o-form-item>
          </o-form>
          <br>
          <o-upload
            @on-success="handlerSuccess"
            :suffix="['xlsx', 'csv']"
            @on-error="handlerError"
            :dragable="dragable"
            :size="size">
            Click {{ dragable ? 'or drag files' : '' }} here to upload
          </o-upload>
        </div>
        <div class="title"><span>基本用法</span></div>
        <div class="description">
          上传属性设置
        </div>
      </div>
      <div class="code" :class="{ visible : visible }">
        <div class="html">
          <a @click="copy">Copy</a>
          <textarea :value="html"></textarea>
          <pre><code v-html="HLHTML(html)"></code></pre>
        </div>
        <div class="js">
          <a @click="copy">Copy</a>
          <textarea :value="java"></textarea>
          <pre><code v-html="HTJAVA(java)"></code></pre>
        </div>
      </div>
      <div class="more" :class="{ open: visible }" @click="visible = !visible"></div>
    </div>
    <div class="anchor">
      <h2>API</h2>
    </div>
    <div class="anchor">
      <h3>Upload props</h3>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in propsThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in propsTbody">
        <td v-for="th in propsThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
    <div class="anchor">
      <h3>Upload events</h3>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in eventsThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in eventsTbody">
        <td v-for="th in eventsThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
    <div class="anchor">
      <h3>Upload slot</h3>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in slotThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in slotTbody">
        <td v-for="th in slotThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
  </div>
</template>

<script>
  export default {
    name: 'Upload',
    data () {
      return {
        visible: false,

        size: '',

        dragable: false,

        propsTbody: [
          {
            label: 'encode',
            type: 'String',
            introduce: '解码类型，可选值为 <em>GBK</em> 和 <em>UTF-8</em>',
            default: 'GBK'
          }, {
            label: 'size',
            type: 'String',
            introduce: '上传输入框大小，可选值为 <em>large</em>、<em>small</em>、<em>mini</em> 或者不设置。设置 <em>dragable</em> 时 <em error>无效</em>',
            default: '-'
          }, {
            label: 'suffix',
            type: 'Array',
            introduce: '匹配上传文件后缀名',
            default: '[]'
          }, {
            label: 'height',
            type: 'Number',
            introduce: '上传显示框高度。未设置 <em>dragable</em> 时 <em error>无效</em>',
            default: '200'
          }, {
            label: 'dragable',
            type: 'Boolean',
            introduce: '设置上传文件可拖拽状态',
            default: 'false'
          }
        ],

        eventsTbody: [
          {
            name: 'on-success',
            introduce: '文件上传成功是触发',
            return: 'res'
          }, {
            name: 'on-error',
            introduce: '文件上传失败是触发',
            return: '无'
          }
        ],

        slotTbody: [
          {
            name: '无',
            introduce: '自定义上传窗口内文字'
          }
        ],

        html: `<o-form :label-width="60">
  <o-form-item label="尺寸">
    <o-radio-group>
      <template v-for="x in sizeOptions">
        <o-radio
          :current="x.value"
          v-model="size">
          {{ x.label }}
        </o-radio>
      </template>
    </o-radio-group>
  </o-form-item>
  <o-form-item label="状态">
    <o-checkbox-group>
      <o-checkbox v-model="dragable">dragable</o-checkbox>
    </o-checkbox-group>
  </o-form-item>
</o-form>
<br>
<o-upload
  @on-success="handlerSuccess"
  :suffix="['xlsx', 'csv']"
  @on-error="handlerError"
  :dragable="dragable"
  :size="size">
  Click or drag files here to upload
</o-upload>`,

        java: `export default {
  data () {
    return {
      size: '',

      dragable: false,

      sizeOptions: [
        { label: 'large', value: 'large' },
        { label: 'small', value: 'small' },
        { label: 'mini', value: 'mini' },
        { label: 'default', value: '' }
      ]
    }
  },
  methods: {
    handlerSuccess (res) {
      console.log(res)
    },
    handlerError () {
      console.log('文件格式错误，请上传后缀名为 xlsx 或者 csv 的文件')
    }
  }
}`

      }
    },
    methods: {
      handlerSuccess (res) {
        console.log(res)
      },
      handlerError () {
        console.log('文件格式错误，请上传后缀名为 xlsx 或者 csv 的文件')
      }
    }
  }
</script>