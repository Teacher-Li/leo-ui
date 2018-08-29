<template>
  <div class="not-found-page">
    <div class="not-found-container">
      <div class="not-found-content">
        <div class="not-found-title">404</div>
        <div class="not-fond-subtitle">页面没找到</div>
        <div class="not-fond-msg">
          找不到请求的页面 <br />
          尝试检查网址是否有错误
        </div>
        <router-link class="not-found-btn" to="/">返回主页</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NotFound'
  }
</script>

<style scoped>
  .not-found-container {
    width: 100%;
    font-weight: 300;
    height: calc(100vh);
    background: linear-gradient(90deg, #7443ff, #5fa3fb, #4afff7);
  }
  .not-found-content {
    position: fixed;
    left: 50%;
    top: 50%;
    color: #fff;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  .not-found-title {
    font-size: 180px;
    line-height: 160px;
    letter-spacing: -5px;
  }
  .not-fond-subtitle {
    font-size: 30px;
    line-height: 72px;
  }
  .not-fond-msg {
    font-size: 14px;
    line-height: 26px;
  }
  .not-found-btn {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 30px;
    border-radius: 20px;
    background-color: #fff;
  }
</style>
