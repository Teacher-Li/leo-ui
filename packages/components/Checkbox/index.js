import Checkbox from './Checkbox.vue';

/* istanbul ignore next */
Checkbox.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(Checkbox.name, Checkbox);
};

export default Checkbox;