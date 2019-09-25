import Button from './Button.vue';

/* istanbul ignore next */
Button.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(Button.name, Button);
};

export default Button;