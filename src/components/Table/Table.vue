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
  import { oneOf } from '../../utils/assist';

  export default {
    name: 'Table',
    props: {
      custom: {
        validator (value) {
          return oneOf(value, ['primary', 'info', 'success', 'warning', 'error', ''])
        },
        default: 'primary'
      },
      size: {
        validator (value) {
          return oneOf(value, ['large', 'small', 'mini', ''])
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
          `${ this.prefix }`,
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