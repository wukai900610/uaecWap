export default {
    userCenterMenu: [{
            name: '自办展参展管理',
            children: [{
                name: '报名信息',
                url: '/UserCenter/abroad'
            }]
        },
        {
            name: 'Matchup Expo',
            children: [{
                    name: '公司管理',
                    children: [{
                            name: '全部公司',
                            url: '/UserCenter/myCompany'
                        },
                        {
                            name: '添加公司',
                            url: '/UserCenter/addCompany'
                        }
                    ]
                },
                {
                    name: '产品管理',
                    children: [{
                            name: '全部产品',
                            url: '/UserCenter/myProduct'
                        },
                        {
                            name: '添加产品',
                            url: '/UserCenter/AddProduct'
                        }
                    ]
                },
                {
                    name: '商机管理',
                    children: [{
                            name: '全部商机',
                            url: '/UserCenter/myOffer'
                        },
                        {
                            name: '添加商机',
                            url: '/UserCenter/addOffer'
                        }
                    ]
                },
                {
                    name: '配对邀约管理',
                    children: [{
                            name: '待回复 ',
                            url: '/UserCenter/pendingInvitation'
                        },
                        {
                            name: '已回复',
                            url: '/UserCenter/recoveredInvitation'
                        },
                        {
                            name: '主动邀约',
                            url: '/UserCenter/activeInvitation'
                        }
                    ]
                },
                {
                    name: '联系信管理',
                    children: [{
                            name: '发件箱',
                            url: '/UserCenter/outbox'
                        },
                        {
                            name: '收件箱',
                            url: '/UserCenter/inbox'
                        }
                    ]
                },
            ]
        },
        {
            name: '我的帐户',
            url: '/UserCenter/Account'
            // children: [{
            //         name: '修改账户',
            //         url: '/UserCenter/changePassword'
            //     },
            // ]
        }
    ],
    header:{
        back:'返回'
    },
    page: {
        index:{
            placeholder:'请输入搜索关键词',
            search:'搜索'
        },
        Mine: 'My',
        // viewMore:'立即登录，查看更多信息！',
        Login: '请登录',
        ViewMore: '查看更多',
        modifyPass:'修改密码'
    },
    table:{
        noData:'暂无数据'
    },
    prompt:{
        modifyPassSuccess: '密码修改成功',
    },
    form: {
        LoginPass: '密码',
        ReLoginPass: '重新输入密码',
        Login: '登录名',
        Logout: '退出',
        ForgetPassword: '忘记密码',
    },
    tabNav: [{
        title: '主页',
    }, {
        title: '我的',
    }]
}
