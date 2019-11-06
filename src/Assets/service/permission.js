import router from '@/router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式

import store from '../../store'
import Util from './customUtil'

router.beforeEach((to, from, next) => {
    NProgress.start()

    let pkcode = to.query.pkcode || from.query.pkcode
    if (pkcode) {
        Util.setsessionStorage('pkcode', pkcode)
    } else {
        pkcode = Util.getsessionStorage('pkcode')
    }
    to.query.pkcode = pkcode

    if (to.matched.some(m => m.meta.auth)) { // 路由需要身份验证
        // console.log('----start----');
        // console.log('to:');
        // console.log(to);
        // console.log('from:');
        // console.log(from);
        // 可以取到本地token 已登陆
        if (Util.getsessionStorage('token')) {
            if (store.state.app.userInfo.isExhibitor === '' || store.state.app.userInfo.isExhibitor === undefined) { //未选择身份
                if(to.name == 'Status' || to.name == 'Account' || to.name == 'ChangePassword' || to.name == 'Logout' || to.path.toLowerCase().indexOf('exhibitor') > -1 || to.path.toLowerCase().indexOf('visitor') > -1){
                    next()
                }else{
                    next({
                        name: 'Status'
                    })
                }
            }else{
                console.log(to.name);
                if(to.name == 'Status'){
                    next({
                        name: 'abroad'
                    })
                }else{
                    next()
                }
            }
        } else {
            // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
            next({
                name: 'SignIn',
                query: {
                    Rurl: to.fullPath,
                }
            })
        }
        // console.log('----end----');
    } else {
        // 已经登陆
        // || to.name == 'SignUp'
        if (to.name == 'SignIn') { //禁止跳转至登陆和注册
            if (Util.getsessionStorage('token')) {
                next(false)
            } else {
                next()
            }
        } else {
            next()
        }
    }

    NProgress.done()
})
router.afterEach((to, from) => {
    window.scrollTo(0, 0);
});
