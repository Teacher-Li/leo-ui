import Table from './Table.vue';

/* istanbul ignore next */
Table.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(Table.name, Table);
};

export default Table;