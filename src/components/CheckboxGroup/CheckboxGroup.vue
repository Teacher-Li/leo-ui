<template>
  <div :class="`${ prefix }`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'CheckboxGroup',
    data () {
      return {
        prefix: `${ this.$LEO.prefix }-checkbox-group`
      }
    }
  }
</script>