import Edit from './Edit.vue';

/* istanbul ignore next */
Edit.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(Edit.name, Edit);
};

export default Edit;