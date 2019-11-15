<template>
  <div class="loading-page">
    <h1>Masonry 瀑布流</h1>
    <div class="anchor">
      <h2>Examples</h2>
    </div>
    <div class="card" vertical>
      <div class="demo">
        <div class="example">
          <o-masonry :gutter="10">
            <template v-for="item in list">
              <o-masonry-item>
                <div
                  :style="{ backgroundColor: item['color'], height: item['height'] + 'px' }"
                  style="border-radius: 3px;box-shadow: 0 1px 6px rgba(0, 0, 0, .2)">
                </div>
              </o-masonry-item>
            </template>
          </o-masonry>
        </div>
        <div class="title"><span>基本用法</span></div>
        <div class="description">
          瀑布流基本用法
        </div>
      </div>
      <div class="code" :class="{ visible : visible1 }">
        <div class="html">
          <a @click="copy">Copy</a>
          <textarea :value="html1"></textarea>
          <pre><code v-html="HLHTML(html1)"></code></pre>
        </div>
        <div class="js">
          <a @click="copy">Copy</a>
          <textarea :value="java1"></textarea>
          <pre><code v-html="HTJAVA(java1)"></code></pre>
        </div>
      </div>
      <div class="more" :class="{ open: visible1 }" @click="visible1 = !visible1"></div>
    </div>
    <div class="card" vertical>
      <div class="demo">
        <div class="example">

          <o-load :visible="loading" fix></o-load>

          <o-form :label-width="60" inline>
            <o-form-item label="关键词">
              <o-input
                @on-enter="handlerSearch"
                style="width: 320px"
                v-model="word">
              </o-input>
            </o-form-item>
            <o-form-item>
              <o-button
                @on-click="handlerClear"
                custom="warning"
                type="shadow">
                清空所有
              </o-button>
            </o-form-item>
          </o-form>
          <br>
          <o-masonry :width="200" :gutter="10">
            <template v-for="image in images">
              <o-masonry-item>
                <img :src="image" alt="图片" style="width: 100%">
              </o-masonry-item>
            </template>
          </o-masonry>
        </div>
        <div class="title"><span>小功能</span></div>
        <div class="description">
          搜索图片(百度、天行资源)
        </div>
      </div>
      <div class="code" :class="{ visible : visible2 }">
        <div class="html">
          <a @click="copy">Copy</a>
          <textarea :value="html2"></textarea>
          <pre><code v-html="HLHTML(html2)"></code></pre>
        </div>
        <div class="js">
          <a @click="copy">Copy</a>
          <textarea :value="java2"></textarea>
          <pre><code v-html="HTJAVA(java2)"></code></pre>
        </div>
      </div>
      <div class="more" :class="{ open: visible2 }" @click="visible2 = !visible2"></div>
    </div>
    <div class="anchor">
      <h2>API</h2>
    </div>
    <div class="anchor">
      <h3>Masonry props</h3>
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
      <h3>MasonryItem slot</h3>
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
        visible1: false,
        visible2: false,

        loading: false,

        word: '赵丽颖',

        images: [],
        page: 0,

        propsTbody: [
          {
            label: 'width',
            type: 'Number',
            introduce: '设置单列宽度，单位 <em>px</em>',
            default: '100'
          }, {
            label: 'gutter',
            type: 'Number',
            introduce: '间距，单位 <em>px</em>，左右平分',
            default: '0'
          }
        ],

        slotTbody: [
          {
            name: '无',
            introduce: '内容'
          }
        ],

        html1: `<o-masonry :gutter="10">
  <template v-for="item in list">
    <o-masonry-item>
      <div :style="{ backgroundColor: item['color'], height: item['height'] + 'px' }">
      </div>
    </o-masonry-item>
  </template>
</o-masonry>`,

        html2: `<o-load :visible="loading" fix></o-load>
<o-form :label-width="60" inline>
  <o-form-item label="关键词">
    <o-input
      @on-enter="handlerSearch"
      v-model="word">
    </o-input>
  </o-form-item>
  <o-form-item>
    <o-button
      @on-click="handlerClear"
      custom="warning"
      type="shadow">
      清空所有
    </o-button>
  </o-form-item>
</o-form>
<br>
<o-masonry :width="200" :gutter="10">
  <template v-for="image in images">
    <o-masonry-item>
      <img :src="image" alt="图片" style="width: 100%">
    </o-masonry-item>
  </template>
</o-masonry>`,

        java1: `export default {
  computed: {
    list () {
      return new Array(20).fill(null).map(() => {
        return {
          height: 50 + ~~ (Math.random() * 100),
          color: '#' + (~~ (Math.random() * (1 << 24))).toString(16)
        }
      })
    }
  }
}`,

        java2: `export default {
  data () {
    return {
      loading: false,

      word: '赵丽颖',

      images: [],
      page: 0
    }
  },
  methods: {
    handlerSearch () {
      this.loading = true;

      this.ajax({
        method: 'GET',
        url: 'http://112.74.174.31:5235/api/image/',
        data: {
          num: 10,
          word: this.word,
          page: ++this.page
        },
        success: res => { this.showImages(res['Data']) }
      })
    },
    ajax (opt) {
      opt = opt || {};
      opt.method = opt.method.toUpperCase() || 'POST';
      opt.url = opt.url || '';
      opt.async = opt.async || true;
      opt.data = opt.data || null;
      opt.success = opt.success || function () {};

      let xmlHttp = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
      let params = [];

      for (let key in opt.data) params.push(key + '=' + opt.data[key]);

      let postData = params.join('&');
      if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        xmlHttp.send(postData);
      } else if (opt.method.toUpperCase() === 'GET') {
        xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
        xmlHttp.send(null);
      }

      xmlHttp.onreadystatechange = () => {
        xmlHttp.readyState === 4
        && xmlHttp.status === 200
        && opt.success(JSON.parse(xmlHttp.responseText))
      }
    },
    showImages (images, list, index) {
      list  = list || [];
      index = index || 0;

      if (index < images.length) {
        console.log('第'+ (index + 1) +'张图片');

        let img = new Image();
        img.src = images[index];

        img.onerror = () => {
          console.log('加载失败');
          this.showImages(images, list, ++index)
        };
        img.onload = () => {
          list.push(images[index]);
          this.showImages(images, list, ++index)
        }
      } else {
        this.loading = false;
        this.images.unshift(...list)
      }
    },
    handlerClear () {
      this.page = 0;
      this.images = []
    }
  }
}`

      }
    },
    computed: {
      list () {
        return new Array(20).fill(null).map(() => {
          return {
            height: 50 + ~~ (Math.random() * 100),
            color: '#' + (~~ (Math.random() * (1 << 24))).toString(16)
          }
        })
      }
    },
    methods: {
      handlerSearch () {
        this.loading = true;

        let word = '';
        let validator = this.word.match(/^leo-/);
        if (validator) word = this.word.replace(/^leo-/, '');

        validator ? this.TXApi(word) : this.BDApi(word)
      },
      BDApi (word) {
        this.ajax({
          method: 'GET',
          url: 'http://112.74.174.31:5235/api/image/',
          data: {
            num: 10,
            word: word,
            page: ++this.page
          },
          success: res => {
            !res['Status']
              ? this.TXApi(word)
              : this.showImages(res['Data'])
          }
        })
      },
      TXApi (word) {
        this.ajax({
          method: 'GET',
          url: 'https://api.tianapi.com/meinv/',
          data: {
            num: 10,
            word: word || '美女',
            key: '895a630b5f7e9ad87e93c6751cf5b399'
          },
          success: res => {
            this.showImages(res.newslist.map(item => item.picUrl))
          }
        })
      },
      ajax (opt) {
        opt = opt || {};
        opt.method = opt.method.toUpperCase() || 'POST';
        opt.url = opt.url || '';
        opt.async = opt.async || true;
        opt.data = opt.data || null;
        opt.success = opt.success || function () {};

        let xmlHttp = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        let params = [];

        for (let key in opt.data) params.push(key + '=' + opt.data[key]);

        let postData = params.join('&');
        if (opt.method.toUpperCase() === 'POST') {
          xmlHttp.open(opt.method, opt.url, opt.async);
          xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
          xmlHttp.send(postData);
        } else if (opt.method.toUpperCase() === 'GET') {
          xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
          xmlHttp.send(null);
        }

        xmlHttp.onreadystatechange = () => {
          xmlHttp.readyState === 4
          && xmlHttp.status === 200
          && opt.success(JSON.parse(xmlHttp.responseText))
        }
      },
      showImages (images, list, index) {
        list  = list || [];
        index = index || 0;

        if (index < images.length) {
          console.log('第'+ (index + 1) +'张图片');

          let img = new Image();
          img.src = images[index];

          img.onerror = () => {
            console.log('加载失败');
            this.showImages(images, list, ++index)
          };
          img.onload = () => {
            list.push(images[index]);
            this.showImages(images, list, ++index)
          }
        } else {
          this.loading = false;
          this.images.unshift(...list)
        }
      },
      handlerClear () {
        this.page = 0;
        this.images = []
      }
    }
  }
</script>