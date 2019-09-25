import Input from './Input.vue';

/* istanbul ignore next */
Input.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(Input.name, Input);
};

export default Input;