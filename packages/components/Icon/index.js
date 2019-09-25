import Icon from './Icon.vue';

/* istanbul ignore next */
Icon.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(Icon.name, Icon);
};

export default Icon;