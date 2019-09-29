import TableSort from './TableSort.vue';

/* istanbul ignore next */
TableSort.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(TableSort.name, TableSort);
};

export default TableSort;