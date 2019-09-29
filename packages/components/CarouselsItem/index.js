import CarouselsItem from './CarouselsItem.vue';

/* istanbul ignore next */
CarouselsItem.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(CarouselsItem.name, CarouselsItem);
};

export default CarouselsItem;