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
        visible1: false,

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

        html1: `<o-form :label-width="60">
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

        java1: `export default {
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