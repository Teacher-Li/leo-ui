<template>
  <div :class="`${ prefix }`" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  import { getStyle } from '~/utils/assist';

  export default {
    name: 'CarouselsItem',
    inject: ['gutter'],
    data () {
      return {
        prefix: `${ this.$LEO.prefix }-carousels-item`
      }
    },
    computed: {
      styles () {
        return this.gutter === 0
          ? {}
          : {
              padding : this.gutter / 2 + 'px'
            }
      }
    },
    mounted () {
      this.$parent.slotChange(parseInt(getStyle(this.$el, 'width')));
    }
  }
</script>