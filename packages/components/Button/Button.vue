<template>
  <div
    @click="handleClick"
    :class="classes">
    <template v-if="loading">

      <o-icon type="loading" :size="iconSize" rotate></o-icon>

    </template>
    <template v-else-if="icon">

      <o-icon :type="icon" :size="iconSize"></o-icon>

    </template>
    <slot></slot>
  </div>
</template>

<script>
  import { oneOf } from '~/utils/assist';

  export default {
    name: 'Button',
    props: {
      type: {
        validator (value) {
          return oneOf(value, ['bg', 'shadow', 'text', 'dashed', ''])
        },
        default: ''
      },
      custom: {
        validator (value) {
          return oneOf(value, ['primary', 'info', 'success', 'warning', 'error', ''])
        },
        default: ''
      },
      size: {
        validator (value) {
          return oneOf(value, ['large', 'small', 'mini', ''])
        },
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      iconSize: {
        type: [Number, String]
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      active: {
        type: Boolean,
        default: false
      },
      round: {
        type: Boolean,
        default: false
      },
      long: {
        type: Boolean,
        default: false
      }
    },
    inject: {
      form: { default: null }
    },
    data () {
      return {
        prefix: `${ this.$LEO.prefix }-button`
      }
    },
    computed: {
      classes () {
        return [
          `${ this.prefix }`,
          this.type,
          this.form ? this.form.size : this.size,
          this.disabled && !this.type ? '' : this.custom,
          {
            long     : this.long,
            disabled : this.disabled,
            round    : this.round && this.type !== 'text',
            primary  : ['bg', 'shadow'].indexOf(this.type) > -1 && !this.custom,
            active   : this.active && !this.custom && ['bg', 'shadow'].indexOf(this.type) < 0
          }
        ]
      }
    },
    methods: {
      handleClick (e) {
        this.disabled || this.loading || this.$emit('on-click', e);
      }
    }
  }
</script>