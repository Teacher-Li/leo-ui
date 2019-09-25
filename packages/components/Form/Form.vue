<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'oForm',
    props: {
      labelPlacement: {
        validator (value) {
          return ['top', 'top-left', 'top-right', 'right', 'bottom-left', 'bottom-right', 'left'].includes(value);
        },
        default: 'right'
      },
      size: {
        validator (value) {
          return ['large', 'small', 'mini', ''].includes(value);
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
    data () {
      return {
        prefix: `${ this.$prefix }-form`
      }
    },
    computed: {
      classes () {
        return [
          this.prefix,
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