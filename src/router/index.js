import {createRouter, createWebHistory} from 'vue-router'
import TimeTracking from '@/views/time-tracking.vue'

const routes = [
  {
    path: '/time-tracking/',
    name: 'Time Tracking',
    component: TimeTracking,
  },
  {
    path: '/time-tracking/:timeframe',
    name: 'Time Tracking Selected',
    component: TimeTracking,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
