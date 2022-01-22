import {createRouter, createWebHistory} from 'vue-router'
import TimeTracking from '@/views/time-tracking.vue'

const routes = [
  {
    path: '/time-tracking/',
    name: 'Time Tracking',
    component: TimeTracking,
  },
  {
    path: '/time-tracking/daily',
    name: 'Daily Tracking',
    component: TimeTracking,
  },
  {
    path: '/time-tracking/weekly',
    name: 'Weekly Tracking',
    component: TimeTracking,
  },
  {
    path: '/time-tracking/monthly',
    name: 'Monthly Tracking',
    component: TimeTracking,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
