<template>
  <div class="loading-page">
    <h1>Page 分页</h1>
    <div class="anchor">
      <h2>Examples</h2>
    </div>
    <div class="card" vertical>
      <div class="demo">
        <div class="example">
          <o-form :label-width="60">
            <o-form-item label="总数">
              <o-input
                style="width: 320px"
                formatter="number"
                v-model="total">
              </o-input>
            </o-form-item>
            <o-form-item label="周围">
              <o-input
                style="width: 320px"
                formatter="number"
                v-model="around">
              </o-input>
            </o-form-item>
            <o-form-item label="当前">
              <o-input
                style="width: 320px"
                formatter="number"
                v-model="current">
              </o-input>
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
                <o-checkbox v-model="simple">simple</o-checkbox>
                <o-checkbox v-model="showTotal">总数</o-checkbox>
                <o-checkbox v-model="showSizer">每页数量</o-checkbox>
                <o-checkbox v-model="showElevator">快速跳转</o-checkbox>
              </o-checkbox-group>
            </o-form-item>
          </o-form>
          <br>
          <o-page
            @on-page-size-change="changeCurrentPageSize"
            @on-change="changeCurrentPage"
            :show-elevator="showElevator"
            :show-total="showTotal"
            :show-sizer="showSizer"
            :placement="placement"
            :page-size="pageSize"
            :current="current"
            :around="around"
            :simple="simple"
            :total="total"
            :align="align"
            :size="size">
          </o-page>
        </div>
        <div class="title"><span>基本用法</span></div>
        <div class="description">
          分页属性设置
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
      <h3>Page props</h3>
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
      <h3>Page events</h3>
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
    name: 'Pagination',
    data () {
      return {
        visible1: false,

        size: '',
        around: 1,
        total: 200,
        current: 10,
        pageSize: 10,
        align: 'left',
        placement: 'bottom',

        simple: false,
        showTotal: false,
        showSizer: false,
        showElevator: false,

        alignOptions: [
          { label: 'left', value: 'left' },
          { label: 'center', value: 'center' },
          { label: 'right', value: 'right' }
        ],
        placementOptions: [
          { label: 'top', value: 'top' },
          { label: 'bottom', value: 'bottom' }
        ],

        propsTbody: [
          {
            label: 'size',
            type: 'String',
            introduce: '分页大小，可选值为 <em>large</em>、<em>small</em>、<em>mini</em> 或者不设置',
            default: '-'
          }, {
            label: 'align',
            type: 'String',
            introduce: '分页布局，可选值为 <em>left</em>、<em>center</em> 和 <em>right</em>',
            default: 'left'
          }, {
            label: 'placement',
            type: 'String',
            introduce: '选择器弹窗的展开方向，可选值为 <em>top</em> 和 <em>bottom</em>',
            default: 'bottom'
          }, {
            label: 'total',
            type: 'Number',
            introduce: '数据总数',
            default: '0'
          }, {
            label: 'around',
            type: 'Number',
            introduce: '当前页周围一边的个数。页数多才能看到效果',
            default: '1'
          }, {
            label: 'current',
            type: 'Number',
            introduce: '当前页码',
            default: '1'
          }, {
            label: 'page-size',
            type: 'Number',
            introduce: '每页数据数量',
            default: '10'
          }, {
            label: 'page-size-opts',
            type: 'Array',
            introduce: '每页数据数量配置',
            default: '[10, 20, 30, 40]'
          }, {
            label: 'simple',
            type: 'Boolean',
            introduce: '设置分页简洁状态',
            default: 'false'
          }, {
            label: 'show-total',
            type: 'Boolean',
            introduce: '设置分页总数显示状态',
            default: 'false'
          }, {
            label: 'show-sizer',
            type: 'Boolean',
            introduce: '设置分页切换每页数据数量显示状态',
            default: 'false'
          }, {
            label: 'show-elevator',
            type: 'Boolean',
            introduce: '设置分页快速跳转显示状态',
            default: 'false'
          }
        ],

        eventsTbody: [
          {
            name: 'on-change',
            introduce: '页码改变时回调，返回改变后的页码',
            return: 'current'
          }, {
            name: 'on-page-size-change',
            introduce: '每页数据数量改变时的回调，返回切换后的每页条数',
            return: 'page-size'
          }
        ],

        html1: `<o-form :label-width="60">
                        <o-form-item label="总数">
                          <o-input
                            formatter="number"
                            v-model="total">
                          </o-input>
                        </o-form-item>
                        <o-form-item label="周围">
                          <o-input
                            formatter="number"
                            v-model="around">
                          </o-input>
                        </o-form-item>
                        <o-form-item label="当前">
                          <o-input
                            formatter="number"
                            v-model="current">
                          </o-input>
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
                            <o-checkbox v-model="simple">simple</o-checkbox>
                            <o-checkbox v-model="showTotal">总数</o-checkbox>
                            <o-checkbox v-model="showSizer">每页数量</o-checkbox>
                            <o-checkbox v-model="showElevator">快速跳转</o-checkbox>
                          </o-checkbox-group>
                        </o-form-item>
                      </o-form>
                      <br>
                      <o-page
                        @on-page-size-change="changeCurrentPageSize"
                        @on-change="changeCurrentPage"
                        :show-elevator="showElevator"
                        :show-total="showTotal"
                        :show-sizer="showSizer"
                        :placement="placement"
                        :page-size="pageSize"
                        :current="current"
                        :around="around"
                        :simple="simple"
                        :total="total"
                        :align="align"
                        :size="size">
                      </o-page>`,

        java1: `export default {
                        data () {
                          return {
                            size: '',
                            around: 1,
                            total: 200,
                            current: 10,
                            pageSize: 10,
                            align: 'left',
                            placement: 'bottom',

                            simple: false,
                            showTotal: false,
                            showSizer: false,
                            showElevator: false,

                            sizeOptions: [
                              { label: 'large', value: 'large' },
                              { label: 'small', value: 'small' },
                              { label: 'mini', value: 'mini' },
                              { label: 'default', value: '' }
                            ],
                            alignOptions: [
                              { label: 'left', value: 'left' },
                              { label: 'center', value: 'center' },
                              { label: 'right', value: 'right' }
                            ],
                            placementOptions: [
                              { label: 'top', value: 'top' },
                              { label: 'bottom', value: 'bottom' }
                            ]
                          }
                        },
                        methods: {
                          changeCurrentPageSize (size) {
                            this.pageSize = size
                          },
                          changeCurrentPage (page) {
                            this.current = page
                          }
                        }
                      }`

      }
    },
    methods: {
      changeCurrentPageSize (size) {
        this.pageSize = size
      },
      changeCurrentPage (page) {
        this.current = page
      }
    }
  }
</script>