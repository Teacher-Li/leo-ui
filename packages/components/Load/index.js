import Load from './Load.vue';

/* istanbul ignore next */
Load.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(Load.name, Load);
};

export default Load;