<template>
  <div class="loading-page">
    <h1>Load 加载</h1>
    <div class="anchor">
      <h2>Examples</h2>
    </div>
    <div class="card" vertical>
      <div class="demo">
        <div class="example">
          <o-form :label-width="60">
            <o-form-item label="文字">
              <o-input
                style="width: 320px"
                v-model="value">
              </o-input>
            </o-form-item>
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
            <o-form-item label="状态">
              <o-checkbox-group>
                <o-checkbox v-model="fix">fix</o-checkbox>
                <o-checkbox v-model="loading">loading</o-checkbox>
              </o-checkbox-group>
            </o-form-item>
          </o-form>
          <br>
          <div class="article" style="position: relative">

            <o-load
              :visible="loading"
              :type="type"
              :fix="fix">
              {{ value }}
            </o-load>

            <h3>登金陵凤凰台</h3>
            <address>李白</address>
            <article>
              <p>凤凰台上凤凰游，凤去台空江自流。</p>
              <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
              <p>三山半落青天外，二水中分白鹭洲。</p>
              <p>总为浮云能蔽日，长安不见使人愁。</p>
            </article>
          </div>
        </div>
        <div class="title"><span>基本用法</span></div>
        <div class="description">
          加载属性设置
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
      <h3>Load props</h3>
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
      <h3>Load slot</h3>
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
    name: 'Load',
    data () {
      return {
        visible: false,

        value: '',
        type: 'circular',

        fix: false,
        loading: false,

        typeOptions: [
          { label: 'dot', value: 'dot' },
          { label: 'circular', value: 'circular' }
        ],

        propsTbody: [
          {
            label: 'type',
            type: 'String',
            introduce: '加载类型，可选值为 <em>dot</em> 和 <em>circular</em>',
            default: 'circular'
          }, {
            label: 'visible',
            type: 'Boolean',
            introduce: '设置加载显示状态',
            default: 'false'
          }, {
            label: 'clearable',
            type: 'Boolean',
            introduce: '设置加载绝对定位状态。需要父级有 <em warning>relative</em> 或 <em warning>absolute</em>',
            default: 'false'
          }
        ],

        slotTbody: [
          {
            name: '无',
            introduce: '自定义加载图标下方文字'
          }
        ],

        html: `<o-form :label-width="60">
  <o-form-item label="文字">
    <o-input v-model="value"></o-input>
  </o-form-item>
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
  <o-form-item label="状态">
    <o-checkbox-group>
      <o-checkbox v-model="fix">fix</o-checkbox>
      <o-checkbox v-model="loading">loading</o-checkbox>
    </o-checkbox-group>
  </o-form-item>
</o-form>
<br>
<div class="article" style="position: relative">
  <o-load
    :visible="loading"
    :type="type"
    :fix="fix">
    {{ value }}
  </o-load>
  <h3>登金陵凤凰台</h3>
  <address>李白</address>
  <article>
    <p>凤凰台上凤凰游，凤去台空江自流。</p>
    <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
    <p>三山半落青天外，二水中分白鹭洲。</p>
    <p>总为浮云能蔽日，长安不见使人愁。</p>
  </article>
</div>`,

        java: `export default {
  data () {
    return {
      value: '',
      type: 'circular',

      fix: false,
      loading: false,

      typeOptions: [
        { label: 'dot', value: 'dot' },
        { label: 'circular', value: 'circular' }
      ]
    }
  }
}`

      }
    }
  }
</script>