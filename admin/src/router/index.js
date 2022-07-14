import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
// import CategroyEdit from '../views/CategroyEdit.vue'
const CategoryEdit = () => import(/* webpackChunkName: "admin-category" */ '../views/CategoryEdit')
const CategoryList = () => import(/* webpackChunkName: "admin-category" */ '../views/CategoryList')
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
      },
			{
        path:'/categories/create/:id',
        component:CategoryEdit,
				props:true
      },
			{
        path:'/categories/list',
        component:CategoryList
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
