<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  import { oneOf, getStyle } from '../../utils/assist';

  export default {
    name: 'CarouselsItem',
    props: {

    },
    inject: ['gutter'],
    mounted () {
      this.$parent.slotChange(parseInt(getStyle(this.$el, 'width')))
    },
    computed: {
      classes () {
        return this.$LEO.prefix + 'carousels-item'
      },
      styles () {
        return this.gutter === 0
          ? {}
          : {
              padding : this.gutter / 2 + 'px'
            }
      }
    },
    methods: {

    }
  }
</script>