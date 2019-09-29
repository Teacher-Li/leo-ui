import heart from './heart';

/* istanbul ignore next */
heart.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.directive('heart', heart);
};

export default heart;