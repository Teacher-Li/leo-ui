<template>
  <div :class="`${ prefixCls }`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'oCheckboxGroup',
    data () {
      return {
        prefixCls: `${ this.$PrefixCls }-checkbox-group`
      }
    }
  }
</script>