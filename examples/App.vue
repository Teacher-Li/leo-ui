<template>
  <div id="app">
    <!--<o-button>123</o-button>-->
    <img v-for="item in list" :src="item.src" :preview="item.pid" :data-preview="JSON.stringify(item)">
  </div>
</template>

<script>
  import { Preview } from '../packages/index';

  export default {
    name: 'app',
    data () {
      return {
        list: [
          {
            pid: 1,
            // width: 600,
            // height: 400,
            // title: '图片1',
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            large: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
          },
          {
            pid: 1,
            // width: 600,
            // height: 400,
            // title: '图片2',
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            large: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg'
          }
        ]
      }
    },
    methods: {
      handleClose () {
        console.log('close event')
      }
    },
    mounted () {
      Preview.config({
        shareEl: false
      }).init()
    }
  }
</script>

<style>

</style>