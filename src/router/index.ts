import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Settings from '@/views/administration/Settings.vue';
import Dashboard from '@/views/administration/Dashboard.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/sorteios',
        name: 'Sorteios',
        component: Dashboard,
      },
      {
        path: '/clientes',
        name: 'Clientes',
        component: Dashboard,
      },
      {
        path: '/enderecos',
        name: 'Endereços',
        component: Dashboard,
      },
      {
        path: '/configuracoes',
        name: 'Configurações',
        component: Settings,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
