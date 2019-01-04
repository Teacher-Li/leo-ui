<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'RadioGroup',

    props: {

    },
    computed: {
      classes () {
        return this.$LEO.prefix + 'radio-group'
      }
    }
  }
</script>