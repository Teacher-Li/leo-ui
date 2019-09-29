import Select from './Select.vue';

/* istanbul ignore next */
Select.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(Select.name, Select);
};

export default Select;