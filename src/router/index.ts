import {createRouter, createWebHashHistory} from 'vue-router'
import Landing from "@/Landing.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    }
  ]
})

export default router
