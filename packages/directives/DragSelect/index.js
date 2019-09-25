import dragSelect from './dragSelect';

/* istanbul ignore next */
dragSelect.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.directive('dragSelect', dragSelect);
};

export default dragSelect;