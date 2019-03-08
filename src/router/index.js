import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContactUsPage from '@/views/ContactUsPage'

Vue.use(Router)

export default new Router({
  routes:
    [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/contact-us',
        name: 'ContactUs',
        component: ContactUsPage
      }
    ],
  mode: 'history'
})
