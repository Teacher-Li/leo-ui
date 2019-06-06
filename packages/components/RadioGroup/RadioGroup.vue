<template>
  <div :class="`${ prefix }`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'RadioGroup',
    data () {
      return {
        prefix: `${ this.$LEO.prefix }-radio-group`
      }
    }
  }
</script>