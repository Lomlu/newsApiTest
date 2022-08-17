import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BusinessView from '../views/BusinessView.vue'
import EntertainmentView from '../views/EntertainmentView.vue'
import GeneralView from '../views/GeneralView.vue'
import HealthView from '../views/HealthView.vue'
import ScienceView from '../views/ScienceView.vue'
import SportsView from '../views/SportsView.vue'
import TechnologyView from '../views/TechnologyView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
      
    },
    {
      path: '/business',
      name: 'business',
      component: BusinessView
      
    },
    {
      path: '/entertainment',
      name: 'entertainment',
      component: EntertainmentView
    },
    {
      path: '/general',
      name: 'general',
      component: GeneralView
    },
    {
      path: '/health',
      name: 'health',
      component: HealthView
    },
    {
      path: '/science',
      name: 'science',
      component: ScienceView
    },
    {
      path: '/sports',
      name: 'sports',
      component: SportsView
    },
    {
      path: '/technology',
      name: 'technology',
      component: TechnologyView
    }
  ]
})

export default router
