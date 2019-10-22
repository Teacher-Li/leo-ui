<template>
  <div class="table-page">
    <h1>Table 表格</h1>
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
            <o-form-item label="类别">
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
                <o-checkbox v-model="sortable">排序</o-checkbox>
              </o-checkbox-group>
            </o-form-item>
          </o-form>
          <br>
          <o-button
            :disabled="!selectedData.length"
            @on-click="exportCSV"
            type="shadow">
            导出选中的数据
          </o-button>
          <o-button
            @on-click="addData"
            :loading="loading"
            custom="success"
            type="shadow">
            添加数据
          </o-button>
          <o-button
            :disabled="!selectedData.length"
            @on-click="deleteData"
            custom="error"
            type="shadow">
            删除数据
          </o-button>
          <br><br>
          <o-table :custom="custom" :size="size">
            <tr slot="thead">
              <template v-if="type === 'radio'">
                <th></th>
              </template>
              <template v-else-if="type === 'checkbox'">
                <th>
                  <o-checkbox
                    :indeterminate="indeterminate"
                    @on-change="selectedAll"
                    v-model="selectAll">
                  </o-checkbox>
                </th>
              </template>
              <template v-for="column in columns">
                <o-table-sort
                  :order="sortOrders[column.key] > 0"
                  :active="sortKey === column.key"
                  @on-click="sortBy(column.key)"
                  v-if="sortable && column.sort">
                  {{ column['label'] }}
                </o-table-sort>
                <th v-else>{{ column['label'] }}</th>
              </template>
            </tr>
            <tr v-for="row in totalData" :class="row.className">
              <template v-if="type === 'radio'">
                <td>
                  <o-radio v-model="id" :current="row.id"></o-radio>
                </td>
              </template>
              <template v-else-if="type === 'checkbox'">
                <td>
                  <o-checkbox v-model="selected" :current="row.id"></o-checkbox>
                </td>
              </template>
              <td v-for="column in columns">{{ row[column['key']] }}</td>
            </tr>
          </o-table>
        </div>
        <div class="title"><span>基本用法</span></div>
        <div class="description">
          表格属性设置
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
    <div class="card" vertical>
      <div class="demo">
        <div class="example">
          <template v-if="parsed">
            <o-button
              @on-click="uploadAgain"
              custom="warning"
              type="shadow">
              重新上传
            </o-button>
            <br><br>
            <o-table>
              <tr slot="thead">
                <th v-for="column in uploadData['key']">{{ column }}</th>
              </tr>
              <tr v-for="row in uploadData['value']">
                <td v-for="cell in row">{{ cell }}</td>
              </tr>
            </o-table>
          </template>
          <o-upload
            @on-success="handlerSuccess"
            :suffix="['csv', 'xlsx']"
            @on-error="handlerError"
            dragable
            v-else>
            Click or drag files here to upload
          </o-upload>
        </div>
        <div class="title"><span>组件结合</span></div>
        <div class="description">
          与上传组件结合用法
        </div>
      </div>
      <div class="code" :class="{ visible : visible2 }">
        <div class="html">
          <textarea type="text" :value="html2" id="html2"></textarea>
          <a @click="copy($event, 'html2')">Copy</a>
          <pre>                    {{ html2 }}</pre>
        </div>
        <div class="js">
          <textarea type="text" :value="java2" id="java2"></textarea>
          <a @click="copy($event, 'java2')">Copy</a>
          <pre>                    {{ java2 }}</pre>
        </div>
      </div>
      <div class="more" :class="{ open: visible2 }" @click="visible2 = !visible2"></div>
    </div>
    <div class="anchor">
      <h2>API</h2>
    </div>
    <div class="anchor">
      <h3>Table props</h3>
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
      <h3>Table slot</h3>
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
    name: 'Table',
    data () {
      return {
        visible1: false,
        visible2: false,

        type: '',
        size: '',
        custom: '',

        sortable: false,
        loading: false,

        id: '',
        length: 7,
        selected: [],
        selectAll: false,

        sortKey: 'age',
        sortOrders: {
          name: 1,
          age: 1,
          height: 1,
          weight: 1
        },

        columns: [
          { key: 'name', label: '姓名', sort: true },
          { key: 'sex', label: '性别', sort: false },
          { key: 'age', label: '年龄', sort: true },
          { key: 'height', label: '身高(cm)', sort: true },
          { key: 'weight', label: '体重(kg)', sort: true }
        ],
        data: [
          { id: 0, name: 'Leo', sex: '男', age: 26, height: 175, weight: 70 },
          { id: 1, name: 'Zanilia', sex: '女', age: 29, height: 165, weight: 43 },
          { id: 2, name: 'Jay Chou', sex: '男', age: 39, height: 171, weight: 60 },
          { id: 3, name: 'Cecilia Han', sex: '女', age: 35, height: 170, weight: 48 },
          { id: 4, name: 'Stephen Chow', sex: '男', age: 56, height: 174, weight: 70 },
          { id: 5, name: 'Zhou Dongyu', sex: '女', age: 26, height: 162, weight: 44 },
          { id: 6, name: 'Chow Yun Fat', sex: '男', age: 63, height: 182, weight: 54 }
        ],

        typeOptions: [
          { label: '单选', value: 'radio' },
          { label: '多选', value: 'checkbox' },
          { label: '无', value: '' }
        ],

        parsed: false,
        uploadData: null,

        propsTbody: [
          {
            label: 'size',
            type: 'String',
            introduce: '表格大小，可选值为 <em>large</em>、<em>small</em>、<em>mini</em> 或者不设置',
            default: '-'
          }, {
            label: 'custom',
            type: 'String',
            introduce: '表格颜色，可选值为 <em>primary</em>、<em>info</em>、<em>success</em>、<em>warning</em>、<em>error</em> 或者不设置',
            default: '-'
          }
        ],

        slotTbody: [
          {
            name: 'thead',
            introduce: '表格表头内容'
          }, {
            name: '无',
            introduce: '表格表身内容'
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
                        <o-form-item label="类别">
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
                            <o-checkbox v-model="sortable">排序</o-checkbox>
                          </o-checkbox-group>
                        </o-form-item>
                      </o-form>
                      <br>
                      <o-button
                        :disabled="!selectedData.length"
                        @on-click="exportCSV"
                        type="shadow">
                        导出选中的数据
                      </o-button>
                      <o-button
                        @on-click="addData"
                        :loading="loading"
                        custom="success"
                        type="shadow">
                        添加数据
                      </o-button>
                      <o-button
                        :disabled="!selectedData.length"
                        @on-click="deleteData"
                        custom="error"
                        type="shadow">
                        删除数据
                      </o-button>
                      <br><br>
                      <o-table :custom="custom" :size="size">
                        <tr slot="thead">
                          <template v-if="type === 'radio'">
                            <th></th>
                          </template>
                          <template v-else-if="type === 'checkbox'">
                            <th>
                              <o-checkbox
                                :indeterminate="indeterminate"
                                @on-change="selectedAll"
                                v-model="selectAll">
                              </o-checkbox>
                            </th>
                          </template>
                          <template v-for="column in columns">
                            <o-table-sort
                              :order="sortOrders[column.key] > 0"
                              :active="sortKey === column.key"
                              @on-click="sortBy(column.key)"
                              v-if="sortable && column.sort">
                              {{ column['label'] }}
                            </o-table-sort>
                            <th v-else>{{ column['label'] }}</th>
                          </template>
                        </tr>
                        <tr v-for="row in totalData" :class="row.className">
                          <template v-if="type === 'radio'">
                            <td>
                              <o-radio v-model="id" :current="row.id"></o-radio>
                            </td>
                          </template>
                          <template v-else-if="type === 'checkbox'">
                            <td>
                              <o-checkbox v-model="selected" :current="row.id"></o-checkbox>
                            </td>
                          </template>
                          <td v-for="column in columns">{{ row[column['key']] }}</td>
                        </tr>
                      </o-table>`,

        html2: `<template v-if="parsed">
                        <o-button
                          @on-click="uploadAgain"
                          custom="warning"
                          type="shadow">
                          重新上传
                        </o-button>
                        <br><br>
                        <o-table>
                          <tr slot="thead">
                            <th v-for="column in uploadData['key']">{{ column }}</th>
                          </tr>
                          <tr v-for="row in uploadData['value']">
                            <td v-for="cell in row">{{ cell }}</td>
                          </tr>
                        </o-table>
                      </template>
                      <o-upload
                        @on-success="handlerSuccess"
                        :suffix="['csv', 'xlsx']"
                        @on-error="handlerError"
                        dragable
                        v-else>
                        Click or drag files here to upload
                      </o-upload>`,

        java1: `export default {
                        data () {
                          return {
                            type: '',
                            size: '',
                            custom: '',

                            sortable: false,
                            loading: false,

                            id: '',
                            length: 7,
                            selected: [],
                            selectAll: false,

                            sortKey: 'age',
                            sortOrders: {
                              name: 1,
                              age: 1,
                              height: 1,
                              weight: 1
                            },

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
                            ],
                            typeOptions: [
                              { label: '单选', value: 'radio' },
                              { label: '多选', value: 'checkbox' },
                              { label: '无', value: '' }
                            ],

                            columns: [
                              { key: 'name', label: '姓名', sort: true },
                              { key: 'sex', label: '性别', sort: false },
                              { key: 'age', label: '年龄', sort: true },
                              { key: 'height', label: '身高(cm)', sort: true },
                              { key: 'weight', label: '体重(kg)', sort: true }
                            ],
                            data: [
                              { id: 0, name: 'Leo', sex: '男', age: 26, height: 175, weight: 70 },
                              { id: 1, name: 'Zanilia', sex: '女', age: 29, height: 165, weight: 43 },
                              { id: 2, name: 'Jay Chou', sex: '男', age: 39, height: 171, weight: 60 },
                              { id: 3, name: 'Cecilia Han', sex: '女', age: 35, height: 170, weight: 48 },
                              { id: 4, name: 'Stephen Chow', sex: '男', age: 56, height: 174, weight: 70 },
                              { id: 5, name: 'Zhou Dongyu', sex: '女', age: 26, height: 162, weight: 44 },
                              { id: 6, name: 'Chow Yun Fat', sex: '男', age: 63, height: 182, weight: 54 }
                            ]
                          }
                        },
                        computed: {
                          indeterminate () {
                            return !this.selectAll && this.selected.length > 0
                          },
                          totalData () {
                            let key = this.sortKey;
                            let data = this.data || [];
                            let order = this.sortOrders[key] || 1;
                            if (key) {
                              return data.slice().sort((a, b) => {
                                a = a[key];
                                b = b[key];
                                return (a === b ? 0 : a > b ? 1 : -1) * order;
                              })
                            }
                            return data
                          },
                          selectedData () {
                            return this.totalData.filter(item => {
                              if (this.type === 'radio') {
                                return this.id === item.id
                              } else if (this.type === 'checkbox') {
                                return this.selected.indexOf(item.id) > -1
                              } else {
                                return false
                              }
                            })
                          }
                        },
                        watch: {
                          'selected' (newValue) {
                            this.selectAll = newValue.length > 0 && newValue.length === this.totalData.length
                          }
                        },
                        methods: {
                          sortBy (key) {
                            this.sortKey = key;
                            this.sortOrders[key] = this.sortOrders[key] * -1
                          },
                          selectedAll () {
                            this.selected = !this.selectAll
                              ? []
                              : this.totalData.map(item => item.id)
                          },
                          exportCsv () {
                            let data = this.columns.map(column => column['label'])
                              .reduce((total, item) => total + ',' + item);

                            this.selectedData.forEach(item => {
                              data += '\\n' + item['name'] + ',' + item['sex'] + ',' +
                                item['age'] + ',' + item['height'] + ',' + item['weight']
                            });

                            this.$CSV.download('data.csv', data)
                          },
                          addData () {
                            this.loading = true;

                            let newData = {
                              id: ++this.length,
                              name: 'id_' + this.length,
                              sex: Math.random() > 0.5 ? '男' : '女',
                              age: 20 + ~~ (Math.random() * 30),
                              height: 150 + ~~ (Math.random() * 30),
                              weight: 45 + ~~ (Math.random() * 25)
                            };

                            this.data.push(newData);
                            newData.className = 'new';
                            setTimeout(() => {
                              this.loading = false;
                              delete newData.className
                            }, 3000)
                          },
                          deleteData () {
                            this.selectedData.forEach(item => {
                              this.$set(item, 'className', 'old')
                            });

                            setTimeout(() => {
                              this.type === 'radio'
                                ? this.id = ''
                                : this.selected = [];

                              this.data = this.data.filter(item => item.className !== 'old')
                            }, 3000)
                          }
                        }
                      }`,

        java2: `export default {
                        data () {
                          return {
                            parsed: false,
                            uploadData: null
                          }
                        },
                        methods: {
                          uploadAgain () {
                            this.parsed = false;
                            this.uploadData = null;
                          },
                          handlerSuccess (res) {
                            console.log(1)
                            this.parsed = true;
                            this.uploadData = this.$CSV.parse(res.data)
                          },
                          handlerError () {
                            console.log('文件格式错误，请上传后缀名为 xlsx 或者 csv 的文件')
                          }
                        }
                      }`
      }
    },
    computed: {
      indeterminate () {
        return !this.selectAll && this.selected.length > 0
      },
      totalData () {
        let key = this.sortKey;
        let data = this.data || [];
        let order = this.sortOrders[key] || 1;
        if (key) {
          return data.slice().sort((a, b) => {
            a = a[key];
            b = b[key];
            return (a === b ? 0 : a > b ? 1 : -1) * order;
          })
        }
        return data
      },
      selectedData () {
        return this.totalData.filter(item => {
          if (this.type === 'radio') {
            return this.id === item.id
          } else if (this.type === 'checkbox') {
            return this.selected.indexOf(item.id) > -1
          } else {
            return false
          }
        })
      }
    },
    watch: {
      'selected' (newValue) {
        this.selectAll = newValue.length > 0 && newValue.length === this.totalData.length
      }
    },
    methods: {
      sortBy (key) {
        this.sortKey = key;
        this.sortOrders[key] = this.sortOrders[key] * -1
      },
      selectedAll () {
        this.selected = !this.selectAll
          ? []
          : this.totalData.map(item => item.id)
      },
      exportCSV () {
        let data = this.columns.map(column => column['label'])
          .reduce((total, item) => total + ',' + item);

        this.selectedData.forEach(item => {
          data += '\n' + item['name'] + ',' + item['sex'] + ',' +
            item['age'] + ',' + item['height'] + ',' + item['weight']
        });

        this.$CSV.download('data.csv', data)
      },
      addData () {
        this.loading = true;

        let newData = {
          id: ++this.length,
          name: 'id_' + this.length,
          sex: Math.random() > 0.5 ? '男' : '女',
          age: 20 + ~~ (Math.random() * 30),
          height: 150 + ~~ (Math.random() * 30),
          weight: 45 + ~~ (Math.random() * 25)
        };

        this.data.push(newData);
        newData.className = 'new';
        setTimeout(() => {
          this.loading = false;
          delete newData.className
        }, 3000)
      },
      deleteData () {
        this.selectedData.forEach(item => {
          this.$set(item, 'className', 'old')
        });

        setTimeout(() => {
          this.type === 'radio'
            ? this.id = ''
            : this.selected = [];

          this.data = this.data.filter(item => item.className !== 'old')
        }, 3000)
      },
      uploadAgain () {
        this.parsed = false;
        this.uploadData = null;
      },
      handlerSuccess (res) {
        this.parsed = true;
        this.uploadData = this.$CSV.parse(res.data)
      },
      handlerError () {
        console.log('文件格式错误，请上传后缀名为 xlsx 或者 csv 的文件')
      }
    }
  }
</script>