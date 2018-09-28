<template>
    <div
        v-click-outside.capture="close"
        :class="{ open: visible }"
        :placement="placement"
        :disabled="disabled"
        class="leo-select"
        @click="open">
        <div class="leo-select-value">{{ selected }}</div>
        <i class="leo-select-icon">&nbsp;</i>
        <transition name="leo-drop">
            <div class="leo-select-list" v-show="visible">
                <div
                    :class="{ active: item.value === value }"
                    @click="change(item.value)"
                    class="leo-select-item"
                    v-for="item in list">
                    {{ item.label }}
                </div>
                <div v-if="!list.length" class="leo-select-no-found">无数据</div>
            </div>
        </transition>
    </div>
</template>

<script>
    import { oneOf } from '../utils/assist';
    import { directive as clickOutside} from 'v-click-outside-x';

    export default {
        name: 'Selector',
        directives: { clickOutside },
        model: {
            prop: 'value',
            event: 'change'
        },
        props: {
            options: {
                type: Array,
                required: true
            },
            value: {
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'bottom']);
                },
                default: 'bottom'
            }
        },
        data () {
            return {
                visible: false
            }
        },
        watch: {

        },
        computed: {
            list () {
                let options = this.options;
                return !options.some(option => typeof option !== 'object')
                    ? options
                    : options.map(option => {
                        return { label: option, value: option }
                    })
            },
            selected () {
                let selected = '';
                this.list.forEach(item => {
                    if (item.value === this.value) selected = item.label
                });

                return selected
            }
        },
        methods: {
            open () {
              if (!this.disabled) this.visible = !this.visible
            },
            close () {
                if (this.visible) this.visible = false
            },
            change (val) {
                this.$emit('change', val);
                this.$emit('on-change', val)
            }
        }
    }
</script>