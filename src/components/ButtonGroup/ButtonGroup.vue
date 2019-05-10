<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  import { oneOf } from '../../utils/assist';

  export default {
    name: 'ButtonGroup',
    props: {
      type: {
        validator (value) {
          return oneOf(value, ['bg', 'shadow', 'text', 'dashed', ''])
        },
        default: ''
      },
      custom: {
        validator (value) {
          return oneOf(value, ['primary', 'info', 'success', 'warning', 'error', ''])
        },
        default: ''
      },
      size: {
        validator (value) {
          return oneOf(value, ['large', 'small', 'mini', ''])
        },
        default: ''
      },
      align: {
        validator (value) {
          return oneOf(value, ['left', 'right']);
        },
        default: 'left'
      },
      round: {
        type: Boolean,
        default: false
      },
      long: {
        type: Boolean,
        default: false
      }
    },
    inject: {
      form: { default: null }
    },
    data () {
      return {
        prefix: `${ this.$LEO.prefix }-button-group`
      }
    },
    computed: {
      classes () {
        return [
          `${ this.prefix }`,
          this.type,
          this.custom,
          this.long ? '' : this.align,
          this.form ? this.form.size : this.size,
          {
            long    : this.long,
            round   : this.round && this.type !== 'text',
            primary : ['bg', 'shadow'].indexOf(this.type) > -1 && !this.custom
          }
        ]
      }
    }
  }
</script>
