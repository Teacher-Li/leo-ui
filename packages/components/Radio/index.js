import Radio from './Radio.vue';

/* istanbul ignore next */
Radio.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(Radio.name, Radio);
};

export default Radio;