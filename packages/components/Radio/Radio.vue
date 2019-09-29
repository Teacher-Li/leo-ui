<template>
  <label :class="classes">
    <input
      @change="handleChange"
      :disabled="disabled"
      :checked="isChecked"
      type="radio">
    <span :class="spanClasses"></span>
    <em v-if="$slots.default"><slot></slot></em>
  </label>
</template>

<script>
  export default {
    name: 'oRadio',
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      current: {
        type: [String, Number],
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        prefixCls: `${ this.$PrefixCls }-radio`
      }
    },
    computed: {
      classes () {
        return [
          this.prefixCls,
          {
            'disabled': this.disabled
          }
        ]
      },
      spanClasses () {
        return {
          'checked': this.isChecked,
          'disabled': this.disabled
        }
      },
      isChecked () {
        return this.value === this.current
      }
    },
    methods: {
      handleChange (e) {
        let val = e.target.checked
          ? this.current
          : '';

        this.$emit('change', val);
        this.$emit('on-change', val);
      }
    }
  }
</script>