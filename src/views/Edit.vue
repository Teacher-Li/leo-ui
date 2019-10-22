<template>
  <div class="button-page">
    <h1>Edit 编辑</h1>
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
            <o-form-item label="布局">
              <o-radio-group>
                <template v-for="x in alignOptions">
                  <o-radio
                    :current="x.value"
                    v-model="align">
                    {{ x.label }}
                  </o-radio>
                </template>
              </o-radio-group>
            </o-form-item>
            <o-form-item label="状态">
              <o-checkbox-group>
                <o-checkbox v-model="canConfirm">canConfirm</o-checkbox>
              </o-checkbox-group>
            </o-form-item>
          </o-form>
          <br>
          <o-edit
            @on-confirm="handlerConfirm"
            @on-cancel="handlerCancel"
            :disabled="!canConfirm"
            v-model="edit"
            :align="align"
            :size="size"
            :type="type">
          </o-edit>
        </div>
        <div class="title"><span>基本用法</span></div>
        <div class="description">
          编辑属性设置
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
      <h3>Edit props</h3>
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
      <h3>Edit events</h3>
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
        visible1: false,

        type: '',
        size: '',
        align: 'left',

        edit: false,
        canConfirm: false,

        typeOptions: [
          { label: '文字', value: 'text' },
          { label: '图标', value: 'icon' },
          { label: 'default', value: '' }
        ],
        alignOptions: [
          { label: 'left', value: 'left' },
          { label: 'right', value: 'right' }
        ],

        propsTbody: [
          {
            label: 'type',
            type: 'String',
            introduce: '编辑类型，可选值为 <em>text</em>、<em>icon</em> 或者不设置',
            default: '-'
          }, {
            label: 'size',
            type: 'String',
            introduce: '编辑大小，可选值为 <em>large</em>、<em>small</em>、<em>mini</em> 或者不设置',
            default: '-'
          }, {
            label: 'align',
            type: 'String',
            introduce: '编辑布局，可选值为 <em>left</em> 和 <em>right</em>',
            default: 'left'
          }, {
            label: 'btnText',
            type: 'Array',
            introduce: '按钮的文字配置。设置 <em>type="icon"</em> 时 <em error>无效</em>',
            default: '[\'编辑\', \'确定\', \'取消\']'
          }, {
            label: 'btnIcon',
            type: 'Array',
            introduce: '按钮的图标配置。设置 <em>type="text"</em> 时 <em error>无效</em>',
            default: '[\'edit\', \'confirm\', \'cancel\']'
          }, {
            label: 'edit',
            type: 'Boolean',
            introduce: '绑定的值，可使用 <em success>v-model</em> 双向绑定',
            default: 'true'
          }, {
            label: 'disabled',
            type: 'Boolean',
            introduce: '设置禁用点击确定按钮的状态',
            default: 'false'
          }
        ],

        eventsTbody: [
          {
            name: 'on-confirm',
            introduce: '点击确定按钮时触发',
            return: '-'
          }, {
            name: 'on-cancel',
            introduce: '点击取消按钮时触发',
            return: '-'
          }
        ],

        html1: `<o-form :label-width="60">
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
                        <o-form-item label="布局">
                          <o-radio-group>
                            <template v-for="x in alignOptions">
                              <o-radio
                                :current="x.value"
                                v-model="align">
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
                            <o-checkbox v-model="canConfirm">canConfirm</o-checkbox>
                          </o-checkbox-group>
                        </o-form-item>
                      </o-form>
                      <br>
                      <o-edit
                        @on-confirm="handlerConfirm"
                        @on-cancel="handlerCancel"
                        :disabled="!canConfirm"
                        v-model="edit"
                        :align="align"
                        :size="size"
                        :type="type">
                      </o-edit>`,

        java1: `export default {
                        data () {
                          return {
                            type: '',
                            size: '',
                            align: 'left',

                            edit: false,
                            canConfirm: false,

                            typeOptions: [
                              { label: '文字', value: 'text' },
                              { label: '图标', value: 'icon' },
                              { label: 'default', value: '' }
                            ],
                            sizeOptions: [
                              { label: 'large', value: 'large' },
                              { label: 'small', value: 'small' },
                              { label: 'mini', value: 'mini' },
                              { label: 'default', value: '' }
                            ],
                            alignOptions: [
                              { label: 'left', value: 'left' },
                              { label: 'right', value: 'right' }
                            ]
                          }
                        },
                        methods: {
                          handlerConfirm () {
                            this.edit = false;
                            console.log('confirm')
                          },
                          handlerCancel () {
                            this.edit = false;
                            console.log('cancel')
                          }
                        }
                      }`
      }
    },
    methods: {
      handlerConfirm () {
        this.edit = false;
        console.log('confirm')
      },
      handlerCancel () {
        this.edit = false;
        console.log('cancel')
      }
    }
  }
</script>