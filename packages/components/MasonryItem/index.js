import MasonryItem from './MasonryItem.vue';

/* istanbul ignore next */
MasonryItem.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(MasonryItem.name, MasonryItem);
};

export default MasonryItem;