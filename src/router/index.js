import { createRouter, createWebHashHistory } from 'vue-router'
import Parties from '../views/Parties.vue'
import Voter from '../views/Voter.vue'
import Resultat from '../views/Resultat.vue'

const routes = [
  {
    path: '/partis',
    name: 'Partis',
    component: Parties,
    props: { default: true, sidebar: false }
  },
  {
    path: '/voter',
    name: 'Voter',
    component: Voter,
    props: { default: true, sidebar: false }
  },
  {
    path: '/resulat',
    name: 'Resulat',
    component: Resultat,
    props: { default: true, sidebar: false }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
