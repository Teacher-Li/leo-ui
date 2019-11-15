<template>
  <div class="button-page">
    <h1>Button 按钮</h1>
    <div class="anchor">
      <h2>Examples</h2>
    </div>
    <div class="card" vertical>
      <div class="demo">
        <div class="example">
          <o-form :label-width="60">
            <o-form-item label="类型">
              <o-radio-group>
                <template v-for="x in typeOptions">
                  <o-radio
                    :current="x.value"
                    v-model="type">
                    {{ x.label }}
                  </o-radio>
                </template>
              </o-radio-group>
            </o-form-item>
            <o-form-item label="颜色">
              <o-radio-group>
                <template v-for="x in customOptions">
                  <o-radio
                    :current="x.value"
                    v-model="custom">
                    {{ x.label }}
                  </o-radio>
                </template>
              </o-radio-group>
            </o-form-item>
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
                <o-checkbox v-model="long">long</o-checkbox>
                <o-checkbox v-model="round">round</o-checkbox>
                <o-checkbox v-model="loading">loading</o-checkbox>
                <o-checkbox v-model="disabled">disabled</o-checkbox>
              </o-checkbox-group>
            </o-form-item>
          </o-form>
          <br>
          <o-button
            :disabled="disabled"
            :loading="loading"
            :custom="custom"
            :round="round"
            :long="long"
            :size="size"
            :type="type">
            Button
          </o-button>
          <br><br>
          <o-button-group
            :custom="custom"
            :round="round"
            :long="long"
            :type="type"
            :size="size">
            <o-button>Button</o-button>
            <o-button>Button</o-button>
            <o-button>Button</o-button>
          </o-button-group>
        </div>
        <div class="title"><span>基本用法</span></div>
        <div class="description">
          单个按钮和按钮组属性设置
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
      <h3>Button props</h3>
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
      <h3>Button events</h3>
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
    name: 'Button',
    data () {
      return {
        visible: false,

        type: '',
        size: '',
        custom: '',

        long: false,
        round: false,
        loading: false,
        disabled: false,

        typeOptions: [
          { label: 'bg', value: 'bg' },
          { label: 'shadow', value: 'shadow' },
          { label: 'text', value: 'text' },
          { label: 'dashed', value: 'dashed' },
          { label: 'default', value: '' }
        ],

        propsTbody: [
          {
            label: 'type',
            type: 'String',
            introduce: '按钮类型，可选值为 <em>bg</em>、<em>shadow</em>、<em>text</em>、<em>dashed</em> 或者不设置',
            default: '-'
          }, {
            label: 'size',
            type: 'String',
            introduce: '按钮大小，可选值为 <em>large</em>、<em>small</em>、<em>mini</em> 或者不设置',
            default: '-'
          }, {
            label: 'custom',
            type: 'String',
            introduce: '按钮颜色，可选值为 <em>primary</em>、<em>info</em>、<em>success</em>、<em>warning</em>、<em>error</em> 或者不设置。' +
                        '当 <em>type="bg"</em> 或者 <em>type="shadow"</em> 默认为 <em>primary</em>',
            default: '- 或 primary'
          }, {
            label: 'icon',
            type: 'String',
            introduce: '按钮的图标类型。只适用于 <em warning>单个按钮</em>',
            default: '-'
          }, {
            label: 'iconSize',
            type: 'String 或 Number',
            introduce: '按钮的图标大小。只适用于 <em warning>单个按钮</em>',
            default: '-'
          }, {
            label: 'round',
            type: 'Boolean',
            introduce: '设置圆形按钮。设置 <em>type="text"</em> 时 <em error>无效</em>',
            default: 'false'
          }, {
            label: 'disabled',
            type: 'Boolean',
            introduce: '设置按钮禁用状态。只适用于 <em warning>单个按钮</em>',
            default: 'false'
          }, {
            label: 'active',
            type: 'Boolean',
            introduce: '设置按钮被选中状态。适用于 <em warning>按钮组</em>，建议在不设置 <em>custom</em> 并且 <em>type!="bg"</em> 或 <em>type!="shadow"</em> 时使用',
            default: 'false'
          }, {
            label: 'loading',
            type: 'Boolean',
            introduce: '设置按钮加载状态。只适用于 <em warning>单个按钮</em>',
            default: 'false'
          }, {
            label: 'long',
            type: 'Boolean',
            introduce: '设置宽度100%，按钮组内单个按钮等比例宽',
            default: 'false'
          }
        ],

        eventsTbody: [
          {
            name: 'on-click',
            introduce: '点击按钮时触发',
            return: 'event'
          }
        ],

        html: `<o-form :label-width="60">
  <o-form-item label="类型">
    <o-radio-group>
      <template v-for="x in typeOptions">
        <o-radio
          :current="x.value"
          v-model="type">
          {{ x.label }}
        </o-radio>
      </template>
    </o-radio-group>
  </o-form-item>
  <o-form-item label="颜色">
    <o-radio-group>
      <template v-for="x in customOptions">
        <o-radio
          :current="x.value"
          v-model="custom">
          {{ x.label }}
        </o-radio>
      </template>
    </o-radio-group>
  </o-form-item>
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
      <o-checkbox v-model="long">long</o-checkbox>
      <o-checkbox v-model="round">round</o-checkbox>
      <o-checkbox v-model="loading">loading</o-checkbox>
      <o-checkbox v-model="disabled">disabled</o-checkbox>
    </o-checkbox-group>
  </o-form-item>
</o-form>
<br>
<o-button
  :disabled="disabled"
  :loading="loading"
  :custom="custom"
  :round="round"
  :long="long"
  :size="size"
  :type="type">
  Button
</o-button>
<br><br>
<o-button-group
  :custom="custom"
  :round="round"
  :long="long"
  :type="type"
  :size="size">
  <o-button>Button</o-button>
  <o-button>Button</o-button>
  <o-button>Button</o-button>
</o-button-group>`,

        java: `export default {
  data () {
    return {
      type: '',
      size: '',
      custom: '',

      long: false,
      round: false,
      loading: false,
      disabled: false,

      typeOptions: [
        { label: 'bg', value: 'bg' },
        { label: 'shadow', value: 'shadow' },
        { label: 'text', value: 'text' },
        { label: 'dashed', value: 'dashed' },
        { label: 'default', value: '' }
      ],
      customOptions: [
        { label: 'primary', value: 'primary' },
        { label: 'info', value: 'info' },
        { label: 'success', value: 'success' },
        { label: 'warning', value: 'warning' },
        { label: 'error', value: 'error' },
        { label: 'default', value: '' }
      ],
      sizeOptions: [
        { label: 'large', value: 'large' },
        { label: 'small', value: 'small' },
        { label: 'mini', value: 'mini' },
        { label: 'default', value: '' }
      ]
    }
  }
}`
      }
    }
  }
</script>