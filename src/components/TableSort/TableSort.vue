<template>
  <th
    @click="$emit('on-click')"
    :class="classes">
    <slot></slot>

    <o-icon
      :type="order ? 'sortascending' : 'sortdescending'"
      :class="iconClasses"
      size="16">
    </o-icon>

  </th>
</template>

<script>
  import { oneOf } from '../../utils/assist';

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
    computed: {
      classes () {
        return [this.$LEO.prefix + 'table-sort',
          {
            active : this.active
          }
        ]
      },
      iconClasses () {
        return this.$LEO.prefix + 'table-sort-icon'
      }
    },
    methods: {

    }
  }
</script>