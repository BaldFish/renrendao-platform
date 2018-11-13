import Vue from 'vue'
import Router from 'vue-router'
import myHome from '@/components/home/home'
import myAppDownload from '@/components/appDownload/appDownload'
import myAboutUs from '@/components/aboutUs/aboutUs'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: myHome
    },
    {
      path: '/appDownload',
      name: 'appDownload',
      component: myAppDownload
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: myAboutUs
    },
  ]
})
