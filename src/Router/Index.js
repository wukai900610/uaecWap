import Vue from 'vue'
import Router from 'vue-router'
import Util from "@/assets/service/customUtil";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/home',
        }, {
            path: '',
            component: () => import('@/Views/home/Frame'),
            children: [{
                path: 'home',
                name: 'home',
                component: () => import('@/Views/home/Index'),
            }, {
                // 用户中心
                path: 'UserCenter',
                name: 'UserCenter',
                component: () => import('@/Views/home/UserCenter'),
            }]
        },
        {
            path: '/UserCenter/abroad',
            name: 'abroad',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/abroad')
        },
        {
            path: '/UserCenter/Account',
            name: 'Account',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/Account/Index')
        // },
        // {
        //     path: '/UserCenter/ChangePassword',
        //     name: 'ChangePassword',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/ChangePassword/Index')
        // },
        // {
        //     path: '/UserCenter/ChangePhone',
        //     name: 'ChangePhone',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/ChangePhone/Index')
        // },
        // {
        //     path: '/UserCenter/ChangeEmail',
        //     name: 'ChangeEmail',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/ChangeEmail/Index')
        // },
        // {
        //     path: '/UserCenter/outbox',
        //     name: 'userOutbox',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Message/outbox')
        // },
        // {
        //     path: '/UserCenter/inbox',
        //     name: 'userInbox',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Message/inbox')
        // },
        // {
        //     path: '/UserCenter/contactLetter',
        //     name: 'userContactLetter',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Message/contactLetter')
        // },
        // {
        //     path: '/UserCenter/replyMessage',
        //     name: 'userReplyMessage',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Message/replyMessage')
        // },
        // {
        //     path: '/UserCenter/seeMessage',
        //     name: 'userSeeMessage',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Message/seeMessage')
        // },
        // {
        //     path: '/UserCenter/editProduct',
        //     name: 'userEditProduct',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Product/editProduct')
        // },
        // {
        //     path: '/UserCenter/editCompany',
        //     name: 'userEditCompany',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Company/editCompany')
        // },
        // {
        //     path: '/UserCenter/addProduct',
        //     name: 'userAddProduct',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Product/addProduct')
        // },
        // {
        //     path: '/UserCenter/addCompany',
        //     name: 'userAddCompany',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Company/addCompany')
        // },
        // {
        //     path: '/UserCenter/myCompany',
        //     name: 'userMyCompany',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Company/myCompany')
        // },
        // {
        //     path: '/UserCenter/iframe',
        //     name: 'userIframe',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/iframe/iframe')
        // },
        // {
        //     path: '/UserCenter/myProduct',
        //     name: 'userMyProduct',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Product/myProduct')
        // },
        // {
        //     path: '/UserCenter/addOffer',
        //     name: 'userAddOffer',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Offer/addOffer')
        // },
        // {
        //     path: '/UserCenter/myOffer',
        //     name: 'userMyOffer',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Offer/myOffer')
        // },
        // {
        //     path: '/UserCenter/editOffer',
        //     name: 'userEditOffer',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Offer/editOffer')
        // },
        // {
        //     path: '/UserCenter/pendingInvitation',
        //     name: 'userPendingInvitation',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Invitation/pendingInvitation')
        // },
        // {
        //     path: '/UserCenter/recoveredInvitation',
        //     name: 'userRecoveredInvitation',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Invitation/recoveredInvitation')
        // },
        // {
        //     path: '/UserCenter/activeInvitation',
        //     name: 'userActiveInvitation',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Invitation/activeInvitation')
        // },
        // {
        //     path: '/UserCenter/seeInvitation',
        //     name: 'userSeeInvitation',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Invitation/seeInvitation')
        // },
        // {
        //     path: '/UserCenter/replyInvitation',
        //     name: 'userReplyInvitation',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => import('@/Views/UserCenter/Invitation/replyInvitation')
        // },
        // // 英文参展 观展
        // {
        //     path: '/UserCenter/enExhibitors',
        //     name: 'userEnExhibitors',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => {
        //         // 区别尼日利亚版
        //         if (Util.isNiCode())
        //         {
        //             return import('@/Views/UserCenter/OrderEn/enExhibitorsForNigeria')
        //         }
        //         else
        //         {
        //             return import('@/Views/UserCenter/OrderEn/enExhibitors')
        //         }
        //     }
        // },
        // {
        //     path: '/UserCenter/putEnExhibitors',
        //     name: 'userPutEnExhibitors',
        //     meta: {
        //         auth: true,
        //     },
        //     component: () => {
        //         // 区别尼日利亚版
        //         if (Util.isNiCode())
        //         {
        //             return import('@/Views/UserCenter/OrderEn/putEnExhibitorsForNigeria')
        //         }
        //         else
        //         {
        //             return import('@/Views/UserCenter/OrderEn/putEnExhibitors')
        //         }
        //     }
        // },
        // {
        //     path: '/UserCenter/ExhibitorAdd',
        //     name: 'ExhibitorAdd',
        //     meta: {
        //         auth: true,
        //         icon: 'form'
        //     },
        //     component: () => import('@/Views/UserCenter/Order/ExhibitorAdd'),
        // },
        // {
        //     path: '/UserCenter/ExhibitorEdit',
        //     name: 'ExhibitorEdit',
        //     meta: {
        //         auth: true,
        //         icon: 'form'
        //     },
        //     component: () => import('@/Views/UserCenter/Order/ExhibitorEdit'),
        // },
        // {
        //     path: '/UserCenter/ExhibitorRules',
        //     name: 'ExhibitorRules',
        //     meta: {
        //         auth: true,
        //         icon: 'form'
        //     },
        //     component: () => import('@/Views/UserCenter/Order/ExhibitorRules'),
        // },
        // {
        //     path: '/UserCenter/VisitorAdd',
        //     name: 'VisitorAdd',
        //     meta: {
        //         auth: true,
        //         icon: 'form'
        //     },
        //     component: () => import('@/Views/UserCenter/Order/VisitorAdd'),
        // },
        // {
        //     path: '/UserCenter/VisitorEdit',
        //     name: 'VisitorEdit',
        //     meta: {
        //         auth: true,
        //         icon: 'form'
        //     },
        //     component: () => import('@/Views/UserCenter/Order/VisitorEdit'),
        // },
        // {
        //     path: '/UserCenter/VisitorRules',
        //     name: 'VisitorRules',
        //     meta: {
        //         auth: true,
        //         icon: 'form'
        //     },
        //     component: () => import('@/Views/UserCenter/Order/VisitorRules'),
        },
        // 登陆
        {
            path: '/SignIn',
            name: 'SignIn',
            component: () => import('@/Views/Login'),
        },
        // 注册
        {
            path: '/SignUp',
            name: 'SignUp',
            component: () => import('@/Views/Register'),
        },
        // 验证邮箱
        {
            path: '/SignUp/VerifyEmail',
            name: 'VerifyEmail',
            component: () => import('@/Views/Register/VerifyEmail'),
        },
        // 忘记密码
        {
            path: '/Forgot',
            name: 'Forgot',
            component: () => import('@/Views/ForgotPassword'),
        },
        {
            path: '/Status',
            name: 'Status',
            meta: {
                auth: true
            },
            component: () => import('@/Views/Register/Status'),
        },
    ]
})
