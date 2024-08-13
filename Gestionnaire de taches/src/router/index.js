import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SignView from '../views/SignView.vue';
import RegisterView from '../views/RegisterView.vue';
import TaskForm from '../views/TaskForm.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,  meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Sign-in',
      name: 'Sign',
      component: SignView
    },
    {
      path: '/Register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/user/Edit',
      name: 'Tasks',
      component: TaskForm
    },
   
  ]
})

export default router
