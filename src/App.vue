<template>
  <div id="app">

    <Header></Header>

    <div class="body">
      <div class="wrapper">

        <Sider></Sider>

        <div class="content">
          <transition name="document-stack" mode="out-in" appear>
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Sider from './components/Sider.vue';
  import Header from './components/Header.vue';

  export default {
    name: 'App',
    components: { Sider, Header },
    created () {
      const getHandledValue =
              value => value < 10 ? `0${ value }` : value;
      const getProjectLogo =
              value => `✧⁺⸜(●˙▾˙●)⸝⁺✧
       __
      / /                     _
     / /___   ___      __  __(_)
    / / __ \\/ __ \\ __ / / / / /
   / /  ___/ /_/ /__ / /_/ / /
  /_/\\____/\\____/    \\____/_/ ${ value }`

      const date   = new Date();
      const year   = date.getFullYear();
      const month  = getHandledValue(date.getMonth() + 1);
      const day    = getHandledValue(date.getDate());
      const hour   = getHandledValue(date.getHours());
      const minute = getHandledValue(date.getMinutes());
      const second = getHandledValue(date.getSeconds());
      const time   = `${ year }/${ month }/${ day } ${ hour }:${ minute }:${ second }`;

      console.log(getProjectLogo(time));
    },
    mounted () {
      this.$Indicator.init();
    }
  }
</script>