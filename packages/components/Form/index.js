import Form from './Form.vue';

/* istanbul ignore next */
Form.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(Form.name, Form);
};

export default Form;