import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register.vue'),
        },
        {
            path: '/resources',
            name: 'resources',
            component: () => import('./views/Resources.vue'),
        },
        {
            path: '/petitions',
            name: 'petitions',
            component: () => import('./views/Petitions.vue'),
        },
        {
            path: '/users',
            name: 'users',
            component: () => import('./views/Users.vue'),
        },
    ],
});
