<template>
  <div class="loading-page">
    <h1>DragSelect 框选</h1>
    <div class="anchor">
      <h2>Examples</h2>
    </div>
    <div class="card" vertical>
      <div class="demo">
        <div class="example">
          <div
            v-drag-select="{ selector: 'div.test-item', className: ['active'] }"
            class="test">
            <p style="text-align: center;margin-bottom: 20px">在此虚线区域内，按下鼠标，然后拖动鼠标，松开鼠标</p>
            <div
              v-for="(item, i) in list"
              class="test-item">
              测试-{{ i }}
            </div>
          </div>
        </div>
        <div class="title"><span>基本用法</span></div>
        <div class="description">
          框选基本用法
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
      <h3>DragSelect value</h3>
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
    name: 'DragSelect',
    data () {
      return {
        visible: false,

        valueTbody: [
          {
            name: 'selector',
            type: 'String',
            introduce: '定义框选 <em>DOM</em> 节点对象',
            default: '-'
          }, {
            name: 'className',
            type: 'Array',
            introduce: '给被选中的 <em>DOM</em> 节点添加的 <em>class</em> 类名',
            default: '-'
          }
        ],

        html: `<div
  v-drag-select="{ selector: 'div.test-item', className: ['active'] }"
  class="test">
  <div
    v-for="(item, i) in list"
    class="test-item">
    测试-{{ i }}
  </div>
</div>`,

        java: `export default {
  computed: {
    list () {
      return new Array(10).fill(null)
    }
  },
  methods: {
    dragSelected (elements) {
      console.log(elements)
    }
  }
}`
      }
    },
    computed: {
      list () {
        return new Array(10).fill(null)
      }
    },
    methods: {
      dragSelected (elements) {
        console.log(elements);
      }
    }
  }
</script>

<style lang="less">
  .test {
    padding: 20px;
    user-select: none;
    border: 1px dashed #ccc;
    .test-item {
      padding: 0 10px;
      line-height: 26px;
      transition: all .2s;
      &.active {
        background-color: rgba(89, 143, 230, .2);
      }
    }
  }
</style>