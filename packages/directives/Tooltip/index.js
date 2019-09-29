import tooltip from './tooltip';

/* istanbul ignore next */
tooltip.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.directive('tooltip', tooltip);
};

export default tooltip;