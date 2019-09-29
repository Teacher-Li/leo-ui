import CheckboxGroup from './CheckboxGroup.vue';

/* istanbul ignore next */
CheckboxGroup.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(CheckboxGroup.name, CheckboxGroup);
};

export default CheckboxGroup;