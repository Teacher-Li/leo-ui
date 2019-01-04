<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  import { getStyle } from '../../utils/assist';

  export default {
    name: 'MasonryItem',
    props: {

    },
    inject: ['masonry'],
    data () {
      return {
        height: 0
      }
    },
    mounted () {
      this.height = parseInt(getStyle(this.$el, 'height'));
      this.$parent.slotAdd(this.$el, this.height)
    },
    computed: {
      classes () {
        return this.$LEO.prefix + 'masonry-item'
      },
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
    methods: {

    },
    beforeDestroy () {
      this.$parent.slotDelete(this.$el, this.height)
    }
  }
</script>