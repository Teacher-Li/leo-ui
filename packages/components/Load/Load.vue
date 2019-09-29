<template>
  <transition :name="`${ $PrefixCls }-fade`">
    <div v-show="visible" :class="classes">
      <template v-if="type === 'dot'">
        <div :class="`${ prefixCls }-dot`"><span></span></div>
      </template>
      <template v-else>
        <div :class="`${ prefixCls }-circular`">
          <svg viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none"></circle>
          </svg>
        </div>
      </template>
      <div :class="`${ prefixCls }-text`"><slot></slot></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'oLoad',
    props: {
      type: {
        validator (value) {
          return ['dot', 'circular'].includes(value);
        },
        default: 'circular'
      },
      visible: {
        type: Boolean,
        default: true
      },
      fix: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        prefixCls: `${ this.$PrefixCls }-load`
      }
    },
    computed: {
      classes () {
        return [
          this.prefixCls,
          {
            fix    : this.fix,
            visible: this.visible
          }
        ]
      }
    },
    watch: {
      visible (newValue) {
        document.body.style.overflow = newValue ? 'hidden' : '';
      }
    }
  }
</script>