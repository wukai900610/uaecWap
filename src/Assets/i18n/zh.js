export default {
    userCenterMenu: [{
            name: '自办展参展管理',
            children: [{
                name: '报名信息',
                url: '/UserCenter/exhibitors'
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
    tabel: {
        Row: '序号',
        Fair: '展会名称',
        FairName: '展览名称',
        CompanyID: '公司ID',
        CompanyName: '公司名称',
        Status: '状态',
        Action: '操作',
        ProductsCategory: '产品目录',
        ProductName: '产品名称',
        ProductID: '产品ID',
        OfferCategory: '商机目录',
        OfferKind: '商机类种',
        OfferID: '商机ID',
        OfferName: '商机名称',
        AllStatus: '审核状态',
        Edit: '编辑',
        Delete: '删除',
        Date: '日期',
        See: '查看',
        Replay: '回复',
        Subject: '标题',
        Form: '来自',
        To: '发送至',
        Content: '内容',
        noData: '暂无数据',
        pass: '通过',
        AllPass: '全部审核状态',
        Notpass: '不通过',
        confirmed: '待审',
        Read: '已读',
        UnRead: '未读',
        shows: '展会名称',
        Booth: '展位规格（光地）',
        Approved: '通过',
        AuditFailed: '失败',
        ApprovalPending: '待审',
        Remark: '备注',
        CompanyRemark: '公司备注',
        MeetingTime: '会议时间',
        MeetingPlace: '会议地点',
        ReceiptCompany: '收据公司',
        access: '访问',
        copy: '复制',
        Unanswered: '无回复',
        refuse: '拒绝',
        agree: '同意',
        OnlineBooking: '报名信息',
        AllCompany: '全部公司',
        AddCompany: '添加公司',
        EditCompany: '修改公司',
        AllProduct: '全部产品',
        AddProduct: '添加产品',
        EditProduct: '修改产品',
        AllOffer: '全部商机',
        AddOffer: '添加商机',
        EditOffer: '修改商机',
        New: '待回复',
        Replied: '已回复',
        MyInvitations: '主动邀约',
        SentBox: '发件箱',
        InBox: '收件箱',
        MeetSupplier: '邀约', //回复
        MeetSupplier2: '我的邀约', //回复
        FromCompany: '发件公司',
        From: '发件人',
        ToUser: '收件人',
        ToCompany: '收件公司',
        CurrentExhibition: '当前展会',
        SelfRunExhibition: '其他自办展',
        FormR: '发件公司',
        ToR: '收件公司',
        readTime: '阅读时间',
        companyP: '公司待审核',
        role: '角色',
        Exhibitors: '参展',
        Visitors: '观展',
        back: '返回',
        tel: "联系电话",
        ContactPerson: '联系人',
    },
    prompt:{
        title: '提交成功!',
        modifyPassSuccess: '密码修改成功',
    },
    form: {
        LoginPass: '密码',
        ReLoginPass: '重新输入密码',
        Login: '登录名',
        Logout: '退出',
        ForgetPassword: '忘记密码',
        submit:'提交',
        cancel:'取消',
        reset:'重置',
    },
    tabNav: [{
        title: '主页',
    }, {
        title: '我的',
    }]
}
