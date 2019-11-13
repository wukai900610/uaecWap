export default {
    userCenterMenu: [{
            name: 'Exhibition Management',
            children: [{
                name: 'Application Info',
                url: '/UserCenter/abroad'
            }]
        },
        {
            name: 'Matchup Expo',
            children: [{
                    name: 'Manage Companies',
                    children: [{
                            name: 'Company Info',
                            url: '/UserCenter/companyAbroad'
                        },
                        {
                            name: 'Add Company',
                            url: '/UserCenter/company'
                        }
                    ]
                },
                {
                    name: 'Manage Products',
                    children: [{
                            name: 'All Products',
                            url: '/UserCenter/productsAbroad'
                        },
                        {
                            name: 'Add Product',
                            url: '/UserCenter/products'
                        }
                    ]
                },
                {
                    name: 'Manage Offers',
                    children: [{
                            name: 'All Offers',
                            url: '/UserCenter/myOffer'
                        },
                        {
                            name: 'Add Offer',
                            url: '/UserCenter/AddOffer'
                        }
                    ]
                },
                {
                    name: 'Manage Meetings',
                    children: [{
                            name: 'New',
                            url: '/UserCenter/pendingInvitation'
                        },
                        {
                            name: 'Replied',
                            url: '/UserCenter/recoveredInvitation'
                        },
                        {
                            name: 'My Invitations',
                            url: '/UserCenter/activeInvitation'
                        }
                    ]
                },
                {
                    name: 'Manage Inquiries',
                    children: [{
                            name: 'Sent Box',
                            url: '/UserCenter/outbox'
                        },
                        {
                            name: 'Inbox',
                            url: '/UserCenter/inbox'
                        }
                    ]
                },
            ]
        },
        {
            name: 'My Account',
            url: '/UserCenter/Account'
        }
    ],
    header:{
        back:'back'
    },
    page: {
        index:{
            placeholder:'Matchup Expo',
            search:'search'
        },
        Mine: 'User Center',
        // viewMore:'立即登录，查看更多信息！',
        Login: 'Please Login',
        ViewMore: 'View More',
        modifyPass:'modify password',
    },
    table: {
        Row: 'Row',
        Fair: 'Fair',
        FairName: 'Fair Name',
        CompanyID: 'Company ID',
        CompanyName: 'Company',
        Status: 'Status',
        Action: 'Action',
        ProductsCategory: 'Products Category',
        ProductName: 'Product Name',
        ProductID: 'Product ID',
        OfferCategory: 'Offer Category',
        OfferKind: 'Offer Kind',
        OfferID: 'Offer ID',
        OfferName: 'Offer Name',
        AllStatus: 'All Status',
        Date: 'Date',
        See: 'View',
        Replay: 'Reply ',
        Subject: 'Subject',
        Form: 'Form',
        To: 'To',
        Content: 'Content',
        noData: 'No data',
        AllPass: 'All Status',
        pass: 'Approved',
        Notpass: 'Editing Required',
        confirmed: 'Approval Pending ',
        Read: 'Read',
        UnRead: 'Unread',
        shows: 'Shows',
        Booth: 'Booth',
        Approved: 'Approved',
        AuditFailed: 'Audit Failed',
        ApprovalPending: 'Approval Pending',
        Remark: 'Remark',
        CompanyRemark: 'CompanyRemark',
        MeetingTime: 'MeetingTime',
        MeetingPlace: 'MeetingPlace',
        ReceiptCompany: 'Receipt company',
        access: 'access',
        copy: 'copy',
        Unanswered: 'Approval Pending',
        refuse: 'Audit failed',
        agree: 'Approved',
        OnlineBooking: 'Application Info',
        AllCompany: 'Company Info',
        AddCompany: 'Add Company',
        EditCompany: 'Edit Company',
        AllProduct: 'All Products',
        AddProduct: 'Add Product',
        EditProduct: 'Edit Product',
        AllOffer: 'All Offers',
        AddOffer: 'Add Offer',
        EditOffer: 'Edit Offer',
        New: 'New',
        Replied: 'Replied',
        MyInvitations: 'MyInvitations',
        SentBox: 'Sent Box',
        InBox: 'InBox',
        MeetSupplier: 'MeetSupplier', //回复
        MeetSupplier2: 'My Invitations', //回复
        MeetSupplier3: 'MeetSupplier', //回复
        FromCompany: 'From Company',
        ToUser: 'To',
        From: 'From',
        ToCompany: 'To Company',
        CurrentExhibition: 'Current Exhibition',
        SelfRunExhibition: 'Other Self-Run Exhibition',
        FormR: 'Form',
        ToR: 'To',
        readTime: 'ReadTime',
        companyP: 'Company Approval Pending',
        role: 'Role',
        Exhibitors: 'Exhibitors',
        Visitors: 'Visitors',
        back: 'back',
        tel: "Tel",
        ContactPerson: 'Contact Person',
    },
    prompt:{
        title: 'success!',
        content: 'Content is not allowed to be empty',
        choose: 'The content in the option is not allowed to be empty',
        contact: 'We will contact  you soon.',
        approval: 'Your revised information will be shown in Matchup Expo after approval.',
        error: 'Submission Failed',
        img: 'The content in the image cannot be empty',
        delete: 'Confirm to delete this data',
        deletes: 'Successful data deletion !',
        deleteTips: 'Your information is not shown in Matchup Expo  Matchmaking after you deletion ',
        prompt: 'Tips',
        cancel: 'cancel',
        determine: 'Comfrim',
        cancelMessage: 'Cancel success',
        confirm: 'Confirm',
        Contact: 'Contact software needs to fill in one',
        Clickhereto: 'Click here to',
        navPrompt: 'Please register in "Exhibition Management" before you can use Matchup Expo features.',
        regist: 'Registration Success!',
        login: 'Login successful!',
        none: 'Sorry! No matches were found',
        fairNone: 'Visitors can not add products',
        CompanyNone: 'Please add company info before add product or offer.',
        passError: 'Passwords must match',
        modifyPassSuccess: 'Password modify complete',
        evN: 'Please register exhibition firstly,then add company information here',
        Logout: 'Exit successfully'
    },
    form: {
        LoginPass: 'password',
        ReLoginPass: 'Re-enter password',
        Login: 'Login',
        Logout: 'Logout',
        ForgetPassword: 'Forget Password',
        submit:'submit',
        cancel:'cancel',
        reset:'reset',
        modify:'modify',
        edit: 'Edit',
        delete: 'Delete',
        code: {
            label: 'code',
            placeholder: 'Please Enter Code',
            send: 'Click to send',
            sened: 'Resend after',
        },
        CountryCode: 'International area code',
        CompanyName: 'Company Name',
        ChooseFair: 'Choose Fair',
        CompanyPhoto: 'Company Photo',
        ContactSoftware: 'Contact software',
        ContactPerson: 'Contact Person',
        Mobilephone: 'Mobilephone',
        WeChat: 'WeChat',
        Facebook: 'Facebook',
        Whatsapp: 'Whatsapp',
        Website: 'Website',
        CompanyDescription: 'Company Description',
        ProductName: 'ProductName',
        ProductsCategory: 'Products Category',
        ProductPhoto: 'Product Photo',
        ProductDescription: 'Product Description',
        OfferName: 'Offer Name',
        OfferCategory: 'Offer Category',
        OfferKind: 'Offer Type',
        OfferPhoto: 'Offer Photo',
        OfferDescription: 'Offer Description',
        Establish: 'Add',
        cancel: 'Cancel',
        Edit: 'Edit',
        confirm: 'Confirm',
        seek: 'Buy',
        cooperation: 'Cooperation',
        Submit: 'Submit',
        ExhibitorName: 'Exhibitor name',
        mailingAddress: 'mailing address',
        Contact: 'Contact',
        ApplicationArea: 'Application area',
        ExhibitContent: 'Exhibit content',
        NumberOfExhibitors: 'Number of exhibitors',
        UnitNature: 'Unit nature',
        WhatKindOfPassportIsLeaving: 'WhatKind of passportIs leaving?',
        Chinese: 'Chinese',
        English: 'English',
        ZipCode: 'Zip code',
        Name: 'Name',
        Job: 'Job',
        Department: 'Department',
        Telephone: 'Telephone',
        MobilePhone: 'MobilePhone',
        Fax: 'Fax',
        Email: 'Email',
        WeChatQQ: 'WeChat/QQ',
        Booth: 'Booth',
        LightGround: 'Light ground',
        NumberOfUnits: 'Number of units',
        Other: 'Other',
        NumberOfPeople: 'NumberOfPeople',
        OtherCompanyName: '（Other company name）',
        Mr: 'Mr.',
        Ms: 'Ms.',
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
        VerifyEmail: 'Verify email',
        VerifyEmailCode: 'enter code',
        UserName: 'User Name',
        PassWord: 'Password',
        PassWordTip: 'Please enter password',
        ReEnterPassWord: 'Re-enter password',
        ReEnterPassWordTip: 'Please re-enter your password',
        size: 'The upload file size cannot exceed 2MB!',
        Summary: 'Detailed Description',
        imageSize: 'Upload only picture files and no more than 2MB',
        product: 'Product',
        copy: 'Copy',
        offer: 'Offer',
        company: 'Company',
        changeP: 'Change Password',
    },
    tabNav: [{
        title: 'Home',
    }, {
        title: 'My',
    }]
}
