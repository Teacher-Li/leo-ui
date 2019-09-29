<template>
  <div :class="`${ prefixCls }`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'oRadioGroup',
    data () {
      return {
        prefixCls: `${ this.$PrefixCls }-radio-group`
      }
    }
  }
</script>