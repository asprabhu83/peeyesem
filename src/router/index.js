import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import UsersList from '../views/UserList.vue'
import UserRoleList from '../views/UserRoleList.vue'
import Profile from '../views/Profile.vue'
import AddCars from '../views/AddCars.vue'
import Carslist from '../views/CarsList.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '/',
        name: 'Profile',
        component: Profile
      },
      {
        path: '/user-list',
        name: 'UsersList',
        component: UsersList
      },
      {
        path: '/add-cars',
        name: 'AddCars',
        component: AddCars
      },
      {
        path: '/cars-list',
        name: 'Carslist',
        component: Carslist
      },
      {
        path: '/user-role-list',
        name: 'UserRoleList',
        component: UserRoleList
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  if (authRequired && !localStorage.getItem('user_token')) {
    return next('/login')
  } else {
    next()
  }
})

export default router
