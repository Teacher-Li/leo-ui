<template>
  <div :class="classes">
    <table>
      <thead :class="`${ prefixCls }-head ${ custom }`">
        <slot name="thead"></slot>
      </thead>
      <tbody :class="`${ prefixCls }-body`">
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'oTable',
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
        prefixCls: `${ this.$PrefixCls }-table`
      }
    },
    computed: {
      classes () {
        return [
          this.prefixCls,
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