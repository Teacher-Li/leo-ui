import CheckboxGroup from './CheckboxGroup.vue';

/* istanbul ignore next */
CheckboxGroup.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(CheckboxGroup.name, CheckboxGroup);
};

export default CheckboxGroup;