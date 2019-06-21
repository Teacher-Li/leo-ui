<template>
  <transition :name="`${ $LEO.prefix }-fade`">
    <div v-show="visible" :class="classes">
      <template v-if="type === 'dot'">
        <div :class="`${ prefix }-dot`"><span></span></div>
      </template>
      <template v-else>
        <div :class="`${ prefix }-circular`">
          <svg viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none"></circle>
          </svg>
        </div>
      </template>
      <div :class="`${ prefix }-text`"><slot></slot></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Load',
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
        prefix: `${ this.$LEO.prefix }-load`
      }
    },
    computed: {
      classes () {
        return [
          `${ this.prefix }`,
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