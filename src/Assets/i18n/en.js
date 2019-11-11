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
                            url: '/UserCenter/myCompany'
                        },
                        {
                            name: 'Add Company',
                            url: '/UserCenter/addCompany'
                        }
                    ]
                },
                {
                    name: 'Manage Products',
                    children: [{
                            name: 'All Products',
                            url: '/UserCenter/myProduct'
                        },
                        {
                            name: 'Add Product',
                            url: '/UserCenter/AddProduct'
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
        Edit: 'Edit',
        Delete: 'Delete',
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
        modifyPassSuccess: 'Password modify complete',
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
    },
    tabNav: [{
        title: 'Home',
    }, {
        title: 'My',
    }]
}
