import Page from './Page.vue';

/* istanbul ignore next */
Page.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(Page.name, Page);
};

export default Page;