import ButtonGroup from './ButtonGroup.vue';

/* istanbul ignore next */
ButtonGroup.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(ButtonGroup.name, ButtonGroup);
};

export default ButtonGroup;