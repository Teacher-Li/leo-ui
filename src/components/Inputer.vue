<template>
    <input
        :autocomplete="autocomplete"
        @keyup.enter="handleEnter"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :autofocus="autofocus"
        :readonly="readonly"
        :disabled="disabled"
        @input="handleInput"
        @blur="handleBlur"
        class="leo-input"
        :value="value"
        :type="type"
        :size="size">
</template>

<script>
    import { oneOf } from '../utils/assist';

    export default {
        name: 'Inputer',
        model: {
            prop: 'value',
            event: 'change'
        },
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['text', 'password']);
                },
                default: 'text'
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
            size: {
                validator (value) {
                    return oneOf(value, ['large', 'default', 'small']);
                },
                default: 'default'
            },
            autocomplete: {
                validator (value) {
                    return oneOf(value, ['on', 'off']);
                },
                default: 'off'
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
        data () {
            return {}
        },
        watch: {},
        computed: {},
        methods: {
            handleInput (e) {
                this.lazy || this.handleChange(e)
            },
            handleBlur (e) {
                this.lazy && this.handleChange(e)
            },
            handleEnter (e) {
                this.handleBlur(e);
                this.$emit('on-enter', e);
            },
            handleChange (e) {
                let val = e.target.value.trim();

                if (this.parser) val = this.parser(val);
                if (!val.length) val = null;
                e.target.value = val;

                this.$emit('change', val);
                this.$emit('on-change', val);
            }
        }
    }
</script>