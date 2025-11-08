// import { h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

// routes: [
//   {
//     path: '/',
//     name: 'home',
//     component: () => import('@/views/HomeView.vue')
//   },
//   {
//     path: '/projects',
//     name: 'projects',
//     component: () => import('@/views/ProjectsView.vue')
//   },
//   {
//     // /projects/aghshjfdeghwfui
//     path: '/projects/:id',
//     name: 'single-projects',
//     component: () => import('@/views/SingleProjectView.vue')
//   },
//   {
//     path: '/:catchAll(.*)*',
//     name: 'Not Found',
//     component: h('p', { style: 'color: red;fontSize: 8rem;' }, '404 Not Found')
//   }
// ]
