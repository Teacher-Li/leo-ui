<template>
  <div id="app">
    <!--<o-button>123</o-button>-->
    <div ref="live" :class="['live', { zoom: zoom }]">
      <div class="live-form">
        <o-form size="small" :labelWidth="0" inline>
          <o-form-item>
            <o-select style="width: 80px" v-model="option" @on-change="change" :options="options"></o-select>
          </o-form-item>
          <o-form-item>
            <o-input style="width: 240px" v-model="value" @on-enter="send"></o-input>
            <o-button @on-click="send" type="text">发送</o-button>
          </o-form-item>
        </o-form>
      </div>
    </div>
    <o-button @on-click="handleZoom" type="shadow">{{ zoom ? '缩小' : '放大' }}</o-button>
    <o-button @on-click="restore" type="shadow">还原</o-button>
  </div>
</template>

<script>
  // import { Barrage } from '../packages/index';

  export default {
    name: 'app',
    data () {
      return {
        zoom: true,

        value: '',
        option: 'level-1',
        options: ['level-1', 'level-2', 'level-4']
      }
    },
    methods: {
      send () {
        if (this.value) {
          this.$Barrage.shoot(this.value);
          this.value = '';
        }
      },
      change () {
        this.$Barrage.config({
          level: + this.option.slice(-1)
        })
      },
      handleZoom () {
        // this.zoom = !this.zoom;
        // this.$nextTick(() => this.$Barrage.resize());
        this.$Indicator.destroy()
        this.$Barrage.destroy()
      },
      restore () {
        this.$Indicator.init();
        this.$Barrage.init();
      }
    },
    mounted () {
      this.$Indicator.init();
      this.$Barrage.init(this.$refs.live);
    }
  }
</script>

<style lang="less">
  .live {
    width: 500px;
    height: 280px;
    margin: 0 auto;
    max-width: 900px;
    position: relative;
    background-color: #eee;
    border: 1px solid #d2d2d2;
    &.zoom {
      width: 900px;
      height: 500px;
    }
    &-form {
       left: 50%;
       bottom: 0;
       width: 80%;
       position: absolute;
       transform: translateX(-50%);
      .leo-button {
        right: 0;
        position: absolute;
        &.shadow {

        }
      }
    }
  }
</style>