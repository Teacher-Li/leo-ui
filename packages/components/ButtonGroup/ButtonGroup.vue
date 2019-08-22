<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ButtonGroup',
    props: {
      type: {
        validator (value) {
          return ['bg', 'shadow', 'text', 'dashed', ''].includes(value);
        },
        default: ''
      },
      custom: {
        validator (value) {
          return ['primary', 'info', 'success', 'warning', 'error', ''].includes(value);
        },
        default: ''
      },
      size: {
        validator (value) {
          return ['large', 'small', 'mini', ''].includes(value);
        },
        default: ''
      },
      align: {
        validator (value) {
          return ['left', 'right'].includes(value);
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
          this.prefix,
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
