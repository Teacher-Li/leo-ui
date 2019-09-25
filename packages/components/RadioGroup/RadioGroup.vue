<template>
  <div :class="`${ prefix }`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'oRadioGroup',
    data () {
      return {
        prefix: `${ this.$prefix }-radio-group`
      }
    }
  }
</script>