import dragSelect from './dragSelect';

/* istanbul ignore next */
dragSelect.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.directive('dragSelect', dragSelect);
};

export default dragSelect;