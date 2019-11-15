<template>
  <div class="form-page">
    <h1>Form 表单</h1>
    <div class="anchor">
      <h2>Examples</h2>
    </div>
    <div class="card" vertical>
      <div class="demo">
        <div class="example">
          <o-form :label-width="80">
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
            <o-form-item label="对齐方式">
              <o-radio-group>
                <template v-for="x in placementOptions">
                  <o-radio
                    :current="x.value"
                    v-model="placement">
                    {{ x.label }}
                  </o-radio>
                </template>
              </o-radio-group>
            </o-form-item>
            <o-form-item label="宽度">
              <o-input
                style="width: 320px"
                formatter="number"
                v-model="width">
              </o-input>
            </o-form-item>
            <o-form-item label="状态">
              <o-checkbox-group>
                <o-checkbox v-model="inline">inline</o-checkbox>
              </o-checkbox-group>
            </o-form-item>
          </o-form>
          <br>
          <o-form
            :label-placement="placement"
            :label-width="width"
            :inline="inline"
            :size="size">
            <o-form-item label="名称">
              <o-input style="min-width: 180px"></o-input>
            </o-form-item>
            <o-form-item label="性别">
              <o-select
                style="min-width: 180px"
                :options="['男', '女']"
                v-model="sex">
              </o-select>
            </o-form-item>
            <o-form-item label="简介">
              <o-input
                style="min-width: 180px"
                type="textarea">
              </o-input>
            </o-form-item>
            <o-form-item>
              <o-button type="shadow">确定</o-button>
            </o-form-item>
          </o-form>
        </div>
        <div class="title"><span>基本用法</span></div>
        <div class="description">
          表单属性设置
        </div>
      </div>
      <div class="code" :class="{ visible : visible1 }">
        <div class="html">
          <a @click="copy">Copy</a>
          <textarea :value="html1"></textarea>
          <pre><code v-html="HLHTML(html1)"></code></pre>
        </div>
        <div class="js">
          <a @click="copy">Copy</a>
          <textarea :value="java1"></textarea>
          <pre><code v-html="HTJAVA(java1)"></code></pre>
        </div>
      </div>
      <div class="more" :class="{ open: visible1 }" @click="visible1 = !visible1"></div>
    </div>
    <div class="card" vertical>
      <div class="demo">
        <div class="example">
          <o-edit
            @on-confirm="handlerConfirm"
            @on-cancel="handlerCancel"
            :disabled="!canConfirm"
            v-model="edit">
          </o-edit>
          <br>
          <o-form :label-width="60">
            <o-form-item label="名称" :value="oldValue" :editable="edit">
              <o-input v-model="value"></o-input>
            </o-form-item>
          </o-form>
        </div>
        <div class="title"><span>组件结合</span></div>
        <div class="description">
          与编辑组件结合用法
        </div>
      </div>
      <div class="code" :class="{ visible : visible2 }">
        <div class="html">
          <a @click="copy">Copy</a>
          <textarea :value="html2"></textarea>
          <pre><code v-html="HLHTML(html2)"></code></pre>
        </div>
        <div class="js">
          <a @click="copy">Copy</a>
          <textarea :value="java2"></textarea>
          <pre><code v-html="HTJAVA(java2)"></code></pre>
        </div>
      </div>
      <div class="more" :class="{ open: visible2 }" @click="visible2 = !visible2"></div>
    </div>
    <div class="anchor">
      <h2>API</h2>
    </div>
    <div class="anchor">
      <h3>Form props</h3>
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
      <h3>FormItem props</h3>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in propsThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in propsTbody2">
        <td v-for="th in propsThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
  </div>
</template>

