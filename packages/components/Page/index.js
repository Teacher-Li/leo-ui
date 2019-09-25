import Page from './Page.vue';

/* istanbul ignore next */
Page.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(Page.name, Page);
};

export default Page;