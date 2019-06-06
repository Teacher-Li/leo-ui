<template>
  <svg
    @click="handleClick"
    aria-hidden="true"
    :font-size="size"
    :class="classes"
    :color="color">
    <use :xlink:href="`#${ prefix }-${ type }`"></use>
  </svg>
</template>

<script>
  import { oneOf } from '~/utils/assist';

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
    data () {
      return {
        prefix: `${ this.$LEO.prefix }-icon`
      }
    },
    computed: {
      classes () {
        return [
          `${ this.prefix }`,
          this.custom,
          {
            rotate  : this.rotate,
            disabled: this.disabled
          }
        ]
      }
    },
    methods: {
      handleClick (e) {
        this.disabled || this.$emit('on-click', e);
      }
    }
  }
</script>