<script>
  export default {
    name: 'Form',
    data () {
      return {
        visible1: false,
        visible2: false,

        size: '',
        width: 100,
        placement: 'right',

        inline: false,

        sex: '',

        value: '',
        oldValue: '',

        edit: false,

        placementOptions: [
          { label: 'left', value: 'left' },
          { label: 'top-left', value: 'top-left' },
          { label: 'top', value: 'top' },
          { label: 'top-right', value: 'top-right' },
          { label: 'right', value: 'right' },
          { label: 'bottom-right', value: 'bottom-right' },
          { label: 'bottom-left', value: 'bottom-left' }
        ],

        propsTbody: [
          {
            label: 'size',
            type: 'String',
            introduce: '表单大小，可选值为 <em>large</em>、<em>small</em>、<em>mini</em> 或者不设置',
            default: '-'
          }, {
            label: 'label-placement',
            type: 'String',
            introduce: '表单 <em>label</em> 布局，可选值为 <em>left</em>、<em>top-left</em>、<em>top</em>、<em>top-right</em>、<em>right</em>、<em>bottom-right</em>、<em>bottom-left</em>',
            default: 'right'
          }, {
            label: 'labelWidth',
            type: 'Number',
            introduce: '表单 <em>label</em> 宽度。设置 <em>label-placement="top"</em> 时 <em error>无效</em>',
            default: '100'
          }, {
            label: 'required',
            type: 'Boolean',
            introduce: '设置表单必填项的状态',
            default: 'false'
          }, {
            label: 'inline',
            type: 'Boolean',
            introduce: '设置表单行内状态',
            default: 'false'
          }
        ],

        propsTbody2: [
          {
            label: 'label',
            type: 'String',
            introduce: '<em>label</em> 的值',
            default: '-'
          }, {
            label: 'value',
            type: 'String',
            introduce: '<em>value</em> 的值',
            default: '-'
          }, {
            label: 'emptyText',
            type: 'String',
            introduce: '<em>value</em> 为空时显示的内容',
            default: '空'
          }, {
            label: 'required',
            type: 'Boolean',
            introduce: '设置必填项的状态',
            default: 'false'
          }, {
            label: 'editable',
            type: 'Boolean',
            introduce: '设置可编辑状态，结合 <em>value</em> 一起使用',
            default: 'true'
          }
        ],

        html1: `<o-form :label-width="80">
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
  <o-form-item label="对齐方式">
    <o-radio-group>
      <template v-for="x in placementOptions">
        <o-radio
          :current="x.value"
          v-model="placement">
          {{ x.label }}
        </o-radio>
      </template>
    </o-radio-group>
  </o-form-item>
  <o-form-item label="宽度">
    <o-input
      formatter="number"
      v-model="width">
    </o-input>
  </o-form-item>
  <o-form-item label="状态">
    <o-checkbox-group>
      <o-checkbox v-model="inline">inline</o-checkbox>
    </o-checkbox-group>
  </o-form-item>
</o-form>
<br>
<o-form
  :label-placement="placement"
  :label-width="width"
  :inline="inline"
  :size="size">
  <o-form-item label="名称">
    <o-input></o-input>
  </o-form-item>
  <o-form-item label="性别">
    <o-select
      :options="['男', '女']"
      v-model="sex">
    </o-select>
  </o-form-item>
  <o-form-item label="简介">
    <o-input type="textarea"></o-input>
  </o-form-item>
  <o-form-item>
    <o-button type="shadow">确定</o-button>
  </o-form-item>
</o-form>`,

        html2: `<o-edit
  @on-confirm="handlerConfirm"
  @on-cancel="handlerCancel"
  :disabled="!canConfirm"
  v-model="edit">
</o-edit>
<br>
<o-form :label-width="60">
  <o-form-item label="名称" :value="oldValue" :editable="edit">
    <o-input v-model="value"></o-input>
  </o-form-item>
</o-form>`,

        java1: `export default {
  data () {
    return {
      size: '',
      width: 100,
      placement: 'right',

      inline: false,

      sex: '',

      sizeOptions: [
        { label: 'large', value: 'large' },
        { label: 'small', value: 'small' },
        { label: 'mini', value: 'mini' },
        { label: 'default', value: '' }
      ],
      placementOptions: [
        { label: 'left', value: 'left' },
        { label: 'top-left', value: 'top-left' },
        { label: 'top', value: 'top' },
        { label: 'top-right', value: 'top-right' },
        { label: 'right', value: 'right' },
        { label: 'bottom-right', value: 'bottom-right' },
        { label: 'bottom-left', value: 'bottom-left' }
      ]
    }
  }
}`,

        java2: `export default {
  data () {
    return {
      value: '',
      oldValue: '',

      edit: false
    }
  },
  computed: {
    canConfirm () {
      return this.value === 'leo-ui'
    }
  },
  methods: {
    handlerConfirm () {
      this.edit = false;
      this.oldValue = this.value
    },
    handlerCancel () {
      this.edit = false;
      this.value = this.oldValue
    }
  }
}`
      }
    },
    computed: {
      canConfirm () {
        return this.value === 'leo-ui'
      }
    },
    methods: {
      handlerConfirm () {
        this.edit = false;
        this.oldValue = this.value
      },
      handlerCancel () {
        this.edit = false;
        this.value = this.oldValue
      }
    }
  }
</script>