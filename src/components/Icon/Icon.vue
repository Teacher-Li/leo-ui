<template>
  <svg
    @click="handleClick"
    aria-hidden="true"
    :font-size="size"
    :class="classes"
    :color="color">
    <use :xlink:href="linkHref"></use>
  </svg>
</template>

<script>
  import { oneOf } from '../../utils/assist';

  export default {
    name: 'Icon',
    props: {
      custom: {
        validator (value) {
          return oneOf(value, ['primary', 'info', 'success', 'warning', 'error', ''])
        },
        default: ''
      },
      type: {
        type: String,
        default: ''
      },
      size: {
        type: [Number, String],
        default: 14
      },
      rotate: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      color: String
    },
    computed: {
      classes () {
        return [
          this.$LEO.prefix + 'icon',
          this.custom,
          {
            rotate  : this.rotate,
            disabled: this.disabled
          }
        ]
      },
      linkHref () {
        return '#' + this.$LEO.prefix + 'icon-' + this.type
      }
    },
    methods: {
      handleClick (e) {
        this.disabled || this.$emit('on-click', e)
      }
    }
  }
</script>