<template>
  <label :class="classes">
    <template v-if="isBoolean">
      <input
        @change="handleChange"
        :disabled="disabled"
        :checked="value"
        type="checkbox">
    </template>
    <template v-else>
      <input
        @change="handleChange"
        :disabled="disabled"
        :checked="isChecked"
        type="checkbox">
    </template>
    <span :class="spanClasses"></span>
    <em v-if="$slots.default"><slot></slot></em>
  </label>
</template>

<script>
  import { removeOne } from '../../utils/assist';

  export default {
    name: 'Checkbox',
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: {
        type: [Array, Boolean],
        default: false
      },
      current: {
        type: [String, Number, Boolean],
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      indeterminate: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isBoolean: true
      }
    },
    mounted () {
      this.isBoolean = typeof this.value === 'boolean'
    },
    computed: {
      classes () {
        return [
          this.$LEO.prefix + 'checkbox',
          {
            disabled : this.disabled
          }
        ]
      },
      isChecked () {
        return this.isBoolean
          ? this.value
          : this.value.indexOf(this.current) > -1
      },
      spanClasses () {
        return {
          checked       : this.isChecked,
          disabled      : this.disabled,
          indeterminate : this.indeterminate
        }
      }
    },
    methods: {
      handleChange (e) {
        let val = this.isBoolean
          ? e.target.checked
          : e.target.checked
            ? [...this.value, this.current]
            : removeOne(this.current, this.value);

        this.$emit('change', val);
        this.$emit('on-change', val)
      }
    }
  }
</script>