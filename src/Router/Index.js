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
        // 市场报道 站内新闻
        {
            path: '/report',
            name: 'report',
            component: () => import('@/Views/report/')
        },
        // 市场报道 站内新闻 详情
        {
            path: '/reportDetails',
            name: 'reportDetails',
            component: () => import('@/Views/report/reportDetails')
        },
        {
            path: '/UserCenter/Account',
            name: 'Account',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/Account')
        },
        // 展会管理
        {
            path: '/UserCenter/abroad',
            name: 'abroad',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/order/abroad')
        },
        // 英文参展 观展
        {
            path: '/UserCenter/order',
            name: 'order',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/order/')
        },
        // 公司管理
        {
            path: '/UserCenter/companyAbroad',
            name: 'companyAbroad',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/Company/abroad')
        },
        {
            path: '/UserCenter/company',
            name: 'company',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/Company/')
        },
        // 产品管理
        {
            path: '/UserCenter/productsAbroad',
            name: 'productsAbroad',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/Product/abroad')
        },
        {
            path: '/UserCenter/products',
            name: 'products',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/product/')
        },
        // 商机管理
        {
            path: '/UserCenter/offersAbroad',
            name: 'offersAbroad',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/offer/abroad')
        },
        {
            path: '/UserCenter/offers',
            name: 'offers',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/offer/')
        },
        // 消息管理
        {
            path: '/UserCenter/sentBox',
            name: 'sentBox',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/Message/sentBox')
        },
        {
            path: '/UserCenter/inbox',
            name: 'inbox',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/Message/inbox')
        },
        {
            path: '/UserCenter/contactLetter',
            name: 'contactLetter',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/Message/contactLetter')
        },
        {
            path: '/UserCenter/replyMessage',
            name: 'replyMessage',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/Message/replyMessage')
        },
        // 邀约管理
        {
            path: '/UserCenter/pendingInvitation',
            name: 'pendingInvitation',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/Invitation/pendingInvitation')
        },
        {
            path: '/UserCenter/replyInvitation',
            name: 'replyInvitation',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/Invitation/replyInvitation')
        },
        {
            path: '/UserCenter/recoveredInvitation',
            name: 'recoveredInvitation',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/Invitation/recoveredInvitation')
        },
        {
            path: '/UserCenter/activeInvitation',
            name: 'activeInvitation',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/Invitation/activeInvitation')
        },
        {
            path: '/UserCenter/seeInvitation',
            name: 'seeInvitation',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/Invitation/seeInvitation')
        },
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
        // },
        // 登陆
        {
            path: '/Login',
            name: 'Login',
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
        // 配对
        {
            path: '/MatchupExpo',
            name: 'MatchupExpo',
            redirect: '/MatchupExpo/',
            component: () => import('@/Views/MatchupExpo/App'),
            children: [{
                    path: '/',
                    name: 'MatchupExpo_home',
                    component: () => import('@/Views/MatchupExpo/home'),
                },
                {
                    path: 'search',
                    name: 'MatchupExpo_search',
                    component: () => import('@/Views/MatchupExpo/search/'),
                    meta: {
                        auth:true,
                    },
                },
                {
                    path: 'view',
                    name: 'MatchupExpo_view',
                    meta: {
                        auth: true,
                    },
                    component: () => import('@/Views/MatchupExpo/search/view'),
                },
                {
                    path: 'Invitation',
                    name: 'MatchupExpo_invitation',
                    meta: {
                        auth: true,
                    },
                    component: () => import('@/Views/MatchupExpo/Invitation/index'),
                },
                {
                    path: 'contact',
                    name: 'MatchupExpo_contact',
                    meta: {
                        auth: true,
                    },
                    component: () => import('@/Views/MatchupExpo/contact/index'),
                },
            ]
        },
    ]
})
