import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function generateComponentFunction (path) {
  return resolve => require([`views/${path}`], resolve)
}

const NotFound = generateComponentFunction('NotFound.vue');
const Button = generateComponentFunction('Button.vue');
const Form = generateComponentFunction('Form.vue');
const Table = generateComponentFunction('Table.vue');

export default new Router({
  mode: 'history',
  routes: [
    { path: '*', name: 'NotFound', component: NotFound },
    { path: '/', redirect: '/button' },
    { path: '/button', name: 'Button', component: Button },
    { path: '/form', name: 'Form', component: Form },
    { path: '/table', name: 'Table', component: Table },
  ]
})
