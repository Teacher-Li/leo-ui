<template>
  <div :class="classes">
    <label
      v-if="label || $slots.label"
      :class="labelClasses"
      :style="labelStyles">
      <slot name="label">{{ label }}</slot>
    </label>
    <div :class="valueClasses" :style="valueStyles">
      <transition :name="zoomName" mode="out-in">
        <slot v-if="editable"></slot>
        <span v-else :class="{ empty: !value }">{{ value || emptyText }}</span>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormItem',
    props: {
      label: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      emptyText: {
        type: String,
        default: '空'
      },
      editable: {
        type: Boolean,
        default: true
      },
      required: {
        type: Boolean,
        default: false
      }
    },
    inject: ['form'],
    computed: {
      classes () {
        return this.$LEO.prefix + 'form-item'
      },
      labelClasses () {
        return [
          this.$LEO.prefix + 'form-label',
          {
            required : this.editable && this.required
          }
        ]
      },
      valueClasses () {
        return this.$LEO.prefix + 'form-value'
      },
      zoomName () {
        return this.$LEO.prefix + 'zoom'
      },
      labelStyles () {
        return this.form.labelPlacement === 'top'
          ? {}
          : { width: this.form.labelWidth + 'px' }
      },
      valueStyles () {
        return this.form.labelPlacement === 'top'
          ? {}
          : { paddingLeft: this.form.labelWidth + 'px' }
      }
    },
    methods: {
      handleClick (e) {
        this.disabled || this.$emit('on-click', e)
      }
    }
  }
</script>