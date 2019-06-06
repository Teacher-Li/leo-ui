<template>
  <div :class="`${ prefix }`">
    <div
      :class="`${ prefix }-wrap`"
      :style="wrapStyles"
      v-masonry>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { getStyle } from '~/utils/assist';

  export default {
    name: 'Masonry',
    props: {
      width: {
        type: Number,
        default: 100
      },
      gutter: {
        type: Number,
        default: 0
      }
    },
    provide () {
      return { masonry: this }
    },
    data () {
      return {
        prefix: `${ this.$LEO.prefix }-masonry`,

        top: [],
        left: [],

        height: 0,
        columns: 0
      }
    },
    computed: {
      wrapStyles () {
        let style = {
          height: this.height + 'px'
        };

        return this.gutter === 0
          ? style
          : Object.assign(style, {
              marginLeft : - this.gutter / 2 + 'px',
              marginRight: - this.gutter / 2 + 'px'
            })
      }
    },
    directives: {
      masonry: {
        bind (el, {}, vnode) {
          let self = vnode.context;

          const resizeHandler = () => {
            let width   = parseInt(getStyle(self.$el, 'width'));
            let columns = Math.floor((width + self.gutter) / self.width);

            if (columns !== self.columns) {
              self.top     = [];
              self.left    = [];
              self.height  = 0;
              self.columns = columns;

              for (let i = 0; i < self.columns; i++){
                self.top.push(0);
                self.left.push(i * self.width);
              }

              el.childNodes.forEach(child => {
                let min    = Math.min.apply(Math, self.top);
                let index  = self.top.indexOf(min);
                let top    = self.top[index];
                let left   = self.left[index];
                let height = self.height;

                child.setAttribute("data-index", index);
                child.style.transform = 'scale(1) translate3d('+ left + 'px' +',' + top + 'px' + ',0)';

                self.top[index] += child.offsetHeight;
                self.height = Math.max(height, self.top[index]);
              })
            }
          };

          el.__resize = resizeHandler;
          window.addEventListener('resize', resizeHandler);
        },
        unbind (el, {}) {
          window.removeEventListener('resize', el.__resize);
          delete el.__resize;
        }
      }
    },
    methods: {
      slotAdd (el, val) {
        this.$nextTick(() => {
          let min    = Math.min.apply(Math, this.top);
          let index  = this.top.indexOf(min);
          let top    = this.top[index];
          let left   = this.left[index];
          let height = this.height;

          el.setAttribute("data-index", index);
          el.style.transform = 'scale(1) translate3d('+ left + 'px' +',' + top + 'px' + ',0)';

          this.top[index] += val;
          this.height = Math.max(height, this.top[index]);
        })
      },
      slotDelete (el, val) {
        let index = el.getAttribute('data-index');
        this.top[index] -= val;
        this.height = Math.max.apply(Math, this.top);
      }
    },
    mounted () {
      let width = parseInt(getStyle(this.$el, 'width'));
      this.columns = Math.floor((width + this.gutter) / this.width);

      for (let i = 0; i < this.columns; i++){
        this.top.push(0);
        this.left.push(i * this.width);
      }
    }
  }
</script>