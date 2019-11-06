export default {
    head: [{
            name: 'Inicio',
            url: '/newViewES'
        },
        {
            name: 'Acerca De',
            children: [{
                    name: 'Información General',
                    local: '/newViewES/Information'
                },
                {
                    name: 'Productos De Exposición',
                    local: '/newViewES/products'
                },
                {
                    name: 'Campo De Exposición',
                    local: '/newViewES/ground'
                }
            ]
        },
        {
            name: 'Expositores&Visitantes',
            url: '/UserCenter'
        },
        {
            name: 'Servicios Valorados',
            children: [{
                    name: 'Matchmaking En Línea',
                    local: '/newViewES/match'
                },
                {
                    name: 'B2B Matchmaking',
                    local: '/newViewES/site'
                },
                {
                    name: 'Promoción Direccional',
                    local: '/newViewES/target'
                },
                {
                    name: 'Invitación De Los Compradores',
                    local: '/newViewES/invite'
                }
            ]
        },
        {
            name: 'Prensa',
            url: '/newViewES/press'
        },
        {
            name: 'Contacto',
            children: [{
                    name: 'Contacto',
                    local: '/newViewES/offline'
                },
                {
                    name: 'Acerca de',
                    local: '/newViewES/about'
                }
            ]
        }
    ],
    errorTips: {
        other: 'Connect Failed',
        501: 'Failed',
        502: 'The Member ID has been used',
        503: 'Sign out',
        504: 'Account name incorrect',
        505: 'Password is incorrect',
        506: 'Failed',
        507: 'Failed',
        508: 'Failed',
        509: 'Error',
        511: 'Failed',
        512: 'Failed',
        513: 'Failed',
        514: 'Each fair can be signed up only by one company of each user.',
        521: 'Failed',
        522: 'Failed',
        523: 'Failed',
        524: 'Each fair can be signed up only by one company of each user. ',
        525: 'Product catalog does not exist',
        531: 'Failed',
        532: 'Failed',
        533: 'Failed',
        534: 'Each fair can be signed up only by one company of each user. ',
        535: 'Offer does not exist',
        541: 'Failed',
        542: 'Failed',
        543: 'Failed',
        561: 'Please login and apply exhibition at "exhibition management" of member center first.',
        562: 'Failed',
        563: 'Failed'
    },
    sTips: {
        201: 'registration success!',
        241: 'Submitted Successfully',
        242: 'Deleted Sucessfully!',
        243: 'Modified Successfully ',
        211: 'Submitted successfully! Your edited information will be shown in Matchup Expo after approval.',
        212: 'Deleted Sucessfully! Your Company or products or offers information are not shown in Matchup Expo.',
        213: 'Modified Successfully!  Modified Successfully!Your information will be shown in Matchup Expo after approval.',
        221: 'Submitted successfully!  Your infomation will been shown in Matchup Expo after approval.',
        222: 'Deleted Sucessfully!',
        223: 'Submitted successfully!  Your infomation will been shown in Matchup Expo after approval.',
        231: 'Submitted successfully! Your revised information will be shown in Matchup Expo after approval.',
        232: 'Deleted Sucessfully!',
        233: 'Modified Successfully!  Your revised information will be shown in Matchup Expo',
        261: 'Sent Sucessfully! ',
        263: '',
        203: 'Modified Successfully '
    },
    nav: {
        home: 'Matchup Expo',
        website: 'NGTEX',
        exhibition: 'Exhibitors & Visitors',
        login: 'Login',
        my: {
            name: 'Member Center',
            children: [{
                name: 'My Account',
                url: '/UserCenter/Account'
            }, {
                name: 'Logout',
                url: '/UserCenter/Logout'
            }]
        },
        AsExhibitors: 'As Exhibitors',
        AsVisitors: 'As Visitors'
    },
    footer: {
        organizer: 'Organuizer Committee',
        cooperative: 'Cooperative Media',
        companyName: 'United Asia International Exhibition Group',
        tel: "Tel",
        Mail: 'Mail',
        Web: 'Web',
        Add: 'Add',
        Fax: 'Fax',
        title: 'CONTACT US AS YOU NEED',
        Address: 'United Asia Gruop Mansion, No.68-28 Suyuan Avenue 211102 Nanjing, P.R.China',
        ipc: ' Jiangsu uaec International Exhibition Co., Ltd. © Copyright 苏ICP备09034171号 苏警备32011502010870号'
    }
}
