import FormItem from './FormItem.vue';

/* istanbul ignore next */
FormItem.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(FormItem.name, FormItem);
};

export default FormItem;