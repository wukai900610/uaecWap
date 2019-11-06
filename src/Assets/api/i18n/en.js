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
        Mine: 'My',
        // viewMore:'立即登录，查看更多信息！',
        Login: 'Please Login',
        ViewMore: 'View More',
        modifyPass:'modify password',
    },
    table:{
        noData:'no data'
    },
    prompt:{
        modifyPassSuccess: 'Password modify complete',
    },
    form: {
        LoginPass: 'password',
        ReLoginPass: 'Re-enter password',
        Login: 'Login',
        Logout: 'Logout',
        ForgetPassword: 'Forget Password',
    },
    tabNav: [{
        title: 'Home',
    }, {
        title: 'My',
    }]
}
