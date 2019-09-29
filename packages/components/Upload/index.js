import Upload from './Upload.vue';

/* istanbul ignore next */
Upload.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(Upload.name, Upload);
};

export default Upload;