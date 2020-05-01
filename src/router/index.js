import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Check from '@/modules/Check/Check'
import Form from '@/modules/Form/Form'
import QRCode from '@/modules/QRCode/QRCode'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Check',
      component: Check
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/qr-code',
      name: 'QRCode',
      component: QRCode
    }
  ]
})
