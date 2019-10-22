import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: () => import('./views/NotFound.vue')
    },

    {
      path: '/',
      redirect: '/button'
    },
    {
      path: '/button',
      name: 'Button',
      component: () => import('./views/Button.vue')
    },
    {
      path: '/input',
      name: 'Input',
      component: () => import('./views/Input.vue')
    },
    {
      path: '/select',
      name: 'Select',
      component: () => import('./views/Select.vue')
    },
    {
      path: '/upload',
      name: 'Upload',
      component: () => import('./views/Upload.vue')
    },
    {
      path: '/edit',
      name: 'Edit',
      component: () => import('./views/Edit.vue')
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import('./views/Form.vue')
    },
    {
      path: '/table',
      name: 'Table',
      component: () => import('./views/Table.vue')
    },
    {
      path: '/page',
      name: 'Page',
      component: () => import('./views/Page.vue')
    },
    {
      path: '/load',
      name: 'Load',
      component: () => import('./views/Load.vue')
    },
    {
      path: '/masonry',
      name: 'Masonry',
      component: () => import('./views/Masonry.vue')
    },
    {
      path: '/carousels',
      name: 'Carousels',
      component: () => import('./views/Carousels.vue')
    },

    {
      path: '/heart',
      name: 'Heart',
      component: () => import('./views/Heart.vue')
    },
    {
      path: '/tooltip',
      name: 'Tooltip',
      component: () => import('./views/Tooltip.vue')
    },
    {
      path: '/drag-select',
      name: 'DragSelect',
      component: () => import('./views/DragSelect.vue')
    },
    {
      path: '/barrage',
      name: 'Barrage',
      component: () => import('./views/Barrage.vue')
    }
  ]
});
