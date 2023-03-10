import { createRouter, createWebHistory } from 'vue-router'
import index2View from '../views/index2View.vue';
import index3View from '../views/index3View.vue';
import index4View from '../views/index4View.vue';
import aboutView from '../views/aboutView.vue';
import gallery1View from '../views/gallery1View.vue';
import gallery2View from '../views/gallery2View.vue';
import gallery3View from '../views/gallery3View.vue';
import loginView from '../views/loginView.vue';
import registerView from '../views/registerView.vue';
import teamView from '../views/teamView.vue';
import teamSingleView from '../views/team-singleView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },*/
    {
      path: '/',
      name: 'index',
      component: index3View,
    },
    {
      path: '/index2',
      name: 'index2',
      component: index2View,
    },
    {
      path: '/index3',
      name: 'index3',
      component: index3View,
    },
    {
      path: '/index4',
      name: 'index4',
      component: index4View,
    },
    {
      path : '/about',
      name: 'about',
      component: aboutView,
    },
    {
      path: '/gallery1',
      name: 'gallery1',
      component: gallery1View,
    },
    {
      path: '/gallery2',
      name: 'gallery2',
      component: gallery2View,
    },
    {
      path: '/gallery3',
      name: 'gallery3',
      component: gallery3View,
    },
    {
      path: '/login',
      name: 'login',
      component: loginView,
    },
    {
      path: '/register',
      name: 'register',
      component: registerView,
    },
    {
      path: '/team',
      name: 'team',
      component: teamView,
    },
    {
      path: '/team-sigle',
      name: 'teamSingle',
      component:teamSingleView,
    }

  ]
})

export default router
