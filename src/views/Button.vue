<template>
  <div class="form-page">

    <Header></Header>

    <div class="body">
      <div class="wrapper">

        <Sider></Sider>

        <div class="content">
          <h1>Button 按钮</h1>
          <div class="anchor">
            <h2>代码示例</h2>
          </div>
          <div class="card">
            <div class="demo">
              <div class="leo-btn">default</div>
              <div class="leo-btn" color="primary">primary</div>
              <div class="leo-btn" color="info">info</div>
              <div class="leo-btn" color="success">success</div>
              <div class="leo-btn" color="warning">warning</div>
              <div class="leo-btn" color="error">error</div>
              <br><br>
              <div class="leo-btn" dashed>default</div>
              <div class="leo-btn" color="primary" bg>primary</div>
              <div class="leo-btn" color="info" bg>info</div>
              <div class="leo-btn" color="success" bg>success</div>
              <div class="leo-btn" color="warning" bg>warning</div>
              <div class="leo-btn" color="error" bg>error</div>
              <br><br>
              <div class="leo-btn" round>default</div>
              <div class="leo-btn" color="primary" bg round>primary</div>
              <div class="leo-btn" color="info" round>info</div>
              <div class="leo-btn" color="success" bg round>success</div>
              <div class="leo-btn" color="warning" round>warning</div>
              <div class="leo-btn" color="error" bg round>error</div>
              <br><br>
              <div class="leo-btn" dashed round>default</div>
              <div class="leo-btn" color="primary" bg shadow>primary</div>
              <div class="leo-btn" color="info" bg shadow>info</div>
              <div class="leo-btn" color="success" bg round shadow>success</div>
              <div class="leo-btn" color="warning" bg round shadow>warning</div>
              <div class="leo-btn" color="error" bg shadow>error</div>
              <div class="title"><span>按钮类型</span></div>
              <div class="description">
                按钮类型有：默认按钮、虚线按钮、圆角按钮、阴影按钮以及五种颜色按钮。<br>
                添加属性 <code>bg</code>，可设置按钮的背景色。<br>
                添加属性 <code>round</code>，可设置为圆角按钮。<br>
                添加属性 <code>dashed</code>，可设置为虚线按钮。<br>
                添加属性 <code>shadow</code>，必须和属性 <code>bg</code> 以及 <code>color</code> 一起用，可设置为阴影按钮。<br>
                通过设置 <code>color</code> 为 <code>primary</code>、 <code>info</code>、 <code>success</code>、 <code>warning</code>、 <code>error</code> 创建不同样式的按钮，不设置为默认按钮。
              </div>
            </div>
            <div class="code">
              <textarea type="text" :value="code1" id="code1"></textarea>
              <a @click="copy($event, 'code1')">Copy</a>
              <pre>
                {{ code1 }}
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="demo">
              <div class="leo-btn" dashed style="width: 200px">default</div>
              <br><br>
              <div class="leo-btn" color="primary" long>primary</div>
              <br><br>
              <div class="leo-btn" color="info" bg long>info</div>
              <br><br>
              <div class="leo-btn" color="success" round long>success</div>
              <br><br>
              <div class="leo-btn" color="warning" bg shadow long>warning</div>
              <br><br>
              <div class="leo-btn" color="error" bg round shadow long>error</div>
              <div class="title"><span>长按钮</span></div>
              <div class="description">
                添加属性 <code>long</code>，可将按钮的宽度设置为100%。<br>
                也可以直接通过添加 <code>style</code> 来设置更细节的样式，比如定宽。
              </div>
            </div>
            <div class="code">
              <textarea type="text" :value="code2" id="code2"></textarea>
              <a @click="copy($event, 'code2')">Copy</a>
              <pre>
                {{ code2 }}
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="demo">
              <div class="leo-btn" dashed disabled>default</div>
              <div class="leo-btn" color="primary" disabled>primary</div>
              <div class="leo-btn" color="info" bg disabled>info</div>
              <div class="leo-btn" color="success" round disabled>success</div>
              <div class="leo-btn" color="warning" bg shadow disabled>warning</div>
              <div class="leo-btn" color="error" bg round shadow disabled>error</div>
              <br><br>
              <div class="leo-btn" color="error" bg round shadow long disabled>error</div>
              <div class="title"><span>禁用状态</span></div>
              <div class="description">
                添加属性 <code>disabled</code>，可将按钮设置为不可用状态。
              </div>
            </div>
            <div class="code">
              <textarea type="text" :value="code3" id="code3"></textarea>
              <a @click="copy($event, 'code3')">Copy</a>
              <pre>
                {{ code3 }}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Sider from 'components/Sider';
  import Header from 'components/Header';

  export default {
    name: 'Button',
    components: {
      Sider,
      Header,
    },
    data () {
      return {
        code1: `<div class="leo-btn">default</div>
                <div class="leo-btn" color="primary">primary</div>
                <div class="leo-btn" color="info">info</div>
                <div class="leo-btn" color="success">success</div>
                <div class="leo-btn" color="warning">warning</div>
                <div class="leo-btn" color="error">error</div>
                <br><br>
                <div class="leo-btn" dashed>default</div>
                <div class="leo-btn" color="primary" bg>primary</div>
                <div class="leo-btn" color="info" bg>info</div>
                <div class="leo-btn" color="success" bg>success</div>
                <div class="leo-btn" color="warning" bg>warning</div>
                <div class="leo-btn" color="error" bg>error</div>
                <br><br>
                <div class="leo-btn" round>default</div>
                <div class="leo-btn" color="primary" bg round>primary</div>
                <div class="leo-btn" color="info" round>info</div>
                <div class="leo-btn" color="success" bg round>success</div>
                <div class="leo-btn" color="warning" round>warning</div>
                <div class="leo-btn" color="error" bg round>error</div>
                <br><br>
                <div class="leo-btn" dashed round>default</div>
                <div class="leo-btn" color="primary" bg shadow>primary</div>
                <div class="leo-btn" color="info" bg shadow>info</div>
                <div class="leo-btn" color="success" bg round shadow>success</div>
                <div class="leo-btn" color="warning" bg round shadow>warning</div>
                <div class="leo-btn" color="error" bg shadow>error</div>`,

        code2: `<div class="leo-btn" dashed style="width: 200px">default</div>
                <br><br>
                <div class="leo-btn" color="primary" long>primary</div>
                <br><br>
                <div class="leo-btn" color="info" bg long>info</div>
                <br><br>
                <div class="leo-btn" color="success" round long>success</div>
                <br><br>
                <div class="leo-btn" color="warning" bg shadow long>warning</div>
                <br><br>
                <div class="leo-btn" color="error" bg round shadow long>error</div>`,

        code3: `<div class="leo-btn" dashed disabled>default</div>
                <div class="leo-btn" color="primary" bg disabled>primary</div>
                <div class="leo-btn" color="info" round disabled>info</div>
                <div class="leo-btn" color="success" disabled>success</div>
                <div class="leo-btn" color="warning" bg disabled>warning</div>
                <div class="leo-btn" color="error" round disabled>error</div>
                <br><br>
                <div class="leo-btn" color="error" bg round shadow long disabled>error</div>`,

        code4: `<div class="leo-form" label-position="left">
                  <div class="leo-form-item">
                    <label class="leo-form-label">用户账户：</label>
                    <input type="text" class="leo-form-value leo-form-input">
                  </div>
                  <div class="leo-form-item">
                    <label class="leo-form-label">用户密码：</label>
                    <input type="password" class="leo-form-value leo-form-input">
                  </div>
                </div>
                <div class="leo-form" label-position="top">
                  <div class="leo-form-item">
                    <label class="leo-form-label">用户账户：</label>
                    <input type="text" class="leo-form-value leo-form-input">
                  </div>
                  <div class="leo-form-item">
                    <label class="leo-form-label">用户密码：</label>
                    <input type="password" class="leo-form-value leo-form-input">
                  </div>
                </div>
                <div class="leo-form" label-position="right-top">
                  <div class="leo-form-item">
                    <label class="leo-form-label">用户简介：</label>
                    <textarea class="leo-form-value leo-form-input" style="height: 64px;"></textarea>
                  </div>
                </div>`,

        code5: ``,

        code6: ``,

        code7: ``,

        code8: ``,
      }
    },
    methods: {
      copy (e, id) {
        let tag = e.target;
        if (!tag.className) {
          document.querySelector('#' + id).select();
          document.execCommand("Copy");

          tag.innerHTML = 'Copied';
          tag.className = 'success';
          setTimeout(() => {
            tag.className = '';
            tag.innerHTML = 'Copy';
          }, 5000);
        }
      }
    }
  }
</script>
