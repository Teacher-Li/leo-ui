import CarouselsItem from './CarouselsItem.vue';

/* istanbul ignore next */
CarouselsItem.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(CarouselsItem.name, CarouselsItem);
};

export default CarouselsItem;