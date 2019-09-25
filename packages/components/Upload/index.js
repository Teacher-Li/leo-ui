import Upload from './Upload.vue';

/* istanbul ignore next */
Upload.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(Upload.name, Upload);
};

export default Upload;