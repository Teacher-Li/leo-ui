<template>
  <div class="loading-page">
    <h1>Tooltip 文字提示</h1>
    <div class="anchor">
      <h2>Examples</h2>
    </div>
    <div class="card" vertical>
      <div class="demo">
        <div class="example">
          <o-form :label-width="60">
            <o-form-item label="主题">
              <o-radio-group>
                <template v-for="x in themeOptions">
                  <o-radio
                    :current="x.value"
                    v-model="theme">
                    {{ x.label }}
                  </o-radio>
                </template>
              </o-radio-group>
            </o-form-item>
          </o-form>
          <br>
          <span v-tooltip="{ name: 'default', theme: theme, length: 20 }">
            设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
          </span>
          <br>
          <span v-tooltip.small="{ name: 'small', theme: theme, length: 20 }">
            设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
          </span>
          <br>
          <span v-tooltip.original="{ name: 'original', length: 20 }">
            设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
          </span>
        </div>
        <div class="title"><span>基本用法</span></div>
        <div class="description">
          文字提示属性设置
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
      <h3>Tooltip modifiers</h3>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in modifiersThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in modifiersTbody">
        <td v-for="th in modifiersThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
    <div class="anchor">
      <h3>Tooltip value</h3>
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

        theme: 'light',

        themeOptions: [
          { label: 'primary', value: 'primary' },
          { label: 'info', value: 'info' },
          { label: 'success', value: 'success' },
          { label: 'warning', value: 'warning' },
          { label: 'error', value: 'error' },
          { label: 'dark', value: 'dark' },
          { label: 'light', value: 'light' }
        ],

        modifiersTbody: [
          {
            name: 'small',
            introduce: '设置文字提示小尺寸的状态'
          }, {
            name: 'original',
            introduce: '设置文字提示原生 <em>title</em> 样式'
          }
        ],

        valueTbody: [
          {
            name: 'name',
            type: 'String',
            introduce: '自定义对应的 <em>tooltip</em> 名称，以便区分',
            default: 'tooltip_ + 100以内随机正整数'
          }, {
            name: 'theme',
            type: 'String',
            introduce: '文字提示的主题，可选值为 <em>primary</em>、<em>info</em>、<em>success</em>、<em>warning</em>、<em>error</em>、<em>dark</em> 和 <em>light</em>',
            default: 'light'
          }, {
            name: 'length',
            type: 'Number',
            introduce: '限制文字的最大长度',
            default: '-'
          }
        ],

        html1: `<o-form :label-width="60">
                        <o-form-item label="主题">
                          <o-radio-group>
                            <template v-for="x in themeOptions">
                              <o-radio
                                :current="x.value"
                                v-model="theme">
                                {{ x.label }}
                              </o-radio>
                            </template>
                          </o-radio-group>
                        </o-form-item>
                      </o-form>
                      <br>
                      <span v-tooltip="{ name: 'default', theme: theme, length: 20 }">
                        设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                      </span>
                      <br>
                      <span v-tooltip.small="{ name: 'small', theme: theme, length: 20 }">
                        设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                      </span>
                      <br>
                      <span v-tooltip.original="{ name: 'original', length: 20 }">
                        设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                      </span>`,

        java1: `export default {
                        data () {
                          return {
                            theme: 'light',

                            themeOptions: [
                              { label: 'primary', value: 'primary' },
                              { label: 'info', value: 'info' },
                              { label: 'success', value: 'success' },
                              { label: 'warning', value: 'warning' },
                              { label: 'error', value: 'error' },
                              { label: 'dark', value: 'dark' },
                              { label: 'light', value: 'light' }
                            ]
                          }
                        }
                      }`
      }
    }
  }
</script>