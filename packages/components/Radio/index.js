import Radio from './Radio.vue';

/* istanbul ignore next */
Radio.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(Radio.name, Radio);
};

export default Radio;