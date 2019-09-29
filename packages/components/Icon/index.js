import Icon from './Icon.vue';

/* istanbul ignore next */
Icon.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(Icon.name, Icon);
};

export default Icon;