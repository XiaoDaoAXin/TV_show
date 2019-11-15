import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/home')
const HealthyHome = () => import('../pages/healthyHome')
const HealthyWater = () => import('../pages/healthyWater')
const HealthyAir = () => import('../pages/healthyAir')
const HealthyHabit = () => import('../pages/healthyHabit')
const HealthyEat = () => import('../pages/healthyEat') 
const IdentityHome = () => import('../pages/identityHome') 
const Cutebaby = () => import('../pages/identityHome/cute_baby') 
const Oldman = () => import('../pages/identityHome/old_man') 
const Singleperson = () => import('../pages/identityHome/singlePerson') 
const HomeApplianceManager = () => import('../pages/robotButler/home_appliance_manager') 
const HealthAssistant = () => import('../pages/robotButler/health_assistant') 
const FamilyService = () => import('../pages/robotButler/family_service') 
const HomeSecurity = () => import('../pages/robotButler/home_security') 
const LifeCompanion = () => import('../pages/robotButler/life_companion') 

const SafeHome = () => import('../pages/safeHome')
const PersonalSafety = () => import('../pages/safeHome/personal_safety')
const WealthSafety = () => import('../pages/safeHome/wealth_safety')
const EnvironmentSafety = () => import('../pages/safeHome/environment_safety')
const PrivacySecurity = () => import('../pages/safeHome/privacy_security')

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
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
    },
    {
      path: '/oldman',
      name: 'oldman',
      component: Oldman
    },
    {
      path: '/singleperson',
      name: 'singleperson',
      component: Singleperson
    },
    {
      path: '/homeApplianceManager',
      name: 'homeApplianceManager',
      component: HomeApplianceManager
    },
    {
      path: '/healthAssistant',
      name: 'healthAssistant',
      component: HealthAssistant 
    },
    {
      path: '/familyService',
      name: 'familyService',
      component: FamilyService
    },
    //居家安全
    {
      path: '/homeSecurity',
      name: 'homeSecurity',
      component: HomeSecurity
    },
    {
      path: '/lifeCompanion',
      name: 'lifeCompanion',
      component: LifeCompanion
    },
    //安全的家模块主页
    {
      path: '/safeHome',
      name: 'safeHome',
      component: SafeHome
    },
    {
      path: '/personalSafety',
      name: 'personalSafety',
      component: PersonalSafety 
    },
    {
      path: '/wealthSafety',
      name: 'wealthSafety',
      component: WealthSafety
    },
    {
      path: '/environmentSafety',
      name: 'environmentSafety',
      component: EnvironmentSafety
    },
    {
      path: '/privacySecurity',
      name: 'privacySecurity',
      component: PrivacySecurity
    }
    
  ]
})
