<template>
  <th
    @click="$emit('on-click')"
    :class="classes">
    <slot></slot>

    <o-icon
      :type="order ? 'sort-ascending' : 'sort-descending'"
      :class="`${ prefix }-icon`"
      size="16">
    </o-icon>

  </th>
</template>

<script>
  export default {
    name: 'TableSort',
    props: {
      order: {
        type: Boolean,
        default: true
      },
      active: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        prefix: `${ this.$LEO.prefix }-table-sort`
      }
    },
    computed: {
      classes () {
        return [
          `${ this.prefix }`,
          {
            active : this.active
          }
        ]
      }
    }
  }
</script>