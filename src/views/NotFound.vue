<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <div class="not-found-title">404</div>
      <div class="not-fond-subtitle">页面没找到</div>
      <div class="not-fond-msg">
        找不到请求的页面 <br/>
        尝试检查网址是否有错误
      </div>
      <router-link class="not-found-btn" to="/">返回主页</router-link>
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1001;
    position: fixed;
    font-weight: 300;
    background: linear-gradient(90deg, #7443ff, #5fa3fb, #4afff7);
  }
  .not-found-content {
    top: 50%;
    left: 50%;
    color: #fff;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  .not-found-title {
    font-size: 180px;
    line-height: 160px;
    font-family: Times New Roman;;
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
    display: block;
    margin-top: 20px;
    line-height: 36px;
    text-align: center;
    border-radius: 18px;
    background-color: #fff;
  }
</style>