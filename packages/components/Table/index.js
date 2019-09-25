import Table from './Table.vue';

/* istanbul ignore next */
Table.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(Table.name, Table);
};

export default Table;