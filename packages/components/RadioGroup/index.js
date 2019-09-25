import RadioGroup from './RadioGroup.vue';

/* istanbul ignore next */
RadioGroup.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(RadioGroup.name, RadioGroup);
};

export default RadioGroup;