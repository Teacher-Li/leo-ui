<template>
  <div class="loading-page">
    <h1>Input 输入框</h1>
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
            <o-form-item label="格式">
              <o-radio-group>
                <template v-for="x in formatterOptions">
                  <o-radio
                    :current="x.value"
                    v-model="formatter">
                    {{ x.label }}
                  </o-radio>
                </template>
              </o-radio-group>
            </o-form-item>
            <o-form-item label="状态">
              <o-checkbox-group>
                <o-checkbox v-model="lazy">lazy</o-checkbox>
                <o-checkbox v-model="clearable">clearable</o-checkbox>
                <o-checkbox v-model="readonly">readonly</o-checkbox>
                <o-checkbox v-model="disabled">disabled</o-checkbox>
              </o-checkbox-group>
            </o-form-item>
          </o-form>
          <br>
          <o-input
            placeholder="Enter something..."
            :formatter="formatter"
            :clearable="clearable"
            style="width: 320px"
            :readonly="readonly"
            :disabled="disabled"
            v-model="value"
            :lazy="lazy"
            :size="size">
          </o-input>
          {{ value }}
        </div>
        <div class="title"><span>基本用法</span></div>
        <div class="description">
          输入框属性设置
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
      <h3>Input props</h3>
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
      <h3>Input events</h3>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in eventsThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in eventsTbody">
        <td v-for="th in eventsThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
  </div>
</template>

<script>
  export default {
    name: 'Input',
    data () {
      return {
        visible: false,

        value: '',

        size: '',
        formatter: '',

        lazy: false,
        readonly: false,
        disabled: false,
        clearable: false,

        formatterOptions: [
          { label: 'email', value: 'email' },
          { label: 'number', value: 'number' },
          { label: 'phone', value: 'phone' },
          { label: 'name', value: 'name' },
          { label: 'mac', value: 'mac' },
          { label: 'default', value: '' }
        ],

        propsTbody: [
          {
            label: 'type',
            type: 'String',
            introduce: '输入框类型，可选值为 <em>text</em>、<em>password</em> 和 <em>textarea</em>',
            default: 'text'
          }, {
            label: 'size',
            type: 'String',
            introduce: '输入框大小，可选值为 <em>large</em>、<em>small</em>、<em>mini</em> 或者不设置',
            default: '-'
          }, {
            label: 'formatter',
            type: 'String',
            introduce: '输入框格式要求，可选值为 <em>email</em>、<em>number</em>、<em>phone</em>、<em>name</em>、<em>mac</em> 或者不设置',
            default: '-'
          }, {
            label: 'value',
            type: 'String 或 Number',
            introduce: '绑定的值，可使用 <em success>v-model</em> 双向绑定',
            default: '-'
          }, {
            label: 'placeholder',
            type: 'String',
            introduce: '占位文本',
            default: '-'
          }, {
            label: 'maxlength',
            type: 'Number',
            introduce: '最大输入长度',
            default: '-'
          }, {
            label: 'autocomplete',
            type: 'String',
            introduce: '原生的自动完成功能，可选值为 <em>off</em> 和 <em>on</em>',
            default: 'off'
          }, {
            label: 'parser',
            type: 'Function',
            introduce: '可将数据转换成需要的形式。设置 <em>formatter</em> 时 <em error>无效</em>',
            default: '-'
          }, {
            label: 'autofocus',
            type: 'Boolean',
            introduce: '原生的自动获取焦点',
            default: 'false'
          }, {
            label: 'disabled',
            type: 'Boolean',
            introduce: '设置输入框禁用状态',
            default: 'false'
          }, {
            label: 'readonly',
            type: 'Boolean',
            introduce: '设置输入框只读状态',
            default: 'false'
          }, {
            label: 'clearable',
            type: 'Boolean',
            introduce: '设置输入框可清除状态',
            default: 'false'
          }, {
            label: 'lazy',
            type: 'Boolean',
            introduce: '设置输入框触发改变数据状态。设置为 <em>true</em> 时，只有输入框失去焦点或按下回车键时 <em warning>触发</em>',
            default: 'false'
          }
        ],

        eventsTbody: [
          {
            name: 'on-enter',
            introduce: '按下回车键时触发',
            return: 'event'
          }, {
            name: 'on-focus',
            introduce: '输入框聚焦时触发',
            return: 'event'
          }, {
            name: 'on-blur',
            introduce: '输入框失去焦点时触发',
            return: 'event'
          }, {
            name: 'on-change',
            introduce: '数据改变时触发',
            return: 'value'
          }, {
            name: 'on-clear',
            introduce: '点击清除按钮时触发',
            return: '无'
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
  <o-form-item label="格式">
    <o-radio-group>
      <template v-for="x in formatterOptions">
        <o-radio
          :current="x.value"
          v-model="formatter">
          {{ x.label }}
        </o-radio>
      </template>
    </o-radio-group>
  </o-form-item>
  <o-form-item label="状态">
    <o-checkbox-group>
      <o-checkbox v-model="lazy">lazy</o-checkbox>
      <o-checkbox v-model="clearable">clearable</o-checkbox>
      <o-checkbox v-model="readonly">readonly</o-checkbox>
      <o-checkbox v-model="disabled">disabled</o-checkbox>
    </o-checkbox-group>
  </o-form-item>
</o-form>
<br>
<o-input
  placeholder="Enter something..."
  :formatter="formatter"
  :clearable="clearable"
  :readonly="readonly"
  :disabled="disabled"
  v-model="value"
  :lazy="lazy"
  :size="size">
</o-input>
{{ value }}`,

        java: `export default {
  data () {
    return {
      value: '',

      size: '',
      formatter: '',

      lazy: false,
      readonly: false,
      disabled: false,
      clearable: false,

      sizeOptions: [
        { label: 'large', value: 'large' },
        { label: 'small', value: 'small' },
        { label: 'mini', value: 'mini' },
        { label: 'default', value: '' }
      ],
      formatterOptions: [
        { label: 'email', value: 'email' },
        { label: 'number', value: 'number' },
        { label: 'phone', value: 'phone' },
        { label: 'name', value: 'name' },
        { label: 'mac', value: 'mac' },
        { label: 'default', value: '' }
      ]
    }
  }
}`

      }
    }
  }
</script>