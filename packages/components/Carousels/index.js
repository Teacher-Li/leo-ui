import Carousels from './Carousels.vue';

/* istanbul ignore next */
Carousels.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(Carousels.name, Carousels);
};

export default Carousels;