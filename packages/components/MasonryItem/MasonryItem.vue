<template>
  <div :class="`${ prefixCls }`" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  import { getStyle } from '~/utils/assist';

  export default {
    name: 'oMasonryItem',
    props: {

    },
    inject: ['masonry'],
    data () {
      return {
        prefixCls: `${ this.$PrefixCls }-masonry-item`,

        height: 0
      }
    },
    computed: {
      styles () {
        let style = {
          opacity : 1,
          width   : this.masonry.width + 'px'
        };

        return this.masonry.gutter === 0
          ? style
          : Object.assign(style, {
              padding : this.masonry.gutter / 2 + 'px'
            })
      }
    },
    mounted () {
      this.height = parseInt(getStyle(this.$el, 'height'));
      this.$parent.slotAdd(this.$el, this.height);
    },
    beforeDestroy () {
      this.$parent.slotDelete(this.$el, this.height);
    }
  }
</script>