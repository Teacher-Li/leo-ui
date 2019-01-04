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
    name: 'Radio',
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
    computed: {
      classes () {
        return [
          this.$LEO.prefix + 'radio',
          {
            'disabled': this.disabled
          }
        ]
      },
      isChecked () {
        return this.value === this.current
      },
      spanClasses () {
        return {
          'checked': this.isChecked,
          'disabled': this.disabled
        }
      }
    },
    methods: {
      handleChange (e) {
        let val = e.target.checked
          ? this.current
          : '';

        this.$emit('change', val);
        this.$emit('on-change', val)
      }
    }
  }
</script>