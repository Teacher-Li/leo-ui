<template>
  <div class="loading-page">
    <h1>Heart 比心</h1>
    <div class="anchor">
      <h2>Examples</h2>
    </div>
    <div class="card" vertical>
      <div class="demo">
        <div class="example">
          <o-form :label-width="60">
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
          </o-form>
          <br>
          <div
            style="height: 100px;border: 1px dashed #ccc;line-height: 100px;text-align: center"
            v-heart="{ custom: custom }">
            点击此虚线区域，比心^_^
          </div>
        </div>
        <div class="title"><span>基本用法</span></div>
        <div class="description">
          比心属性设置
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
      <h3>Heart value</h3>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in valueThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in valueTbody">
        <td v-for="th in valueThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
  </div>
</template>

<script>
  export default {
    name: 'Tooltip',
    data () {
      return {
        visible: false,

        custom: '',

        valueTbody: [
          {
            name: 'custom',
            type: 'String',
            introduce: '比心颜色，可选值为 <em>primary</em>、<em>info</em>、<em>success</em>、<em>warning</em>、<em>error</em> 或者不设置。不设置的话，颜色随机变化',
            default: '-'
          }, {
            name: 'color',
            type: 'String',
            introduce: '自定义比心颜色，设置 <em>custom</em> 时 <em error>无效</em>',
            default: '-'
          }
        ],

        html: `<o-form :label-width="60">
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
</o-form>
<br>
<div v-heart="{ custom: custom }"></div>`,

        java: `export default {
  data () {
    return {
      custom: '',

      customOptions: [
        { label: 'primary', value: 'primary' },
        { label: 'info', value: 'info' },
        { label: 'success', value: 'success' },
        { label: 'warning', value: 'warning' },
        { label: 'error', value: 'error' },
        { label: 'default', value: '' }
      ]
    }
  }
}`
      }
    }
  }
</script>