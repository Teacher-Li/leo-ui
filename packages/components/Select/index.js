import Select from './Select.vue';

/* istanbul ignore next */
Select.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(Select.name, Select);
};

export default Select;