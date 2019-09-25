import tooltip from './tooltip';

/* istanbul ignore next */
tooltip.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.directive('tooltip', tooltip);
};

export default tooltip;