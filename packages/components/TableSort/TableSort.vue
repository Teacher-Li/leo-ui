<template>
  <th
    @click="$emit('on-click')"
    :class="classes">
    <slot></slot>

    <o-icon
      :type="order ? 'sort-ascending' : 'sort-descending'"
      :class="`${ prefixCls }-icon`"
      size="16">
    </o-icon>

  </th>
</template>

<script>
  import oIcon from '~/components/Icon';

  export default {
    name: 'oTableSort',
    components: { oIcon },
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
        prefixCls: `${ this.$PrefixCls }-table-sort`
      }
    },
    computed: {
      classes () {
        return [
          this.prefixCls,
          {
            active : this.active
          }
        ]
      }
    }
  }
</script>