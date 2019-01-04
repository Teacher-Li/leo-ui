<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  import { oneOf } from '../../utils/assist';

  export default {
    name: 'Form',
    props: {
      labelPlacement: {
        validator (value) {
          return oneOf(value, ['top', 'top-left', 'top-right', 'right', 'bottom-left', 'bottom-right', 'left'])
        },
        default: 'right'
      },
      size: {
        validator (value) {
          return oneOf(value, ['large', 'small', 'mini', ''])
        },
        default: ''
      },
      labelWidth: {
        type: Number,
        default: 100
      },
      required: {
        type: Boolean,
        default: false
      },
      inline: {
        type: Boolean,
        default: false
      }
    },
    provide () {
      return { form: this }
    },
    computed: {
      classes () {
        return [
          this.$LEO.prefix + 'form',
          this.labelPlacement,
          this.size,
          {
            inline   : this.inline,
            required : this.required
          }
        ]
      }
    }
  }
</script>