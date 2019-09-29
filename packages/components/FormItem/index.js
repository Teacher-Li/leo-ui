import FormItem from './FormItem.vue';

/* istanbul ignore next */
FormItem.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(FormItem.name, FormItem);
};

export default FormItem;