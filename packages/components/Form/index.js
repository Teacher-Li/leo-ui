import Form from './Form.vue';

/* istanbul ignore next */
Form.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(Form.name, Form);
};

export default Form;