<template>
  <div :class="classes">
    <template v-if="type === 'textarea'">
      <textarea
        :autocomplete="autocomplete"
        @keyup.enter="handleEnter"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :readonly="readonly"
        :disabled="disabled"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        :value="value"
        ref="textarea">
      </textarea>
    </template>
    <template v-else>
      <input
        :autocomplete="autocomplete"
        @keyup.enter="handleEnter"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :readonly="readonly"
        :disabled="disabled"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        :value="value"
        :type="type"
        ref="input">
    </template>

    <o-icon
      :class="`${ prefix }-icon`"
      @on-click="handleClear"
      v-if="showIcon"
      type="clear">
    </o-icon>

  </div>
</template>

<script>
  import { oneOf } from '@/utils/assist';

  export default {
    name: 'Input',
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      type: {
        validator (value) {
          return oneOf(value, ['text', 'password', 'textarea'])
        },
        default: 'text'
      },
      size: {
        validator (value) {
          return oneOf(value, ['large', 'small', 'mini', ''])
        },
        default: ''
      },
      formatter: {
        validator (value) {
          return oneOf(value, ['email', 'number', 'phone', 'name', 'mac', ''])
        },
        default: ''
      },
      autocomplete: {
        validator (value) {
          return oneOf(value, ['on', 'off'])
        },
        default: 'off'
      },
      value: {
        type: [String, Number],
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      maxlength: {
        type: Number
      },
      parser: {
        type: Function
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      clearable: {
        type: Boolean,
        default: false
      },
      lazy: {
        type: Boolean,
        default: false
      }
    },
    inject: {
      form: { default: null }
    },
    data () {
      return {
        prefix: `${ this.$LEO.prefix }-input`
      }
    },
    computed: {
      classes () {
        return [
          `${ this.prefix }`,
          this.type === 'textarea'
            ? ''
            : this.form
              ? this.form.size
              : this.size
        ]
      },
      showIcon () {
        return this.type !== 'textarea' && this.clearable && !this.disabled && !this.readonly && this.value
      }
    },
    methods: {
      macDivider (str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
          if (i && i % 2 === 0) result += '-';
          result += str[i];
        }
        return result;
      },
      handleInput (e) {
        let val = e.target.value.trim();

        switch (this.formatter) {
          case 'email':
            val = val.replace(/[^a-zA-Z0-9@_.]/g, '');

            break;
          case 'number':
            val = val.replace(/[^0-9]/g, '');

            break;
          case 'phone':
            val = val.replace(/[^0-9-]/g, '');

            break;
          case 'name':
            val = val.replace(/[^a-zA-Z0-9_.\u4e00-\u9fa5]/g, '');

            break;
          case 'mac':
            let mac = val.replace(/0x/, '')
              .replace(/[^0-9a-fA-F]/g, '')
              .toUpperCase();
            val = this.macDivider(mac);

            break;
          default:
            if (this.parser && val.length > 0) val = this.parser(val);
        }

        e.target.value = val.slice(0, this.maxlength);
        this.lazy || this.handleChange(e);
      },
      handleFocus (e) {
        this.$emit('on-focus', e);
      },
      handleBlur (e) {
        this.$emit('on-blur', e);
        this.lazy && this.handleChange(e);
      },
      handleEnter (e) {
        this.$emit('on-enter', e);
        this.lazy && this.handleChange(e);
      },
      handleClear () {
        let val = this.formatter === 'number' ? null : '';

        this.type === 'textarea'
          ? this.$refs.textarea.focus()
          : this.$refs.input.focus();

        this.$emit('on-clear');
        this.$emit('change', val);
        this.$emit('on-change', val);
      },
      handleChange (e) {
        let val = e.target.value;
        if (this.formatter === 'number') {
          val = val.length > 0 ? Number(val) : null;
          e.target.value = val;
        }

        this.$emit('change', val);
        this.$emit('on-change', val);
      }
    }
  }
</script>