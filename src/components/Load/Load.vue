<template>
  <transition :name="fadeName">
    <div v-show="visible" :class="classes">
      <template v-if="type === 'dot'">
        <div :class="dotClasses"><span></span></div>
      </template>
      <template v-else>
        <div :class="circularClasses">
          <svg viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none"></circle>
          </svg>
        </div>
      </template>
      <div :class="textClasses"><slot></slot></div>
    </div>
  </transition>
</template>

<script>
  import { oneOf } from '../../utils/assist';

  export default {
    name: 'Load',
    props: {
      type: {
        validator (value) {
          return oneOf(value, ['dot', 'circular'])
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
    computed: {
      classes () {
        return [
          this.$LEO.prefix + 'load',
          {
            fix    : this.fix,
            visible: this.visible
          }
        ]
      },
      dotClasses () {
        return this.$LEO.prefix + 'load-dot'
      },
      circularClasses () {
        return this.$LEO.prefix + 'load-circular'
      },
      textClasses () {
        return this.$LEO.prefix + 'load-text'
      },
      fadeName () {
        return this.$LEO.prefix + 'fade'
      }
    }
  }
</script>