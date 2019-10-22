<template>
  <div class="loading-page">
    <h1>Carousels 传送带</h1>
    <div class="anchor">
      <h2>Examples</h2>
    </div>
    <div class="card" vertical>
      <div class="demo">
        <div class="example">
          <o-form :label-width="60">
            <o-form-item label="布局">
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
          </o-form>
          <br>
          <o-carousels :gutter="10" :placement="placement">
            <template v-for="item in list">
              <o-carousels-item>
                <div
                  style="width: 90px;height: 90px;border-radius: 3px;box-shadow: 0 1px 6px rgba(0, 0, 0, .2)"
                  :style="{ backgroundColor: item['color'] }">
                </div>
              </o-carousels-item>
            </template>
          </o-carousels>
        </div>
        <div class="title"><span>基本用法</span></div>
        <div class="description">
          传送带属性设置
        </div>
      </div>
      <div class="code" :class="{ visible : visible1 }">
        <div class="html">
          <textarea type="text" :value="html1" id="html1"></textarea>
          <a @click="copy($event, 'html1')">Copy</a>
          <pre>                    {{ html1 }}</pre>
        </div>
        <div class="js">
          <textarea type="text" :value="java1" id="java1"></textarea>
          <a @click="copy($event, 'java1')">Copy</a>
          <pre>                    {{ java1 }}</pre>
        </div>
      </div>
      <div class="more" :class="{ open: visible1 }" @click="visible1 = !visible1"></div>
    </div>
    <div class="anchor">
      <h2>API</h2>
    </div>
    <div class="anchor">
      <h3>Carousels props</h3>
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
      <h3>CarouselsItem slot</h3>
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
    name: 'Carousels',
    data () {
      return {
        visible1: false,

        placement: 'center',

        list: [
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
          { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) }
        ],

        placementOptions: [
          { label: 'top-left', value: 'top-left' },
          { label: 'top-right', value: 'top-right' },
          { label: 'center', value: 'center' },
          { label: 'bottom-right', value: 'bottom-right' },
          { label: 'bottom-left', value: 'bottom-left' }
        ],

        propsTbody: [
          {
            label: 'placement',
            type: 'String',
            introduce: '切换箭头布局，可选值为 <em>top-left</em>、<em>top-right</em>、<em>center</em>、<em>bottom-right</em>、<em>bottom-left</em>',
            default: 'center'
          }, {
            label: 'gutter',
            type: 'Number',
            introduce: '间距，单位 <em>px</em>，左右平分',
            default: '0'
          }, {
            label: 'value',
            type: 'Number',
            introduce: '设置鼠标滚动后，移动的幅度，单位 <em>px</em>',
            default: '60'
          }
        ],

        slotTbody: [
          {
            name: '无',
            introduce: '内容'
          }
        ],

        html1: `<o-form :label-width="60">
                        <o-form-item label="布局">
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
                      </o-form>
                      <br>
                      <o-carousels :gutter="10" :placement="placement">
                        <template v-for="item in list">
                          <o-carousels-item>
                            <div :style="{ backgroundColor: item['color'] }"></div>
                          </o-carousels-item>
                        </template>
                      </o-carousels>`,

        java1: `export default {
                        data () {
                          return {
                            placement: 'center',

                            list: [
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                              { color: '#' + (~~ (Math.random() * (1 << 24))).toString(16) }
                            ],

                            placementOptions: [
                              { label: 'top-left', value: 'top-left' },
                              { label: 'top-right', value: 'top-right' },
                              { label: 'center', value: 'center' },
                              { label: 'bottom-right', value: 'bottom-right' },
                              { label: 'bottom-left', value: 'bottom-left' }
                            ]
                          }
                        }
                      }`

      }
    }
  }
</script>