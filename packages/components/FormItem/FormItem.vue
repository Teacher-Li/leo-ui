<template>
  <div :class="`${ prefixCls }-item`">
    <label
      v-if="label || $slots.label"
      :class="labelClasses"
      :style="labelStyles">
      <slot name="label">{{ label }}</slot>
    </label>
    <div :class="`${ prefixCls }-value`" :style="valueStyles">
      <template v-if="ganged">
        <transition :name="`${ $PrefixCls }-zoom`" mode="out-in">
          <slot v-if="editable"></slot>
          <span v-else :class="{ empty: !value }">{{ value || emptyText }}</span>
        </transition>
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'oFormItem',
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
    data () {
      return {
        prefixCls: `${ this.$PrefixCls }-form`,

        ganged: !this.editable
      }
    },
    computed: {
      labelClasses () {
        return [
          `${ this.prefixCls }-label`,
          {
            required : this.editable && this.required
          }
        ]
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
        this.disabled || this.$emit('on-click', e);
      }
    }
  }
</script>