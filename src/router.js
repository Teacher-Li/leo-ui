import Vue from "vue";
import Router from "vue-router";

import NotFound from "./views/NotFound.vue";
import Button from "./views/Button.vue";
import Form from "./views/Form.vue";
import Table from "./views/Table.vue";
import Animation from "./views/Animation.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {path: '*', name: 'NotFound', component: NotFound},
        {path: '/', redirect: '/button'},
        {path: '/button', name: 'Button', component: Button},
        {path: '/form', name: 'Form', component: Form},
        {path: '/table', name: 'Table', component: Table},
        {path: '/animation', name: 'Animation', component: Animation}
    ]
});
