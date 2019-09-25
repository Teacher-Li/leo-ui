<template>
  <div :class="`${ prefix }`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'oCheckboxGroup',
    data () {
      return {
        prefix: `${ this.$prefix }-checkbox-group`
      }
    }
  }
</script>