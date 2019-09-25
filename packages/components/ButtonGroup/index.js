import ButtonGroup from './ButtonGroup.vue';

/* istanbul ignore next */
ButtonGroup.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(ButtonGroup.name, ButtonGroup);
};

export default ButtonGroup;