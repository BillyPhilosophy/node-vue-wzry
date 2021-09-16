import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
// import CategroyEdit from '../views/CategroyEdit.vue'
const CategoryEdit = () => import(/* webpackChunkName: "group-foo" */ '../views/CategoryEdit')
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {
        path:'/categories/create',
        component:CategoryEdit
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
