import Input from './Input.vue';

/* istanbul ignore next */
Input.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(Input.name, Input);
};

export default Input;