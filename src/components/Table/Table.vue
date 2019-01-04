<template>
  <div :class="classes">
    <table>
      <thead :class="theadClasses">
        <slot name="thead"></slot>
      </thead>
      <tbody :class="tbodyClasses">
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { oneOf } from '../../utils/assist';

  export default {
    name: 'Table',
    props: {
      custom: {
        validator (value) {
          return oneOf(value, ['primary', 'info', 'success', 'warning', 'error', ''])
        },
        default: 'primary'
      },
      size: {
        validator (value) {
          return oneOf(value, ['large', 'small', 'mini', ''])
        },
        default: ''
      }
    },
    computed: {
      classes () {
        return [
          this.$LEO.prefix + 'table',
          this.size,
          {
            rotate  : this.rotate,
            disabled: this.disabled
          }
        ]
      },
      theadClasses () {
        return [this.$LEO.prefix + 'table-head', this.custom]
      },
      tbodyClasses () {
        return this.$LEO.prefix + 'table-body'
      }
    },
    methods: {

    }
  }
</script>