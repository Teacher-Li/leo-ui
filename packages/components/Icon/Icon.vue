<template>
  <svg
    @click="handleClick"
    aria-hidden="true"
    :font-size="size"
    :class="classes"
    :style="styles">
    <use :xlink:href="`#${ prefixCls }-${ type }`"></use>
  </svg>
</template>

<script>
  export default {
    name: 'oIcon',
    props: {
      custom: {
        validator (value) {
          return ['primary', 'info', 'success', 'warning', 'error', ''].includes(value);
        },
        default: ''
      },
      type: {
        type: String,
        default: ''
      },
      size: {
        type: [Number, String],
        default: 14
      },
      rotate: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      color: String
    },
    data () {
      return {
        prefixCls: `${ this.$PrefixCls }-icon`
      }
    },
    computed: {
      classes () {
        return [
          this.prefixCls,
          this.custom,
          {
            rotate  : this.rotate,
            disabled: this.disabled
          }
        ]
      },
      styles () {
        return this.custom
          ? {}
          : {
              fill: this.color
            }
      }
    },
    methods: {
      handleClick (e) {
        this.disabled || this.$emit('on-click', e);
      }
    }
  }
</script>