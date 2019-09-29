import Button from './Button.vue';

/* istanbul ignore next */
Button.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(Button.name, Button);
};

export default Button;