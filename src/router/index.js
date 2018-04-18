import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import user from '../components/user/user'
import userdetail from '../components/user/userdetail'
import useredit from '../components/user/useredit'
import userstart from '../components/user/userstart'
import header from '../components/header'

// const user = resolve => {
//   var userpath = '../components/user/user'
//   require.ensure([userpath], () => {
//     resolve(require(userpath))
//   })
// }
// const userdetail = resolve => {
//   var  userdetailpath = '../components/user/userdetail'
//   require.ensure([userdetailpath], () => {
//     resolve(require(userdetailpath))
//   })
// }
// const useredit = resolve => {
//   var  usereditpath = '../components/user/useredit'
//   require.ensure([usereditpath], () => {
//     resolve(require(usereditpath))
//   })
// }
// const userstart = resolve => {
//   var  userstartpath = '../components/user/userstart'
//   require.ensure([userstartpath], () => {
//     resolve(require(userstartpath))
//   })
// }

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      // name: 'HelloWorld',
      component: header,
      name: 'home'
    },
    {
      path: '/user',
      name: 'User',
      component: user,
      children: [
        {path: '', component: userstart},
        {path: ':id', component: userdetail},
        {path: ':id/edit', component: useredit, name: 'userEdit'}
      ]
    },
    {path: '/redirect-me', redirect: '/user'},
    {path: '*', redirect: '/'}
  ]
})
