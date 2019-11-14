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
                            url: '/UserCenter/companyAbroad'
                        },
                        {
                            name: '添加公司',
                            url: '/UserCenter/company'
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
                            url: '/UserCenter/offersAbroad'
                        },
                        {
                            name: '添加商机',
                            url: '/UserCenter/offers'
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
                            url: '/UserCenter/sentbox'
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
    table: {
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
        tel: "联系电话",
        ContactPerson: '联系人',
    },
    prompt:{
        title: '提交成功!',
        content: '内容不允许为空',
        choose: '选项不允许为空',
        title: '提交成功!',
        contact: '我们会尽快与您联系。',
        approval: '您的信息在审核通过后将显示在Matchup Expo配对频道中。',
        error: '提交失败',
        img: '图片不能为空',
        delete: '确认删除此条数据',
        deletes: '数据删除成功！',
        deleteTips: '删除公司信息将导致该公司下所有产品/商机等信息在对应展会的Matchup Expo配对频道内不显示。',
        prompt: '提示',
        cancel: '取消',
        determine: '确定',
        cancelMessage: '取消成功',
        confirm: '确定',
        Contact: '联系软件需要填写一个',
        Clickhereto: '',
        navPrompt: '请先报名参加自办展才可以使用Matchup Expo配对功能',
        regist: '注册成功 ！',
        login: '登录成功！',
        none: '抱歉，无匹配结果',
        fairNone: '观展商不能添加产品',
        CompanyNone: '请先添加公司信息再添加产品或商机信息',
        passError: '两次密码输入不一致',
        modifyPassSuccess: '密码修改成功',
        evN: '请先报名参展/观展，再添加公司信息',
        Logout: '退出成功'
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
        modify:'修改',
        edit: '编辑',
        delete: '删除',
        code: {
            label: '验证码',
            placeholder: '请输入验证码',
            send: '发送验证码',
            sened: '秒后重新发送',
        },
        CountryCode: '国际区号',
        CompanyName: '公司名称',
        ChooseFair: '展会',
        CompanyPhoto: '公司照片',
        ContactSoftware: '联系软件',
        ContactPerson: '公司联系人',
        Mobilephone: '电话',
        WeChat: '微信账号',
        Facebook: '脸书账号',
        Whatsapp: '其他应用账号',
        Website: '网址',
        CompanyDescription: '公司描述',
        ProductName: '产品名称',
        ProductsCategory: '产品目录',
        ProductPhoto: '产品图片',
        ProductDescription: '产品描述',
        OfferName: '商机名称',
        OfferCategory: '商机目录',
        OfferKind: '商机类型',
        OfferPhoto: '商机照片',
        OfferDescription: '商机介绍',
        Establish: '创建',
        cancel: '取消',
        confirm: '确定',
        Edit: '编辑',
        seek: '合作',
        cooperation: '求购',
        Submit: '提交',
        ExhibitorName: '参展单位名称',
        mailingAddress: '通讯地址',
        Contact: '联系人',
        ApplicationArea: '申请面积',
        ExhibitContent: '展品内容',
        NumberOfExhibitors: '参展人数（包括货源单位）',
        UnitNature: '单位性质',
        WhatKindOfPassportIsLeaving: '持何种护照出境?',
        Chinese: '中文',
        English: '英文',
        ZipCode: '邮编',
        Name: '姓 名',
        Job: '职 务',
        Department: '部 门',
        Telephone: '电 话',
        MobilePhone: '手 机',
        Fax: '传 真',
        Email: '邮 箱',
        WeChatQQ: '微信/QQ',
        Booth: '摊 位',
        LightGround: '光 地',
        NumberOfUnits: '本单位人数',
        Other: '其它',
        NumberOfPeople: '人数',
        OtherCompanyName: '（请填公司名）',
        Mr: '先生',
        Ms: '女士',
        companyInformation: '公司信息',
        BoothArea: '展位区域',
        BoothReservation: '展位预订',
        ExhibitorInformationEvaluation: '展商信息评估',
        JournalInformation: '会刊信息',
        ExhibitorInformation: '参展人员信息',
        PlanningInformation: '筹展信息',
        companyAddress: '公司地址',
        TextileMachine: '纺机服机',
        ClothingFabric: '服装面料',
        FiberYarn: '纤维纱线',
        FashionAccessories: '服饰辅料',
        DyeingProducts: '染化产品',
        HomeTextileProducts: '家纺产品',
        ProductionIn2018: '2018年生产量',
        MajorExportingCountries: '主要出口国家',
        IntentionPartner: '意向合作方',
        ExhibitsOrServiceBrief: '展品/服务简述',
        SeesawName: '楣板名称',
        CompanyProfile: '公司简介',
        mainProducts: '主营产品',
        UploadData: '上传资料',
        ExhibitTransportation: '展品运输',
        Booking: '代订票',
        Reservation: '代订房',
        otherInformation: '其他信息',
        address: '地址',
        visa: '签证',
        Insurance: '保险',
        AddInvitation: '增加邀请函',
        IncreaseTheEntryPermit: '增加进馆证',
        AirTickets: '机票',
        Accommodation: '住宿',
        Sex: '性别',
        BoothAngle: '摊位角',
        Established: '公司成立时间',
        numberOfWorkers: '员  工  人  数',
        ProductMinimumOrder: '产品最小订单',
        ProductPriceRange: '产品价格范围',
        ExportShare: '出口份额',
        ChineseName: '中文姓名',
        EnglishName: '英文姓名',
        birthday: '生日',
        RoundTripTime: '往返时间',
        RoundTripLocation: '往返地点',
        FlightRequirements: '航班要求',
        specialRequirements: '特殊要求',
        DateOfStay: '住宿日期',
        pinyin: '拼音',
        EnglishSurname: '英文姓',
        IDCard: '身份证',
        Snoring: '打呼噜',
        Smoking: '吸烟',
        food: '餐饮',
        VerifyEmail: '邮箱验证',
        VerifyEmailCode: '邮箱验证码',
        UserName: '用户名',
        PassWord: '密码',
        PassWordTip: '请输入密码',
        ReEnterPassWord: '重复密码',
        ReEnterPassWordTip: '请重新输入密码',
        size: '上传文件大小不能超过 2MB!',
        Summary: '详细描述',
        imageSize: '只能上传图片文件且不超过2MB',
        product: '产品',
        copy: '复制',
        offer: '商机',
        company: '公司',
        changeP: '修改密码',
    },
    tabNav: [{
        title: '主页',
    }, {
        title: '我的',
    }]
}
