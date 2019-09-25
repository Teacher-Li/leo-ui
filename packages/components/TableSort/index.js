import TableSort from './TableSort.vue';

/* istanbul ignore next */
TableSort.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(TableSort.name, TableSort);
};

export default TableSort;