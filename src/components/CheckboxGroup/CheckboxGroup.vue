<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'CheckboxGroup',

    props: {

    },
    computed: {
      classes () {
        return this.$LEO.prefix + 'checkbox-group'
      }
    }
  }
</script>