import Load from './Load.vue';

/* istanbul ignore next */
Load.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(Load.name, Load);
};

export default Load;