import heart from './heart';

/* istanbul ignore next */
heart.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.directive('heart', heart);
};

export default heart;