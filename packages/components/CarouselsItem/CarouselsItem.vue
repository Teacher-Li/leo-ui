<template>
  <div :class="`${ prefixCls }`" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  import { getStyle } from '~/utils/assist';

  export default {
    name: 'oCarouselsItem',
    inject: ['gutter'],
    data () {
      return {
        prefixCls: `${ this.$PrefixCls }-carousels-item`
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