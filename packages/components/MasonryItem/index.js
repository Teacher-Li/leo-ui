import MasonryItem from './MasonryItem.vue';

/* istanbul ignore next */
MasonryItem.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(MasonryItem.name, MasonryItem);
};

export default MasonryItem;