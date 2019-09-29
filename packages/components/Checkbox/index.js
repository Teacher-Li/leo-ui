import Checkbox from './Checkbox.vue';

/* istanbul ignore next */
Checkbox.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(Checkbox.name, Checkbox);
};

export default Checkbox;