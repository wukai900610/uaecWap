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
        {
            path: '/UserCenter/abroad',
            name: 'abroad',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/exhibitor/abroad')
        },
        // 英文参展 观展
        {
            path: '/UserCenter/exhibitor',
            name: 'exhibitor',
            meta: {
                auth: true,
            },
            component: () => import('@/Views/UserCenter/exhibitor/')
        },
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
        // },
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
                        title: '邀约填写3.7.1.1',
                        auth: true,
                    },
                    component: () => import('@/Views/MatchupExpo/Invitation/index'),
                },
                {
                    path: 'contact',
                    name: 'MatchupExpo_contact',
                    meta: {
                        title: '查看活动3.9.1.2',
                        auth: true,
                    },
                    component: () => import('@/Views/MatchupExpo/contact/index'),
                },
            ]
        },
    ]
})
