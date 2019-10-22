<template>
  <div class="button-page">
    <h1>Barrage 弹幕</h1>
    <div class="anchor">
      <h2>Examples</h2>
    </div>
    <div class="card" vertical>
      <div class="demo">
        <div class="example">
          <div ref="live" class="live">
            <div class="live-form">
              <o-form size="small" :labelWidth="0">
                <o-form-item>
                  <o-input v-model="value" @on-enter="handlerSend"></o-input>
                  <o-button
                      @on-click="handlerSend"
                      custom="primary"
                      type="text">
                    发送
                  </o-button>
                </o-form-item>
              </o-form>
            </div>
          </div>
        </div>
        <div class="title"><span>基本用法</span></div>
        <div class="description">
          弹幕基本用法
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
      <h3>Barrage options</h3>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in optionsThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in optionsTbody">
        <td v-for="th in optionsThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
    <div class="anchor">
      <h3>Barrage methods</h3>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in methodsThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in methodsTbody">
        <td v-for="th in methodsThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
  </div>
</template>

<script>
  export default {
    name: 'Barrage',
    data () {
      return {
        visible1: false,

        value: '',

        optionsTbody: [
          {
            name: 'max',
            type: 'Number',
            introduce: '单次显示弹幕最大数量，超出部分存储在弹幕队列内',
            default: '50'
          }, {
            name: 'level',
            type: 'Number',
            introduce: '屏幕高度除以这个值为弹幕显示的高度',
            default: '1'
          }, {
            name: 'padding',
            type: 'Number',
            introduce: '设置本人发送的弹幕padding样式',
            default: '5'
          }, {
            name: 'color',
            type: 'String',
            introduce: '弹幕颜色，默认随机',
            default: '-'
          }, {
            name: 'font',
            type: 'String',
            introduce: '弹幕字体样式',
            default: '20px Microsoft YaHei'
          }
        ],

        methodsTbody: [
          {
            name: 'init',
            parameter: 'dom',
            introduce: '弹幕初始化，<em warning>必须</em> 要传递一个 <em primary>dom元素</em>'
          }, {
            name: 'config',
            parameter: 'options',
            introduce: '弹幕配置options，支持链式操作'
          }, {
            name: 'resize',
            parameter: '-',
            introduce: '弹幕重置尺寸'
          }, {
            name: 'clear',
            parameter: '-',
            introduce: '清除弹幕'
          }, {
            name: 'destroy',
            parameter: '-',
            introduce: '销毁弹幕'
          }, {
            name: 'shoot',
            parameter: 'value、isSelf',
            introduce: '发送弹幕，value表示弹幕内容，isSelf表示是否是本人发送的弹幕'
          }
        ],

        html1: `<div ref="live" class="live">
                        <div class="live-form">
                          <o-form size="small" :labelWidth="0">
                            <o-form-item>
                              <o-input v-model="value" @on-enter="handlerSend"></o-input>
                              <o-button
                                  @on-click="handlerSend"
                                  custom="primary"
                                  type="text">
                                发送
                              </o-button>
                            </o-form-item>
                          </o-form>
                        </div>
                      </div>`,

        java1: `export default {
                        data () {
                          return {
                            value: ''
                          }
                        },
                        methods: {
                          handlerSend () {
                            if (this.value) {
                              this.$Barrage.shoot(this.value, true);
                              this.value = '';
                            }
                          }
                        },
                        mounted () {
                          this.$Barrage.init(this.$refs.live);
                        }
                      }`
      }
    },
    methods: {
      handlerSend () {
        if (this.value) {
          this.$Barrage.shoot(this.value, true);
          this.value = '';
        }
      }
    },
    mounted () {
      setTimeout(() => {
        this.$Barrage.init(this.$refs.live)
      }, 300);
    }
  }
</script>

<style lang="less">
  .live {
    width: 100%;
    height: 400px;
    margin: 0 auto;
    overflow: hidden;
    max-width: 900px;
    position: relative;
    background-color: #eee;
    border: 1px solid #d2d2d2;
    &-form {
      left: 50%;
      bottom: 0;
      width: 80%;
      position: absolute;
      transform: translateX(-50%);
      .document-button {
        right: 0;
        position: absolute;
      }
    }
  }
</style>