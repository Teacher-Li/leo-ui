import RadioGroup from './RadioGroup.vue';

/* istanbul ignore next */
RadioGroup.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(RadioGroup.name, RadioGroup);
};

export default RadioGroup;