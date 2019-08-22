<template>
  <div :class="classes">
    <table>
      <thead :class="`${ prefix }-head ${ custom }`">
        <slot name="thead"></slot>
      </thead>
      <tbody :class="`${ prefix }-body`">
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Table',
    props: {
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
      }
    },
    data () {
      return {
        prefix: `${ this.$LEO.prefix }-table`
      }
    },
    computed: {
      classes () {
        return [
          this.prefix,
          this.size,
          {
            rotate  : this.rotate,
            disabled: this.disabled
          }
        ]
      }
    }
  }
</script>