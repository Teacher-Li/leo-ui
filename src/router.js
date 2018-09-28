import Vue from "vue";
import Router from "vue-router";

import NotFound from "./views/NotFound.vue";
import Button from "./views/Button.vue";
import Select from "./views/Select.vue";
import Form from "./views/Form.vue";
import Table from "./views/Table.vue";
import Pagination from "./views/Pagination.vue";
import Loading from "./views/Loading.vue";
import Preview from "./views/Preview.vue";
import Masonry from "./views/Masonry.vue";
import Scroll from "./views/Scroll.vue";
import Animation from "./views/Animation.vue";

Vue.use(Router);

export default new Router({
    // mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {path: '*', name: 'NotFound', component: NotFound},
        {path: '/', redirect: '/button'},
        {path: '/button', name: 'Button', component: Button},
        {path: '/select', name: 'Select', component: Select},
        {path: '/form', name: 'Form', component: Form},
        {path: '/table', name: 'Table', component: Table},
        {path: '/pagination', name: 'Pagination', component: Pagination},
        {path: '/loading', name: 'Loading', component: Loading},
        {path: '/preview', name: 'Preview', component: Preview},
        {path: '/masonry', name: 'Masonry', component: Masonry},
        {path: '/scroll', name: 'Scroll', component: Scroll},
        {path: '/animation', name: 'Animation', component: Animation}
    ]
});
