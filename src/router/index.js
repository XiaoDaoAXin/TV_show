import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/home')
const SafeHome = () => import('../pages/safeHome')
const HealthyHome = () => import('../pages/healthyHome')
const HealthyWater = () => import('../pages/healthyWater')
const HealthyAir = () => import('../pages/healthyAir')
const HealthyHabit = () => import('../pages/healthyHabit')
const HealthyEat = () => import('../pages/healthyEat') 
const IdentityHome = () => import('../pages/identityHome') 
const Cutebaby = () => import('../pages/identityHome/cute_baby') 

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/safeHome',
      name: 'safeHome',
      component: SafeHome
    },
    {
      path: '/healthyHome',
      name: 'healthyHome',
      component: HealthyHome
    },
    {
      path: '/healthyWater',
      name: 'healthyWater',
      component: HealthyWater
    },
    {
      path: '/healthyWater',
      name: 'healthyWater',
      component: HealthyWater
    },
    {
      path: '/healthyAir',
      name: 'healthyAir',
      component: HealthyAir
    },
    {
      path: '/healthyHabit',
      name: 'healthyHabit',
      component: HealthyHabit
    },
    {
      path: '/healthyEat',
      name: 'healthyEat',
      component: HealthyEat
    },
    {
      path: '/identityHome',
      name: 'identityHome',
      component: IdentityHome
    },
    {
      path: '/cutebaby',
      name: 'cutebaby',
      component: Cutebaby
    }
  ]
})
