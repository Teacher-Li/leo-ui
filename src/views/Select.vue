<template>
  <div class="loading-page">
    <h1>Select 选择器</h1>
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
            <o-form-item label="方向">
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
            <o-form-item label="状态">
              <o-checkbox-group>
                <o-checkbox v-model="clearable">clearable</o-checkbox>
                <o-checkbox v-model="disabled">disabled</o-checkbox>
              </o-checkbox-group>
            </o-form-item>
          </o-form>
          <br>
          <o-select
            :placement="placement"
            :clearable="clearable"
            :disabled="disabled"
            style="width: 320px"
            :options="options"
            v-model="value"
            :size="size">
            请选择城市
          </o-select>
          {{ value }}
        </div>
        <div class="title"><span>基本用法</span></div>
        <div class="description">
          选择器属性设置
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
      <h3>Select props</h3>
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
      <h3>Select events</h3>
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
    name: 'Select',
    data () {
      return {
        visible1: false,

        value: '',

        size: '',
        placement: 'bottom',

        disabled: false,
        clearable: false,

        options: ['New York', 'London', 'Sydney', 'Ottawa', 'Paris', 'Canberra'],

        placementOptions: [
          { label: 'top', value: 'top' },
          { label: 'bottom', value: 'bottom' }
        ],

        propsTbody: [
          {
            label: 'size',
            type: 'String',
            introduce: '选择器大小，可选值为 <em>large</em>、<em>small</em>、<em>mini</em> 或者不设置',
            default: '-'
          }, {
            label: 'placement',
            type: 'String',
            introduce: '弹窗的展开方向，可选值为 <em>top</em> 和 <em>bottom</em>',
            default: 'bottom'
          }, {
            label: 'value',
            type: 'String 或 Number',
            introduce: '绑定的值，可使用 <em success>v-model</em> 双向绑定',
            default: '-'
          }, {
            label: 'notFoundText',
            type: 'String',
            introduce: '当下拉列表为空时显示的内容',
            default: '无匹配数据'
          }, {
            label: 'options',
            type: 'Array',
            introduce: '选项数组',
            default: '[]'
          }, {
            label: 'disabled',
            type: 'Boolean',
            introduce: '设置选择器禁用状态',
            default: 'false'
          }, {
            label: 'clearable',
            type: 'Boolean',
            introduce: '设置选择器可清除状态',
            default: 'false'
          }
        ],

        eventsTbody: [
          {
            name: 'on-change',
            introduce: '数据改变时触发',
            return: 'value'
          }, {
            name: 'on-clear',
            introduce: '点击清除按钮时触发',
            return: '无'
          }
        ],

        html1: `<o-form :label-width="60">
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
                        <o-form-item label="方向">
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
                        <o-form-item label="状态">
                          <o-checkbox-group>
                            <o-checkbox v-model="clearable">clearable</o-checkbox>
                            <o-checkbox v-model="disabled">disabled</o-checkbox>
                          </o-checkbox-group>
                        </o-form-item>
                      </o-form>
                      <br>
                      <o-select
                        :placement="placement"
                        :clearable="clearable"
                        :disabled="disabled"
                        :options="options"
                        v-model="value"
                        :size="size">
                      </o-select>
                      {{ value }}`,

        java1: `export default {
                        data () {
                          return {
                            value: '',

                            size: '',
                            placement: 'bottom',

                            disabled: false,
                            clearable: false,

                            options: ['New York', 'London', 'Sydney', 'Ottawa', 'Paris', 'Canberra'],
                            sizeOptions: [
                              { label: 'large', value: 'large' },
                              { label: 'small', value: 'small' },
                              { label: 'mini', value: 'mini' },
                              { label: 'default', value: '' }
                            ],
                            placementOptions: [
                              { label: 'top', value: 'top' },
                              { label: 'bottom', value: 'bottom' }
                            ]
                          }
                        }
                      }`

      }
    }
  }
</script>