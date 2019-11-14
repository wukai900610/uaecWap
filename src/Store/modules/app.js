import Util from "@/assets/service/customUtil";
import {
    theme
}
from "../../assets/api/colorCheck";

const app = {
    state: {
        host: {
            // 未备案
            'ctis-colombia': {
                logo: '/static/image/logo2.png',
                background: '#6B147D',
                tel: '+86-25-84521101',
                mail: 'info@uaec-expo.com',
                web: 'http://www.uaec-expo.com',
                add: '江苏省南京市苏源大道68-28号联亚国际大厦',
                title: '即刻加入我们，出发哥伦比亚国际纺织工业博览会',
                time:['2019-11-04 09:00:00','2019-11-07 16:00:00'],
                record: '©2019 UAEC 苏ICP备09034171号-4',
                headTitle: 'Colombia Textile Industry Sourcing Expo',
                htmlTitle: 'CONTACT US',
                oldUrl: 'http://192.168.254.10:806/Web/',
                code: 'cc',
                colorVariables: '6B147D',
                fL: '/static/image/806FL.png',
                fI: ['Nigeriaf1.png', 'Nigeriaf2.png', 'Nigeriaf3.png'],
                esAuth: true,
                zh: {
                    app: {
                        app1: '2019年7月23-25日',
                        app2: '哥伦比亚 • 麦德林'
                    },
                    home: {
                        home1: '欢迎来到哥伦比亚国际纺织工业博览会',
                        home2: '“哥伦比亚国际纺织工业博览会”与南美西语区规模最大、举办历史最悠久的服装展“哥伦比亚国际服装展览会(COLOMBIAMODA)” 同期同馆举办，两展共享买家、宣传等一切资源，中国展商均在CoTex展示。哥伦比亚国际纺织工业博览会，是中国企业开拓哥伦比亚纺织市场唯一的正规平台！',
                        home3: '遇见多样哥伦比亚',
                        home4: '不只有白金、祖母绿、咖啡、鲜花、煤矿，哥伦比亚国际纺织工业博览会，带您走进一个不一样的哥伦比亚！',
                        home5: '发现一个绘声绘色的哥伦比亚国际纺织工业博览会',
                        home6: '就等你来',
                        home7: '哥伦比亚国际纺织工业博览会，专注于纺织相关产品和服务的供应与需求，把达成贸易成交、推动市场的发展作为目标，让与会者从各自的细分领域找到适合自己需求的解决方案。',
                        home8: "B2B网络预配",
                        home9: '为确保参展效果，提升贸易配对成功率， CoTex 将为您提供展前的网络预配服务，持续跟踪潜力买家，获得更大更多商机！'
                    },
                    exhibition: {
                        exhibition1: '哥伦比亚国际纺织工业博览会',
                        tabel: [{
                                left: '展期',
                                right: '2019年7月23-25日'
                            },
                            {
                                left: '展馆',
                                right: '麦德林市长广场会展中心'
                            },
                            {
                                left: '地址',
                                right: '哥伦比亚 麦德林'
                            },
                            {
                                left: '展品范围',
                                right: '纺机服机、服装面料、纤维纱线、服饰辅料、染化产品、鞋帽箱包、家纺产品'
                            },
                            {
                                left: '主办单位',
                                right: '中国纺织贸促会 <br>' +
                                    'Inexmoda<br>' +
                                    '联亚国际展览集团（UAEC）'
                            },
                            {
                                left: '同期同馆',
                                right: 'Colombiamoda'
                            },
                        ],
                        exhibition2: '“哥伦比亚国际纺织工业博览会(Colombia Textile Industry Sourcing Expo,CoTex）”与南美西语区规模最大、举办历史最悠久的服装展“哥伦比亚国际服装展览会(COLOMBIAMODA)” 同期同馆举办，两展共享买家、宣传等一切资源，中国展商均在CoTex展示。',
                        exhibition3: '哥伦比亚国际服装展览会(Colombiamoda)由哥伦比亚服装出口协会（Inexmoda）主办，始于2000年，每年1届，因产业原因，一直未对中国开放。',
                        exhibition4: '2018 Colombiamoda展出面积5万多㎡，哥伦比亚、巴西、秘鲁、西班牙、葡萄牙、德国、法国、意大利等20多个国家和地区的510家企业参展，到会买家来自中南美洲、美国、欧洲等地达21924人。是业内公认的进入哥国市场最佳、也是唯一的展会平台。展会现场成交大，摊位供不应求。',
                        exhibition5: '哥伦比亚国际纺织工业博览会（CoTex）是中国业内企业进入哥伦比亚市场最佳、也是唯一正规的展会平台！',
                    },
                    exhibits: {
                        exhibits1: '展品介绍',
                        exhibits2: '哥伦比亚国际纺织工业博览会，聚焦纺织优品，主要展品如下：',
                        tabel: [{
                                left: '纺机服机',
                                right: '手动/自动纺织机械、缝纫机械、附件及零配件'
                            },
                            {
                                left: '服装面料',
                                right: '服装面料、功能性面料、合成面料等'
                            },
                            {
                                left: '纤维纱线',
                                right: '纤维、抽纱、纱线、特殊纺丝、纺纱、织造及整理、花式纱等'
                            },
                            {
                                left: '服饰辅料',
                                right: '纽扣衣架、垫肩里衬、缎带拉链、裁缝用品等'
                            },
                            {
                                left: '染化产品',
                                right: '纺织用化学品、染料、助剂'
                            },
                            {
                                left: '家纺产品',
                                right: '床上用品、厨浴家纺、窗帘遮阳、装饰织物、墙纸、地毯靠垫等'
                            }
                        ],
                        exhibits3: '目前，“哥伦比亚国际纺织工业博览会”是我国纺织服装企业开拓哥伦比亚及周边市场的唯一的正规展会平台，纺织类产品需通过资格审查（近3年参展Texworld的企业免审），服装成品不得参展。中国企业参展产品包括：纺机服机及零配件、服装面料、纤维纱线、服饰辅料、家纺产品、鞋帽箱包、染化产品。\n' +
                            'CITS展鼓励：各类手动/自动纺机服机及零配件，染化产品，纱线，具有创新与功能的休闲运动、塑身、泳装、内衣面料，以及高质量高技术含量的家纺产品参展。'
                    },
                    hall: {
                        hall1: '麦德林市长广场会展中心',
                        hall2: '第二大城市麦德林，是哥伦比亚的纺织工业中心。哥伦比亚国际纺织工业博览会于麦德林市长广场会展中心举办，诚挚欢迎全球展商及观众的到来！',
                        hall3: '展览中心',
                        hall4: '麦德林市长广场会展中心，位于麦德林市中心的市场广场，是麦德林人流最集中的地方。展馆区位优越，交通便捷，方便来自全球展商的光临。',
                        hall5: '展馆展位',
                        hall6: '本届哥伦比亚国际家庭用品礼品展，展位分布图如下：'
                    },
                    market: {
                        market1: '        <h2> <strong>遇见多样哥伦比亚</strong></h2>\n' +
                            '        <p>哥伦比亚，哥伦布发现南美新大陆的地方！位于南美洲西北端、中南美的交界处，西邻巴拿马和太平洋，东邻委内瑞拉，南与厄瓜多尔、秘鲁及巴西接壤，北邻加勒比海，国土面积约114.2万平方公里，人口4800万，为南美第二大经济体，是目前拉美营商环境最好的国家。</p>\n' +
                            '        <p>哥伦比亚政治、经济稳定，市场化程度高，先后与美国、加拿大、欧盟、和拉美主要经济体签署自由贸易协定，转口贸易量大，对巴拿马、厄瓜多尔、委内瑞拉（属于原“大哥伦比亚帝国”），以及秘鲁等南美市场有很强的辐射力。</p>\n' +
                            '        <p>哥伦比亚是拉美纺织服装业发达的国家，其纺织业拥有约100年的历史，具有较强竞争力。哥伦比亚服装工业重品牌、重时尚，服装工业超过纺织工业。</p>\n' +
                            '        <p> <strong>产业规模：</strong>哥伦比亚纺织工厂约5,500家，目前从事纺织服装出口的企业2098家，出口额在$1000万以上的企业超过20家；零售店约10,000家。</p>\n' +
                            '        <p>麦德林为哥伦比亚第二大城市、纺织服装生产中心和集散中心，占纺织品生产的53%，服装生产的35%。风景秀丽。</p>\n' +
                            '        <p> <strong>适销类型：</strong>受气候因素影响，哥伦比亚本国市场消费主要为夏装和春秋装。当地有竞争力的产品包括：泳装、内衣、塑身衣、运动装、西服、牛仔、童装、皮具业；当地竞争力较弱的产品：毛衣、休闲服。</p>\n' +
                            '        <p>哥伦比亚纺织服装业不断提高创新意识与能力、注重设计和科技的应用，积极更新知识、技术与设备，使本国生产纺织品适应高附加值与小生态市场，自动化的纺机、服机需求巨大。</p>\n' +
                            '        <p> <strong>进出口情况：</strong>纺织服装出口占哥伦比亚纺织服装产量的30%以上，主要出口中南美地区，其中委内瑞拉占62%；其次是美国和西班牙。</p>\n' +
                            '        <p>哥伦比亚同加拿大、瑞士、美国及欧盟签署了自由贸易协定，彼此间进口关税降低，贸易技术壁垒取消，进一步促进哥伦比亚纺织服装业的发展。</p>\n' +
                            '        <p>从2000年起，哥伦比亚纺织服装产业对欧盟的出口额每年以11.4%的速度激增，到了2011年，增幅达到了惊人的45.8%。在2013年1-5月份，哥伦比亚向欧盟的总出口达到33.45亿美元，同比上升了13.8%。</p>\n' +
                            '        <p>中国公民持有效美国、申根签证访问哥伦比亚，可免签证！</p>',
                        market2: '哥伦比亚地理位置',
                        market3: '哥伦比亚与多国签署自由贸易协定，转口贸易量大、对南美市场辐射能力强，利于中国商品转口。',
                        market4: '展会举办城市麦德林',
                        market5: '麦德林是全国最大纺织工业中心，后为现代化工业城市，城市集中了全国80%以上的纺织品生产。',
                        market6: '中哥经贸往来关系',
                        market7: '中哥两国于1980年建交、两国关系稳定，中国是哥伦比亚第二大贸易伙伴。2015年哥国从中国进口纺织品及原料$8.8亿，超过其从印度、美国、墨西哥进口额的总和。'
                    },
                    match: {
                        match1: '为确保参展效果，提升贸易配对成功率，CoTex 为您提供展前的网络预配服务，持续跟踪潜力买家，获得更大更多商机！'
                    },
                    registration: {
                        registration1: 'Cotex@uaec-expo.com'
                    },
                    offline: {
                        offline1: '哥伦比亚国际纺织工业博览会',
                        offline2: 'Cotex@uaec-expo.com'
                    }
                },
                en: {
                    app: {
                        app1: '23-25 July 2019',
                        app2: 'Medellin Colombia'
                    },
                    home: {
                        home1: 'WELCOME TO CoTex',
                        home2: 'Colombia Textile Industry Sourcing Expo (CoTex) is an excellent sourcing platform for both Chinese and Colombian textile industry brands in Latin America. Orientated to be an international, professional, trade and technical communication platform, especially for the industries of textile machinery, sewing machinery, dye  &  chemical, yarn  &  fabric, home textile with quality and technology, CoTex aims to promote multilateral textile trade and technical communications, especially those in between China and Colombia. ',
                        home3: 'MAKE SURE YOU\'RE HERE',
                        home4: 'At CoTex, which is co-located with Colombiamoda, you can meet multiple Chinese textile industry products one-stop with latest innovations on functionality of the fabrics, new applications especially for athleisure, shape control, swimwear and lingerie, and latest textile machinery, sewing machinery development in regards to sustainability technology. ',
                        home5: 'FIND WHAT YOU DREAM HERE',
                        home6: 'COTEX IS WORTH YOUR VISITING!',
                        home7: 'A foremost international B2B event with global supplying chain and professional market orientation, CoTex is worth your visiting.',
                        home8: "Matchup Expo",
                        home9: 'As a value-added service and to increase your business results, Online and Onsite Matchmaking is served after you finish the Exhibitor/Visitor Application, benefiting your potential business quite a lot.'
                    },
                    Information: {
                        Information1: 'Colombia Textile Industry Sourcing Expo',
                        tabel: [{
                                left: 'Date',
                                right: '23-25 July 2019'
                            },
                            {
                                left: 'Venue',
                                right: 'Plaza Mayor Medellín Conventions and Exhibitions, Medellin, Colombia'
                            },
                            {
                                left: 'Exhibits',
                                right: 'Textile Machinery, Sewing Machinery, Dye  &  Chemical, Yarn, Fabric, Home Textile, Apparel Accessories'
                            },
                            {
                                left: 'Organizers',
                                right: 'CCPIT TEX  <br>' +
                                    'United Asia International Exhibition Group<br>' +
                                    'Inexmoda'
                            },
                            {
                                left: 'Co-located With Colombiamoda',
                                right: ''
                            }
                        ]
                    },
                    products: {
                        products1: 'Exhibition Products',
                        products2: 'CoTex focuses on the following segments:',
                        tabel: [{
                                left: 'Textile & Sewing Machinery',
                                right: 'Manual/ Automatic Textile Machines, Sewing Machines, Machine Accessories  &  Spare Parts'
                            },
                            {
                                left: 'Fabric',
                                right: 'Apparel Fabric, Functional Fabrics, Synthetic Fabrics'
                            },
                            {
                                left: 'Yarn',
                                right: 'Fibre, Yarns, Draw Yarn, Fancy Yarn, Spinning, Special Spinning, Weaving and Finishing'
                            },
                            {
                                left: 'Apparel Accessories',
                                right: 'Button, Hanger, Shoulder Pad, Liner, Ribbon, Zipper, Tailoring Supplies'
                            },
                            {
                                left: 'Home Textiles',
                                right: 'Beddings, Bathroom & Kitchen Textiles, Carpets, Curtain Shading, Decorative Fabrics, Cushions, Wallpaper'
                            },
                            {
                                left: 'Dye  &  Chemical',
                                right: 'Textile Chemicals, Dyestuff and Pigment, Textile, Dyeing and Finishing Auxiliary'
                            },
                        ]
                    },
                    ground: {
                        ground1: 'Plaza Mayor Medellín Conventions and Exhibitions',
                        ground2: 'Plaza Mayor Medellín Conventions and Exhibitions is the international convention and exhibition center of Medellín and is one of the most modern in Colombia, opening in 2006.',
                        ground3: 'Venue',
                        ground4: 'Thanks to its excellent location and transport connections, Plaza Mayor Medellín Conventions and Exhibitions can be reached quickly and easily by air, train or car.',
                        ground5: 'Floor Plan',
                    },
                    press: {
                        press1: 'Press Registration  &  Contact',
                        press2: 'Welcome any member of the press to attend CoTex. We will be happy to help you with any queries when you register online. Alternatively, you might register on site by presenting your business card at the Registration Counter during CoTex.',
                        press3: 'cotex@uaec-expo.com'
                    },
                    offline: {
                        offline1: 'We are looking forward to your visiting at CoTex.  <br>' +
                            'United Asia International Group',
                        offline2: 'cotex@uaec-expo.com'
                    },
                    online: {
                        online1: 'As a value-added service and to increase your business results, Online Matchmaking is served after you finish the Exhibitor/Visitor Application, benefiting your potential business quite a lot.'
                    },
                    b2b: {
                        b2b1: 'Onsite B2B Matchmaking are serviced exclusively for CoTex exhibitors to meet their potential partners for business negotiations most effectively. '
                    }
                },
                share: {
                    home: {
                        img: [
                            '806home1.png',
                            '806home2.png',
                            '806home3.png',
                            '806home4.png',
                            '806home5.png',
                            '806home6.png',
                            '806home7.png',
                            '806home8.png',
                            '806home9.png',
                            '806home10.png',
                            '806home11.png',
                            '806home12.png',
                            '806home13.png',
                            '806home14.png',
                            '806home15.png'
                        ]
                    },
                    homeBg: 'homeBg1.png',
                    match: {
                        img: [
                            'match1.png',
                            'match2.png',
                            'match3.png',
                        ]
                    },
                    market: {
                        img: [
                            '806market1.png',
                            '806market2.png',
                            '806market3.png'
                        ]
                    },
                    hall: {
                        img: [
                            '806hall1.png',
                            '806hall2.png'
                        ]
                    }
                },
                es: {
                    app: {
                        app1: 'Julio 23-25, 2019',
                        app2: 'Medellín，Colombia'
                    },
                    home: {
                        home1: 'BIENVENIDOS A CoTex',
                        home2: 'Expo De Compras De Colombia Industria Textil es un escenario ideal para las marcas chinas y los proveedores Colombianos en américa latina. Sobre la base de redes de negocios mundiales, CoTex pretende convertirse en el líder de la plataforma de comercio textil de Colombia para promover el comercio bilateral y expandir la influencia del mercado.',
                        home3: 'ASEGÚRESE DE QUE ESTÁ AQUÍ',
                        home4: 'En CoTex, puede conocer múltiples productos textiles chinos de una vez por todos en Colombia y establecer conexiones comerciales potenciales con marcas chinas. Lo que más, exhibiendo juntos en diferentes salas en el mismo centro, Colombiamoda y CoTex están disponibles para sus compras.',
                        home5: 'AQUÍ ENCUENTRA LO QUE SUEÑA',
                        home6: '¡CoTex VALE TU PRESENCIA!',
                        home7: 'Este principal evento internacional B2B con el plan de los proveedores globales y la orientación profesional del mercado merece su presencia.',
                        home8: "MATCHMAKING EN LÍNEA",
                        home9: 'Para aumentar la posibilidad de un acuerdo final, se ofrece el servicio de emparejamiento en línea cuando finaliza la solicitud de expositor / visitante, que beneficia mucho a su negocio potencial con los compradores que se registran.'
                    },
                    Information: {
                        Information1: 'Expo De Compras De Colombia Industria Textil',
                        tabel: [{
                                left: 'Fecha',
                                right: 'Julio 23-25, 2019'
                            },
                            {
                                left: 'Lugar',
                                right: 'Plaza Mayor De Medellín Convenciones y Exposiciones, Medellín, Colombia'
                            },
                            {
                                left: 'Exhibiciones',
                                right: 'Ropa  &  Maquinaria Textil, Telas, Hilos, Adornos y Accesorios，Calzado  &  Bolsas, Textiles Para El Hogar, Textiles Químicos'
                            },
                            {
                                left: 'Organizadores',
                                right: 'CCPIT TEX<br>' +
                                    'Inexmoda<br>' +
                                    'UAEC '
                            },
                            {
                                left: 'Co-Ubicado Con Colombiamoda',
                                right: ''
                            }
                        ]
                    },
                    products: {
                        products1: 'Productos De Exposición',
                        products2: 'CoTex se enfoca en los siguientes segmentos',
                        tabel: [{
                                left: 'Ropa  &  Maquinaria Textil',
                                right: 'Máquinas De Textil Manuales / Automáticas, Máquinas De Coser, Accesorios y Repuestos Para Máquinas'
                            },
                            {
                                left: 'Telas',
                                right: 'Telas Para Confección, Telas Funcionales, Telas Sintéticas'
                            },
                            {
                                left: 'Fibras e Hilos',
                                right: 'Fibra, Hilados, Hilos De Dibujo, Hilos De Fantasía, Hilos Especiales, Tejido y Acabado'
                            },
                            {
                                left: 'Accesorios De Ropa',
                                right: 'Button, Suspensión, Hombrera, Forro, Cinta, Cremallera, Suministros De Costura'
                            },
                            {
                                left: 'Textiles Para El Hogar',
                                right: 'Ropa De Cama, Textiles Para La Cocina  &  El Baño, Alfombras, Cortinas, Telas Decorativas, Cojines, Papel Tapi'
                            },
                            {
                                left: 'Tinte + Chem',
                                right: 'Químicos Textiles, Colorantes y Pigmentos, Textiles, Teñido y Acabado Auxiliar'
                            },
                        ]
                    },
                    ground: {
                        ground1: 'Plaza Mayor De Medellín Convenciones y Exposiciones',
                        ground2: 'Plaza mayor de medellín convenciones y exposiciones es un centro internacional de convenciones y exposiciones de medellín y uno de los más modernos de Colombia, la apertura en 2006.',
                        ground3: 'Lugar',
                        ground4: 'Gracias a su excelente ubicación y conexiones de transporte, se puede llegar a la plaza mayor de medellín convenciones y exposiciones de forma rápida y sencilla por avión, tren o coche.',
                        ground5: 'Mapa de planta',
                    },
                    press: {
                        press1: 'Prensa Registro  &  Contacto',
                        press2: 'Cualquier miembro de la prensa que desee asistir a esta feria debe contactarnos. Nuestros contactos estarán encantados de ayudarle con cualquier consulta que pueda tener relacionada con sus informes. Alternativamente, puede registrarse en el sitio presentando su tarjeta de trabajo en el mostrador de inscripción durante la feria.',
                    }
                },
                ExhiInfo:['Textile&Clothing Machine','Others','Luggage&Shoes','Yarns','Trims & Accessories','Fabrics','Textile Chemicals','Home Textile']
            },
            'autoequip-nigeria': {
                logo: '/static/image/logo5.png',
                background: '#C30D23',
                tel: '+86-25-84521101',
                mail: 'info@uaec-expo.com',
                web: 'http://www.uaec-expo.com',
                add: '江苏省南京市苏源大道68-28号联亚国际大厦',
                title: '即刻加入我们，出发尼日利亚国际汽车零配件展览会',
                time:['2019-11-04 09:30:00','2019-11-07 17:30:00'],
                // record: '©2019 UAEC 苏ICP备09034171号-8 苏公安备32011502010951号',
                headTitle: 'AutoEquip - International Automotive Parts, Equipments and Service Trade Fair',
                headTitleZh: '尼日利亚国际汽车零配件展览会',
                htmlTitle: 'CONTACT US',
                oldUrl: 'http://192.168.254.10:810/Web/',
                code: 'an',
                colorVariables: 'C30D23',
                fL: '/static/image/810FL.png',
                zh: {
                    app: {
                        app1: '2019年11月4-7日',
                        app2: '尼日利亚 · 拉各斯'
                    },
                    home: {
                        home1: '西非地区大规模的专业汽车零配件贸易展览会',
                        home2: '尼日利亚国际汽车零配件展览会，为全球汽配企业打开尼日利亚市场提供绝佳契机，是汽配产品进入西非汽配市场的最佳贸易平台，是业内品牌占据西非市场高位的理想之选。 \n' +
                            '尼日利亚国际汽车零配件展览会，依托西非市场最具规模及影响力的拉各斯国际贸易展览会LITF，为您带来潜在商贸订单的同时，也是您提升行业知名度及影响力的重要机遇！',
                        home3: '遇见多样尼日利亚',
                        home4: '石油为尼日利亚的经济助力，激发了巨大市场的需求，带动了国家经济的发展。尼日利亚国际汽车零配件展览会，带您深入尼日利亚，走进西非汽配市场......',
                        home5: '品类齐全的展出产品',
                        home6: '展会精彩不容错过',
                        home7: '尼日利亚国际汽车零配件展览会，专注于汽车及零配件行业相关产品和服务的供应与需求，把达成贸易成交、推动市场的发展作为目标，让与会者从各自的细分领域找到适合自己需求的解决方案。',
                        home8: "B2B网络预配",
                        home9: '为确保参展效果，提升贸易配对成功率，NigeriaTex 将为您提供展前的网络预配服务，持续跟踪潜力买家，获得更大更多商机！'
                    },
                    exhibition: {
                        exhibition1: '尼日利亚国际汽车零配件展览会',
                        tabel: [{
                                left: '展期',
                                right: '2019年11月4-7日'
                            },
                            {
                                left: '展馆',
                                right: '拉各斯TBS展览中心'
                            },
                            {
                                left: '地址',
                                right: '尼日利亚 拉各斯'
                            },
                            {
                                left: '展品范围',
                                right: '部件组件、配件改装、车辆电子、修护设备、车辆保养、车辆烤漆、其他'
                            },
                            {
                                left: '主办单位',
                                right: 'Uninet (Nigeria) Exhibition Co. Limited <br>' +
                                    '联亚国际展览集团（UAEC）'
                            },
                            {
                                left: '同期同馆',
                                right: '拉各斯国际贸易展览会'
                            },
                        ],
                        exhibition2: '尼日利亚拉各斯国际贸易博览会（LITF）始于1981年，该展由拉各斯工商会主办、得到尼联邦政府和拉各斯州政府的大力支持。参展商来自非洲、欧美、亚洲等20多个国家，观众主要来自西共体国家。LITF是目前西非规模最大、影响力最强的展会，也是非洲重要的经贸合作交流平台。',
                        exhibition3: '尼日利亚国际汽车零配件展览会（Auto Equip）与LITF同期举办，展会定位国际化、专业化，着重邀请西非中大型买家，旨在为全球汽配企业打造一个专业的贸易平台！',
                        exhibition4: 'Auto Equip是业内企业开拓西非市场不可或缺的平台！',
                        exhibition5: '',
                    },
                    exhibits: {
                        exhibits1: '展出产品类别',
                        exhibits2: '',
                        tabel: [{
                                left: '部件组件',
                                right: '传动系统、车身零件、电源系统（发动机、变速箱、燃料系统）、驱动控制系统（方向盘、悬吊系统、底盘、活塞、弹簧）、电装系统（连接器、仪表、电装零件、继电器、线组、马达、电池）、内装（橡胶板、空调、内饰木纹状部件）、车外产品、电气系统、驾驶辅助系统、安全系统、排气系统、齿轮及传动装置等'
                            },
                            {
                                left: '配件改装',
                                right: '特别设备、改装服务、轮胎及胎圈、离心管及套管等'
                            },
                            {
                                left: '车辆电子',
                                right: '电子零件、照明设备、汽摩音响、电子娱乐系统、智能导航系统、免提电话等通讯器材、冷气设备等'
                            },
                            {
                                left: '修护设备',
                                right: '保养及修理装备、车间维修及涂漆、维修站建造及管理、诊断与测量测试器材、修护工具及技术、升降台、道路援救及拖吊车设备、仓储设备、轮胎安装、车身维修、废物处理及回收、无油漆凹陷修理等'
                            },
                            {
                                left: '车辆保养',
                                right: '加油站服务站及停车场设备、清洗及维护、美容产品、喷面镀膜、车面覆膜、内装清洁、洗车设备与耗材等'
                            },
                            {
                                left: '车辆烤漆',
                                right: '喷漆厂设备与材料、车辆防锈防腐蚀技术与材料等'
                            },
                            {
                                left: '其他',
                                right: '车辆跟踪系统、收费系统、自动防盗装置、汽油及润滑油等'
                            }
                        ],
                        exhibits3: ''
                    },
                    hall: {
                        hall1: '拉各斯TBS展览中心',
                        hall2: '拉各斯为尼日利亚第一大城市及物流中心。尼日利亚国际汽车零配件展览会，于拉各斯TBS展览中心举办，诚挚欢迎全球展商及观众的到来！',
                        hall3: '展览中心',
                        hall4: '拉各斯TBS展览中心，位于尼日利亚的拉各斯市中心，建筑面积达到10万平方米。便利的交通、优越的区位，便于全球展商的光临。',
                        hall5: '展馆展位',
                        hall6: '本届尼日利亚国际汽车零配件展览会，展位分布图如下：'
                    },
                    market: {
                        market1: ' <h2> <strong>遇见多样尼日利亚</strong></h2>\n' +
                            '        <p>尼日利亚是非洲第一大、世界第二十六大经济体。其经济总量占据西非国家经济共同体总GDP的3/4以上，是全球经济成长最快的国家之一。尼日利亚总人口1.98亿，占非洲总人口的16%，年人口增长率为2.3%，是非洲人口第一大国。尼日利亚政局相对稳定，商业氛围宽松，对华人友好，具有低、中、高不同档次的消费群。</p>\n' +
                            '        <p>尼日利亚为非洲第一大石油生产和出口国，全球五大液化天然气出口国之一。尼对外贸易迅速发展，除少数自己可以生产的商品禁止进口外，对大部分商品采取自由进口和低关税政策。尼日利亚制造业基础薄、刚开始工业化进程，90%的商品依赖进口，属于典型的消费市场。因石油资源丰富、人口众多，汽摩产业市场巨大。</p>\n' +
                            '        <p>尼海关对全散件进口的车辆仅征收5%关税；零配件关税较低，保险杠、制动器、齿轮箱、非驱动轴、消音器、排气管等零配件关税仅10%。</p>\n' +
                            '        <p>尼日利亚不具有汽车工业，80%以上的货物运输和大量人员流动依赖公路，汽车成为最重要交通工具。尼日利亚道路年久失修环境差。国内汽车市场主要为二手车，需大量汽配产品进行维修替换。尼日利亚成为非洲地区最主要的汽车、客车、卡车及配件出口目的地。尼日利亚国际汽车零配件展览会，将是探索西非汽配市场的绝佳平台！</p>\n',
                        market2: '尼日利亚地理位置',
                        market3: '尼日利亚是西非共同体的领头羊，对西非其他国家乃至全非洲都具有很强的辐射力，辐射国家或地区包括苏丹、利比亚、阿尔及利亚、乍得、埃及等。',
                        market4: '展会举办城市拉各斯',
                        market5: '拉各斯为西非第一大城市、经济及物流中心。汽摩配、电器、百货、建材、轮胎、机械机电等西非十大商品物流中心都集中在此。优越的位置、天然的港口、密集的交通、高耸的大楼和飞架的桥梁可以让撒哈拉以南的多数城市失色。',
                        market6: '中尼经贸往来关系',
                        market7: '尼日利亚为中国在非州的第三大贸易伙伴。2017年1-12月，中尼双边贸易额为137.8亿美元，同比增长29.7%。其中，我国对尼日利亚出口121.6亿美元，增长25.1%。',

                    },
                    match: {
                        match1: '为确保参展效果，提升贸易配对成功率，AutoEquip 为您提供展前的网络预配服务，持续跟踪潜力买家，获得更大更多商机！'
                    },
                    registration: {
                        registration1: 'autoequip@uaec-expo.com'
                    },
                    offline: {
                        offline1: '尼日利亚国际汽车零配件展览会',
                        offline2: 'autoequip@uaec-expo.com'
                    }
                },
                en: {
                    app: {
                        app1: '4-7 Nov 2019',
                        app2: 'Lagos, Nigeria'
                    },
                    home: {
                        home1: 'WELCOME TO AUTOEQUIP',
                        home2: 'AutoEquip is a leading professional fair, held annually in Lagos, Nigeria, which has been attached much importance by Nigerian government and relative industrial organizations. Building on worldwide business networks, AutoEquip aims to become the largest platform for auto parts and brands to promote multilateral commerce and expand market influence in West Africa since its establishment in 2017.',
                        home3: 'MAKE SURE YOU\'RE HERE',
                        home4: 'At AutoEquip, which is co-located with LITF (Lagos International Trade Fair), you can meet numerous auto parts suppliers and make potential trade and technical connections with global brands. Join us at Tafawa Balewa Square and  you can get more than what you expected!',
                        home5: 'FIND MORE PRODUCTS HERE',
                        home6: 'AUTOEQUIP IS WORTH YOUR VISITING',
                        home7: 'A foremost international B2B event with global supplying chain and professional market orientation, AutoEquip is worth your visiting.',
                        home8: "MATCHUP EXPO",
                        home9: 'As a value-added service and to increase your business results, Online and Onsite Matchmaking is served after you finish the Exhibitor/Visitor Application, benefiting your potential business quite a lot.'
                    },
                    Information: {
                        Information1: 'AutoEquip',
                        tabel: [{
                                left: 'Date',
                                right: '4-7 Nov 2019'
                            },
                            {
                                left: 'Venue',
                                right: 'Tafawa Balewa Square, Lagos, Nigeria'
                            },
                            {
                                left: 'Exhibits',
                                right: 'Components, Accessories Modification, Vehicle Electronics, Repair Equipment, Vehicle maintenance, Automotive Paint, Others'
                            },
                            {
                                left: 'Organizers',
                                right: 'United Asia International Exhibition Group<br>' +
                                    'Uninet (Nigeria) Exhibition Co., Ltd'
                            },
                            {
                                left: 'Co-located With Lagos International Trade Fair (LITF)',
                                right: ''
                            }
                        ]
                    },
                    products: {
                        products1: 'Exhibition Products',
                        products2: 'AutoEquip focuses on the following segments:',
                        tabel: [{
                                left: 'Components',
                                right: 'Transmission System, Body Parts, Power Supply System (Engine, Gearbox, Fuel System), Drive Control System (Steering Wheel, Suspension System, Chassis, Piston, Spring), Electrical System (Connector, Instrument, Electrical Parts, Relay, Wire group, Motor, Battery), Inside (Rubber Board, Air Conditioner, Interior Wood) Stripe Parts, Outside Products, Electrical Systems, Driving AIDS, Safety Systems, Exhaust Systems, Gears and Transmission Devices etc.'
                            },
                            {
                                left: 'Accessories Modification',
                                right: 'Special Equipment, Modification Service, Tyre and Bead, Centrifuge Tube and Casing etc.'
                            },
                            {
                                left: 'Vehicle Electronics',
                                right: 'Electronic Parts, Lighting Equipment, Car Audio, Electronic Entertainment System, Intelligent Navigation System, Hands-Free Telephone and Other Communication Equipment, Air Conditioning Equipment etc.'
                            },
                            {
                                left: 'Repair Equipment',
                                right: 'Maintenance and Repair Equipment, Workshop Maintenance and Paint, Maintenance Station Construction and Management, Diagnosis and Measurement Test Equipment, Repair Tools and Technology, Lifting Platform, Road Rescue and Towing Equipment, Storage Equipment, Tire Installation, Body Maintenance, Waste Disposal and Recovery, No Paint Concave Repair etc.'
                            },
                            {
                                left: 'Vehicle Maintenance',
                                right: 'Gas Station Service and Parking Facilities, Cleaning and Maintenance, Beauty Products, Spray Coating, Vehicle Surface Covering, Interior Cleaning, Car Wash Equipment and Consumables etc.\n' +
                                    'Vehicle Lacquer: Spray Painting Plant Equipment and Materials, Vehicle Anti Rust and Anti-corrosion Technology and Materials, etc.'
                            },
                            {
                                left: 'Others',
                                right: 'Vehicle Tracking System, Charging System, Automatic Anti-theft Device, Gasoline and Lubricating Oil, etc.'
                            },
                        ]
                    },
                    ground: {
                        ground1: '',
                        ground2: '',
                        ground3: 'Tafawa Balewa\n' +
                            'Square',
                        ground4: 'Tafawa Balewa Square (TBS) is a 35.8-acre ceremonial ground in Lagos .It has been used as a convention center for many fairs inbound and outbound, which is easily accessible by air, sea and land.',
                        ground5: 'Floor Plan',
                    },
                    press: {
                        press1: 'Press Registration  &  Contact',
                        press2: 'Welcome any member of the press to attend AutoEquip. We will be happy to help you with any queries when you register online. Alternatively, you might register on site by presenting your business card at the Registration Counter during Auto Equip.',
                        press3: 'autoequip@uaec-expo.com'
                    },
                    offline: {
                        offline1: 'We are looking forward to your visiting at AutoEquip.<br>' +
                            'United Asia International Group',
                        offline2: 'autoequip@uaec-expo.com'
                    },
                    online: {
                        online1: 'As a value-added service and to increase your business results, Online Matchmaking is served after you finish the Exhibitor/Visitor Application, benefiting your potential business quite a lot.'
                    },
                    b2b: {
                        b2b1: 'Onsite B2B Matchmaking are serviced exclusively for Home Show Nigeria exhibitors to meet their potential partners for business negotiations most effectively. '
                    }
                },
                share: {
                    home: {
                        img: [
                            '810home1.png',
                            '810home2.png',
                            '810home3.png',
                            '810home4.png',
                            '810home5.png',
                            '810home6.png',
                            '810home7.png',
                            '810home8.png',
                            '810home9.png',
                            '810home10.png',
                            '810home11.png',
                            '810home12.png',
                            '810home13.png',
                            '810home14.png',
                            '810home15.png'
                        ]
                    },
                    homeBg: 'homeBg2.png',
                    match: {
                        img: [
                            'match1.png',
                            'match2.png',
                            'match3.png',
                        ]
                    },
                    market: {
                        img: [
                            '810market1.png',
                            '810market2.png',
                            '810market3.png'
                        ]
                    },
                    hall: {
                        img: [
                            '810hall1.png',
                            '810hall2.png'
                        ]
                    }
                },
                ExhiInfo:['Components','Vehicle Electronics','Accessories Modification','Repair Equipment','Vehicle Maintenance','Festivals & Parties','Others']
            },
            //打不开
            'cotex-colombia': {
                logo: '/static/image/logo2.png',
                background: '#6B147D',
                tel: '+86-25-84521101',
                mail: 'info@uaec-expo.com',
                web: 'http://www.uaec-expo.com',
                add: '江苏省南京市苏源大道68-28号联亚国际大厦',
                title: '即刻加入我们，出发哥伦比亚国际纺织工业博览会',
                time:['2019-11-04 09:00:00','2019-11-07 16:00:00'],
                record: '©2019 UAEC 苏ICP备09034171号-4',
                headTitle: 'Colombia Textile Industry Sourcing Expo',
                headTitleZh: '哥伦比亚国际纺织工业博览会',
                htmlTitle: 'CONTACT US',
                oldUrl: 'http://192.168.254.10:806/Web/',
                code: 'cc',
                colorVariables: '6B147D',
                fL: '/static/image/806FL.png',
                fI: ['ccf1.png', 'ccf2.png', 'ccf3.png'],
                esAuth: true,
                zh: {
                    app: {
                        app1: '2019年7月23-25日',
                        app2: '哥伦比亚 • 麦德林'
                    },
                    home: {
                        home1: '欢迎来到哥伦比亚国际纺织工业博览会',
                        home2: '“哥伦比亚国际纺织工业博览会”与南美西语区规模最大、举办历史最悠久的服装展“哥伦比亚国际服装展览会(COLOMBIAMODA)” 同期同馆举办，两展共享买家、宣传等一切资源，中国展商均在CoTex展示。哥伦比亚国际纺织工业博览会，是中国企业开拓哥伦比亚纺织市场唯一的正规平台！',
                        home3: '遇见多样哥伦比亚',
                        home4: '不只有白金、祖母绿、咖啡、鲜花、煤矿，哥伦比亚国际纺织工业博览会，带您走进一个不一样的哥伦比亚！',
                        home5: '发现一个绘声绘色的哥伦比亚国际纺织工业博览会',
                        home6: '就等你来',
                        home7: '哥伦比亚国际纺织工业博览会，专注于纺织相关产品和服务的供应与需求，把达成贸易成交、推动市场的发展作为目标，让与会者从各自的细分领域找到适合自己需求的解决方案。',
                        home8: "B2B网络预配",
                        home9: '为确保参展效果，提升贸易配对成功率， CoTex 将为您提供展前的网络预配服务，持续跟踪潜力买家，获得更大更多商机！'
                    },
                    exhibition: {
                        exhibition1: '哥伦比亚国际纺织工业博览会',
                        tabel: [{
                                left: '展期',
                                right: '2019年7月23-25日'
                            },
                            {
                                left: '展馆',
                                right: '麦德林市长广场会展中心'
                            },
                            {
                                left: '地址',
                                right: '哥伦比亚 麦德林'
                            },
                            {
                                left: '展品范围',
                                right: '纺机服机、服装面料、纤维纱线、服饰辅料、染化产品、鞋帽箱包、家纺产品'
                            },
                            {
                                left: '主办单位',
                                right: '中国纺织贸促会 <br>' +
                                    '联亚国际展览集团（UAEC）<br>' +
                                    'Inexmoda'
                            },
                            {
                                left: '同期同馆',
                                right: 'Colombiamoda'
                            },
                        ],
                        exhibition2: '“哥伦比亚国际纺织工业博览会(Colombia Textile Industry Sourcing Expo,CoTex）”与南美西语区规模最大、举办历史最悠久的服装展“哥伦比亚国际服装展览会(COLOMBIAMODA)” 同期同馆举办，两展共享买家、宣传等一切资源，中国展商均在CoTex展示。',
                        exhibition3: '哥伦比亚国际服装展览会(Colombiamoda)由哥伦比亚服装出口协会（Inexmoda）主办，始于2000年，每年1届，因产业原因，一直未对中国开放。',
                        exhibition4: '2018 Colombiamoda展出面积5万多㎡，哥伦比亚、巴西、秘鲁、西班牙、葡萄牙、德国、法国、意大利等20多个国家和地区的510家企业参展，到会买家来自中南美洲、美国、欧洲等地达21924人。是业内公认的进入哥国市场最佳、也是唯一的展会平台。展会现场成交大，摊位供不应求。',
                        exhibition5: '哥伦比亚国际纺织工业博览会（CoTex）是中国业内企业进入哥伦比亚市场最佳、也是唯一正规的展会平台！',
                    },
                    exhibits: {
                        exhibits1: '展品介绍',
                        exhibits2: '哥伦比亚国际纺织工业博览会，聚焦纺织优品，主要展品如下：',
                        tabel: [{
                                left: '纺机服机',
                                right: '手动/自动纺织机械、缝纫机械、附件及零配件'
                            },
                            {
                                left: '服装面料',
                                right: '服装面料、功能性面料、合成面料等'
                            },
                            {
                                left: '纤维纱线',
                                right: '纤维、抽纱、纱线、特殊纺丝、纺纱、织造及整理、花式纱等'
                            },
                            {
                                left: '服饰辅料',
                                right: '纽扣衣架、垫肩里衬、缎带拉链、裁缝用品等'
                            },
                            {
                                left: '染化产品',
                                right: '纺织用化学品、染料、助剂'
                            },
                            {
                                left: '家纺产品',
                                right: '床上用品、厨浴家纺、窗帘遮阳、装饰织物、墙纸、地毯靠垫等'
                            }
                        ],
                        exhibits3: '目前，“哥伦比亚国际纺织工业博览会”是我国纺织服装企业开拓哥伦比亚及周边市场的唯一的正规展会平台，纺织类产品需通过资格审查（近3年参展Texworld的企业免审），服装成品不得参展。中国企业参展产品包括：纺机服机及零配件、服装面料、纤维纱线、服饰辅料、家纺产品、鞋帽箱包、染化产品。\n' +
                            'CITS展鼓励：各类手动/自动纺机服机及零配件，染化产品，纱线，具有创新与功能的休闲运动、塑身、泳装、内衣面料，以及高质量高技术含量的家纺产品参展。'
                    },
                    hall: {
                        hall1: '麦德林市长广场会展中心',
                        hall2: '第二大城市麦德林，是哥伦比亚的纺织工业中心。哥伦比亚国际纺织工业博览会于麦德林市长广场会展中心举办，诚挚欢迎全球展商及观众的到来！',
                        hall3: '展览中心',
                        hall4: '麦德林市长广场会展中心，位于麦德林市中心的市场广场，是麦德林人流最集中的地方。展馆区位优越，交通便捷，方便来自全球展商的光临。',
                        hall5: '展馆展位',
                        hall6: '本届哥伦比亚国际纺织工业博览会，展位分布图如下：'
                    },
                    market: {
                        market1: '        <h2> <strong>遇见多样哥伦比亚</strong></h2>\n' +
                            '        <p>哥伦比亚，哥伦布发现南美新大陆的地方！位于南美洲西北端、中南美的交界处，西邻巴拿马和太平洋，东邻委内瑞拉，南与厄瓜多尔、秘鲁及巴西接壤，北邻加勒比海，国土面积约114.2万平方公里，人口4800万，为南美第二大经济体，是目前拉美营商环境最好的国家。</p>\n' +
                            '        <p>哥伦比亚政治、经济稳定，市场化程度高，先后与美国、加拿大、欧盟、和拉美主要经济体签署自由贸易协定，转口贸易量大，对巴拿马、厄瓜多尔、委内瑞拉（属于原“大哥伦比亚帝国”），以及秘鲁等南美市场有很强的辐射力。</p>\n' +
                            '        <p>哥伦比亚是拉美纺织服装业发达的国家，其纺织业拥有约100年的历史，具有较强竞争力。哥伦比亚服装工业重品牌、重时尚，服装工业超过纺织工业。</p>\n' +
                            '        <p> <strong>产业规模：</strong>哥伦比亚纺织工厂约5,500家，目前从事纺织服装出口的企业2098家，出口额在$1000万以上的企业超过20家；零售店约10,000家。</p>\n' +
                            '        <p>麦德林为哥伦比亚第二大城市、纺织服装生产中心和集散中心，占纺织品生产的53%，服装生产的35%。风景秀丽。</p>\n' +
                            '        <p> <strong>适销类型：</strong>受气候因素影响，哥伦比亚本国市场消费主要为夏装和春秋装。当地有竞争力的产品包括：泳装、内衣、塑身衣、运动装、西服、牛仔、童装、皮具业；当地竞争力较弱的产品：毛衣、休闲服。</p>\n' +
                            '        <p>哥伦比亚纺织服装业不断提高创新意识与能力、注重设计和科技的应用，积极更新知识、技术与设备，使本国生产纺织品适应高附加值与小生态市场，自动化的纺机、服机需求巨大。</p>\n' +
                            '        <p> <strong>进出口情况：</strong>纺织服装出口占哥伦比亚纺织服装产量的30%以上，主要出口中南美地区，其中委内瑞拉占62%；其次是美国和西班牙。</p>\n' +
                            '        <p>哥伦比亚同加拿大、瑞士、美国及欧盟签署了自由贸易协定，彼此间进口关税降低，贸易技术壁垒取消，进一步促进哥伦比亚纺织服装业的发展。</p>\n' +
                            '        <p>从2000年起，哥伦比亚纺织服装产业对欧盟的出口额每年以11.4%的速度激增，到了2011年，增幅达到了惊人的45.8%。在2013年1-5月份，哥伦比亚向欧盟的总出口达到33.45亿美元，同比上升了13.8%。</p>\n' +
                            '        <p>中国公民持有效美国、申根签证访问哥伦比亚，可免签证！</p>',
                        market2: '哥伦比亚地理位置',
                        market3: '哥伦比亚与多国签署自由贸易协定，转口贸易量大、对南美市场辐射能力强，利于中国商品转口。',
                        market4: '展会举办城市麦德林',
                        market5: '麦德林是全国最大纺织工业中心，后为现代化工业城市，城市集中了全国80%以上的纺织品生产。',
                        market6: '中哥经贸往来关系',
                        market7: '中哥两国于1980年建交、两国关系稳定，中国是哥伦比亚第二大贸易伙伴。2015年哥国从中国进口纺织品及原料$8.8亿，超过其从印度、美国、墨西哥进口额的总和。'
                    },
                    match: {
                        match1: '为确保参展效果，提升贸易配对成功率，CoTex 为您提供展前的网络预配服务，持续跟踪潜力买家，获得更大更多商机！'
                    },
                    registration: {
                        registration1: 'Cotex@uaec-expo.com'
                    },
                    offline: {
                        offline1: '哥伦比亚国际纺织工业博览会',
                        offline2: 'Cotex@uaec-expo.com'
                    }
                },
                en: {
                    app: {
                        app1: '23-25 July 2019',
                        app2: 'Medellin Colombia'
                    },
                    home: {
                        home1: 'WELCOME TO COTEX',
                        home2: 'Colombia Textile Industry Sourcing Expo (CoTex) is an excellent sourcing platform for both Chinese and Colombian textile industry brands in Latin America. Orientated to be an international, professional, trade and technical communication platform, especially for the industries of textile machinery, sewing machinery, dye  &  chemical, yarn  &  fabric, home textile with quality and technology, CoTex aims to promote multilateral textile trade and technical communications, especially those in between China and Colombia. ',
                        home3: 'MAKE SURE YOU\'RE HERE',
                        home4: 'At CoTex, which is co-located with Colombiamoda, you can meet multiple Chinese textile industry products one-stop with latest innovations on functionality of the fabrics, new applications especially for athleisure, shape control, swimwear and lingerie, and latest textile machinery, sewing machinery development in regards to sustainability technology. ',
                        home5: 'FIND WHAT YOU DREAM HERE',
                        home6: 'COTEX IS WORTH YOUR VISITING!',
                        home7: 'A foremost international B2B event with global supplying chain and professional market orientation, CoTex is worth your visiting.',
                        home8: "MATCHUP EXPO",
                        home9: 'As a value-added service and to increase your business results, Online and Onsite Matchmaking is served after you finish the Exhibitor/Visitor Application, benefiting your potential business quite a lot.'
                    },
                    Information: {
                        Information1: 'Colombia Textile Industry Sourcing Expo',
                        tabel: [{
                                left: 'Date',
                                right: '23-25 July 2019'
                            },
                            {
                                left: 'Venue',
                                right: 'Plaza Mayor Medellín Conventions and Exhibitions, Medellin, Colombia'
                            },
                            {
                                left: 'Exhibits',
                                right: 'Textile Machinery, Sewing Machinery, Dye  &  Chemical, Yarn, Fabric, Home Textile, Apparel Accessories'
                            },
                            {
                                left: 'Organizers',
                                right: 'CCPIT TEX  <br>' +
                                    'United Asia International Exhibition Group<br>' +
                                    'Inexmoda'
                            },
                            {
                                left: 'Co-located With Colombiamoda',
                                right: ''
                            }
                        ]
                    },
                    products: {
                        products1: 'Exhibition Products',
                        products2: 'CoTex focuses on the following segments:',
                        tabel: [{
                                left: 'Textile & Sewing Machinery',
                                right: 'Manual/ Automatic Textile Machines, Sewing Machines, Machine Accessories  &  Spare Parts'
                            },
                            {
                                left: 'Fabric',
                                right: 'Apparel Fabric, Functional Fabrics, Synthetic Fabrics'
                            },
                            {
                                left: 'Yarn',
                                right: 'Fibre, Yarns, Draw Yarn, Fancy Yarn, Spinning, Special Spinning, Weaving and Finishing'
                            },
                            {
                                left: 'Apparel Accessories',
                                right: 'Button, Hanger, Shoulder Pad, Liner, Ribbon, Zipper, Tailoring Supplies'
                            },
                            {
                                left: 'Home Textiles',
                                right: 'Beddings, Bathroom & Kitchen Textiles, Carpets, Curtain Shading, Decorative Fabrics, Cushions, Wallpaper'
                            },
                            {
                                left: 'Dye  &  Chemical',
                                right: 'Textile Chemicals, Dyestuff and Pigment, Textile, Dyeing and Finishing Auxiliary'
                            },
                        ]
                    },
                    ground: {
                        ground1: 'Plaza Mayor Medellín Conventions and Exhibitions',
                        ground2: 'Plaza Mayor Medellín Conventions and Exhibitions is the international convention and exhibition center of Medellín and is one of the most modern in Colombia, opening in 2006.',
                        ground3: 'Venue',
                        ground4: 'Thanks to its excellent location and transport connections, Plaza Mayor Medellín Conventions and Exhibitions can be reached quickly and easily by air, train or car.',
                        ground5: 'Floor Plan',
                    },
                    press: {
                        press1: 'Press Registration  &  Contact',
                        press2: 'Welcome any member of the press to attend CoTex. We will be happy to help you with any queries when you register online. Alternatively, you might register on site by presenting your business card at the Registration Counter during CoTex.',
                        press3: 'cotex@uaec-expo.com'
                    },
                    offline: {
                        offline1: 'We are looking forward to your visiting at CoTex.  <br>' +
                            'United Asia International Group',
                        offline2: 'cotex@uaec-expo.com'
                    },
                    online: {
                        online1: 'As a value-added service and to increase your business results, Online Matchmaking is served after you finish the Exhibitor/Visitor Application, benefiting your potential business quite a lot.'
                    },
                    b2b: {
                        b2b1: 'Onsite B2B Matchmaking are serviced exclusively for CoTex exhibitors to meet their potential partners for business negotiations most effectively. '
                    }
                },
                share: {
                    home: {
                        img: [
                            '806home1.png',
                            '806home2.png',
                            '806home3.png',
                            '806home4.png',
                            '806home5.png',
                            '806home6.png',
                            '806home7.png',
                            '806home8.png',
                            '806home9.png',
                            '806home10.png',
                            '806home11.png',
                            '806home12.png',
                            '806home13.png',
                            '806home14.png',
                            '806home15.png'
                        ]
                    },
                    homeBg: 'homeBg1.png',
                    match: {
                        img: [
                            'match1.png',
                            'match2.png',
                            'match3.png',
                        ]
                    },
                    market: {
                        img: [
                            '806market1.png',
                            '806market2.png',
                            '806market3.png'
                        ]
                    },
                    hall: {
                        img: [
                            '806hall1.png',
                            '806hall2.png'
                        ]
                    }
                },
                es: {
                    app: {
                        app1: 'Julio 23-25, 2019',
                        app2: 'Medellín，Colombia'
                    },
                    home: {
                        home1: 'BIENVENIDOS A CoTex',
                        home2: 'Expo De Compras De Colombia Industria Textil es un escenario ideal para las marcas chinas y los proveedores Colombianos en américa latina. Sobre la base de redes de negocios mundiales, CoTex pretende convertirse en el líder de la plataforma de comercio textil de Colombia para promover el comercio bilateral y expandir la influencia del mercado.',
                        home3: 'ASEGÚRESE DE QUE ESTÁ AQUÍ',
                        home4: 'En CoTex, puede conocer múltiples productos textiles chinos de una vez por todos en Colombia y establecer conexiones comerciales potenciales con marcas chinas. Lo que más, exhibiendo juntos en diferentes salas en el mismo centro, Colombiamoda y CoTex están disponibles para sus compras.',
                        home5: 'AQUÍ ENCUENTRA LO QUE SUEÑA',
                        home6: '¡CoTex VALE TU PRESENCIA!',
                        home7: 'Este principal evento internacional B2B con el plan de los proveedores globales y la orientación profesional del mercado merece su presencia.',
                        home8: "MATCHMAKING EN LÍNEA",
                        home9: 'Para aumentar la posibilidad de un acuerdo final, se ofrece el servicio de emparejamiento en línea cuando finaliza la solicitud de expositor / visitante, que beneficia mucho a su negocio potencial con los compradores que se registran.'
                    },
                    Information: {
                        Information1: 'Expo De Compras De Colombia Industria Textil',
                        tabel: [{
                                left: 'Fecha',
                                right: 'Julio 23-25, 2019'
                            },
                            {
                                left: 'Lugar',
                                right: 'Plaza Mayor De Medellín Convenciones y Exposiciones, Medellín, Colombia'
                            },
                            {
                                left: 'Exhibiciones',
                                right: 'Ropa  &  Maquinaria Textil, Telas, Hilos, Adornos y Accesorios，Calzado  &  Bolsas, Textiles Para El Hogar, Textiles Químicos'
                            },
                            {
                                left: 'Organizadores',
                                right: 'CCPIT TEX<br>' +
                                    'Inexmoda<br>' +
                                    'UAEC '
                            },
                            {
                                left: 'Co-Ubicado Con Colombiamoda',
                                right: ''
                            }
                        ]
                    },
                    products: {
                        products1: 'Productos De Exposición',
                        products2: 'CoTex se enfoca en los siguientes segmentos',
                        tabel: [{
                                left: 'Ropa  &  Maquinaria Textil',
                                right: 'Máquinas De Textil Manuales / Automáticas, Máquinas De Coser, Accesorios y Repuestos Para Máquinas'
                            },
                            {
                                left: 'Telas',
                                right: 'Telas Para Confección, Telas Funcionales, Telas Sintéticas'
                            },
                            {
                                left: 'Fibras e Hilos',
                                right: 'Fibra, Hilados, Hilos De Dibujo, Hilos De Fantasía, Hilos Especiales, Tejido y Acabado'
                            },
                            {
                                left: 'Accesorios De Ropa',
                                right: 'Button, Suspensión, Hombrera, Forro, Cinta, Cremallera, Suministros De Costura'
                            },
                            {
                                left: 'Textiles Para El Hogar',
                                right: 'Ropa De Cama, Textiles Para La Cocina  &  El Baño, Alfombras, Cortinas, Telas Decorativas, Cojines, Papel Tapi'
                            },
                            {
                                left: 'Tinte + Chem',
                                right: 'Químicos Textiles, Colorantes y Pigmentos, Textiles, Teñido y Acabado Auxiliar'
                            },
                        ]
                    },
                    ground: {
                        ground1: 'Plaza Mayor De Medellín Convenciones y Exposiciones',
                        ground2: 'Plaza mayor de medellín convenciones y exposiciones es un centro internacional de convenciones y exposiciones de medellín y uno de los más modernos de Colombia, la apertura en 2006.',
                        ground3: 'Lugar',
                        ground4: 'Gracias a su excelente ubicación y conexiones de transporte, se puede llegar a la plaza mayor de medellín convenciones y exposiciones de forma rápida y sencilla por avión, tren o coche.',
                        ground5: 'Mapa de planta',
                    },
                    press: {
                        press1: 'Prensa Registro  &  Contacto',
                        press2: 'Cualquier miembro de la prensa que desee asistir a esta feria debe contactarnos. Nuestros contactos estarán encantados de ayudarle con cualquier consulta que pueda tener relacionada con sus informes. Alternativamente, puede registrarse en el sitio presentando su tarjeta de trabajo en el mostrador de inscripción durante la feria.',
                    }
                }
            },
            'homeshow-colombia': {
                logo: '/static/image/logo.png',
                background: '#FAAB23',
                tel: '+86-25-84521101',
                mail: 'info@uaec-expo.com',
                web: 'http://www.uaec-expo.com',
                add: '江苏省南京市苏源大道68-28号联亚国际大厦',
                title: '即刻加入我们，出发哥伦比亚家庭用品礼品展',
                time:['2019-11-04 09:00:00','2019-11-07 16:00:00'],
                // record: '©2019 UAEC 苏ICP备09034171号-5 苏公安备32011502010949号',
                headTitle: 'Latin America Home Show Colombia--International Houseware and Gift Fair',
                headTitleZh: '哥伦比亚家庭用品礼品展',
                htmlTitle: 'CONTACT US',
                code: 'hc',
                oldUrl: 'http://192.168.254.10:807/Web/',
                colorVariables: 'FAAB23',
                fL: '/static/image/807FL.png',
                esAuth: true,
                zh: {
                    app: {
                        app1: '2019年8月28-30日',
                        app2: '哥伦比亚 · 波哥大'
                    },
                    home: {
                        home1: '欢迎来到哥伦比亚国际家庭用品礼品展',
                        home2: '哥伦比亚国际家庭用品礼品展Home Show Colombia，哥伦比亚目前唯一对中国企业开放的礼品及家庭用品专业B2B展，是中国企业开拓南美西语市场不可或缺的平台。<br>' +
                            '<br>' +
                            '按照全球供应链理念，与南美洲规模、影响力最大的礼品家庭用品批发展Feria Del Hogar同期同馆，打造一个国际性的B2B家庭用品Sourcing展Home Show Colombia，为中到大宗采购商打造一个专业的采购平台。\n' +
                            '<br><br>' +
                            '哥伦比亚国际家庭用品礼品展，是中国品牌进入大宗拉美市场的理想之选。',
                        home3: '遇见哥伦比亚',
                        home4: '不只有白金、祖母绿、咖啡、鲜花、煤矿，哥伦比亚国际家庭用品礼品展，带您走进一个不一样的哥伦比亚！',
                        home5: '聚焦生活优品',
                        home6: '精彩展会等你来',
                        home7: '哥伦比亚国际家庭用品礼品展，全球供应链理念，国际化、专业化定位，是您不可错过的绝佳B2B展会。',
                        home8: "B2B网络预配",
                        home9: '为确保参展效果，提升贸易配对成功率， Home Show Colombia 将为您提供展前的网络预配服务，持续跟踪潜力买家，获得更大更多商机！'
                    },
                    exhibition: {
                        exhibition1: '哥伦比亚国际家庭用品礼品展览会',
                        tabel: [{
                                left: '展期',
                                right: '2019年8月28-30日'
                            },
                            {
                                left: '展馆',
                                right: '考费利亚展览中心'
                            },
                            {
                                left: '地址',
                                right: '哥伦比亚 波哥大'
                            },
                            {
                                left: '展品范围',
                                right: '餐厨家用、家庭装饰、家纺产品、花园园艺、礼品办公、节日派对、消费电子、运动美容'
                            },
                            {
                                left: '主办单位',
                                right: '联亚国际展览集团（UAEC） <br>' +
                                    'Corferias'
                            },
                            {
                                left: '同期同馆',
                                right: 'Feria Del Hogar'
                            },
                        ],
                        exhibition2: 'Feria del hogar始于1983年，是南美洲业内规模、影响力最大的礼品家庭用品批发展，由哥伦比亚最大的展览公司Corferia主办、得到哥伦比亚相关行业协会的大力支持。2018 Feria del hogar总面积超过10万㎡、净面积5.7万㎡，参展商为来自南美、北美、中东、亚洲等10多个国家的大型进口商、批发商，达692家；观众为来自北美及南美洲国家的批发商、零售商，高达179771人，成交量巨大。',
                        exhibition3: '哥伦比亚国际家庭用品礼品展览会（Home Show Colombia）按照全球供应链理念，与Feria del hogar同期同馆举办，定位于国际化、专业化，打造一个国际性的B2B家庭用品采购展，为中到大宗采购商打造一个专业的采购平台。其展商为全球生产厂家、出口商，为中到大宗采购商打造一个专业的采购平台，着重邀请中南美大中型进口商、大型连锁商场、相关批发商等到会采购。',
                        exhibition4: 'Home Show展共享Feria del hogar宣传推广等资源，Feria del hogar的展商实际均为Home Show的买家，另通过增值的定向宣传、点对点买家邀请、展商预登记网络配对、现场B2B贸易配对等形式，保障参展效果。',
                        exhibition5: '哥伦比亚国际家庭用品礼品展览会（Home Show Colombia）是哥国目前唯一对中国企业开放的家庭用品礼品专业B2B展，是中国企业开拓南美西语市场不可或缺的平台！',
                    },
                    exhibits: {
                        exhibits1: '展品介绍',
                        exhibits2: '哥伦比亚国际家庭用品礼品展，聚焦生活优品，主要展品如下：\n',
                        tabel: [{
                                left: '餐厨家用',
                                right: '厨房用品、餐桌用品、卫生清洁、收纳用具、浴室用品、家具与配件、宠物用品、日用消费品等'
                            },
                            {
                                left: '家庭装饰',
                                right: '灯具照明、人造花果、油画相框、装饰蜡烛、墙纸、软装饰品、工艺礼品、镜子挂钟、时尚创意、家居改进、五金工具等'
                            },
                            {
                                left: '家纺产品',
                                right: '床上用品、厨浴家纺、窗帘遮阳、装饰织物、墙纸、地毯靠垫等'
                            },
                            {
                                left: '花园园艺',
                                right: '草坪用品、露营用品、野炊用品、园林机械、花园用品、园艺工具、烧烤等'
                            },
                            {
                                left: '礼品办公',
                                right: '礼品工艺品、办公文具、箱包、旅游用品、薰香制品、贺卡、玩具、促销用品、珠宝首饰、个人用品等'
                            },
                            {
                                left: '节日派对',
                                right: '圣诞用品、节日派对饰品礼品、宗教饰品、饰品包装、焰火等'
                            },
                            {
                                left: '消费电子',
                                right: '家用电器、电子设备、电脑周边、视频音频、移动终端等'
                            },
                            {
                                left: '运动美容',
                                right: '运动器械、运动用品、户外用品、按摩保健、美容美发等'
                            }
                        ],
                        exhibits3: ''
                    },
                    hall: {
                        hall1: '考费利亚展览中心',
                        hall2: '哥伦比亚国际家庭用品礼品展览会，于波哥大市中心的考费利亚展览中心举办！ 波哥大为哥伦比亚首府和第一大城市，是哥伦比亚的消费产品的采购中心。',
                        hall3: '展览中心',
                        hall4: '考费利亚展览中心，坐拥波哥大绝佳区位，交通便捷！',
                        hall5: '展馆展位',
                        hall6: '本届哥伦比亚国际家庭用品礼品展，展位分布图如下：'
                    },
                    market: {
                        market1: ' <h2> <strong>遇见哥伦比亚</strong></h2>\n' +
                            '        <p>哥伦比亚，哥伦布发现南美新大陆的地方！位于南美洲西北端、中南美的交界处，西邻巴拿马和太平洋，东邻委内瑞拉，南与厄瓜多尔、秘鲁及巴西接壤，北邻加勒比海，国土面积约114.2万平方公里，人口4800万，为南美第二大经济体，是目前拉美营商环境最好的国家。</p>\n' +
                            '        <p>哥伦比亚政治、经济稳定，市场化程度高，先后与美国、加拿大、欧盟、和拉美主要经济体签署自由贸易协定，转口贸易量大，对巴拿马、厄瓜多尔、委内瑞拉（属于原“大哥伦比亚帝国”），以及秘鲁等南美市场有很强的辐射力。</p>\n' +
                            '        <p>哥伦比亚主力消费群体较年轻、乐于消费；热衷提升家居生活质量，注重休闲和家庭生活，喜爱购置电器、现代家居用品、家庭娱乐设备等，中国制造的家用消费品在哥伦比亚有着较大的市场！</p>\n' +
                            '        <p>波哥大为哥伦比亚首府和第一大城市，哥伦比亚国消费产品的采购中心。</p>\n' +
                            '        <p>中国公民持有效美国、申根签证访问哥伦比亚，可免签证！</p>\n',
                        market2: '哥伦比亚地理位置',
                        market3: '哥伦比亚政治、经济稳定，市场化程度高，先后与美国、加拿大、欧盟、和拉美主要经济体签署自由贸易协定，转口贸易量大，对巴拿马、厄瓜多尔、委内瑞拉（属于原“大哥伦比亚帝国”），以及秘鲁等南美市场有很强的辐射力',
                        market4: '展会举办城市波哥大',
                        market5: '波哥大是哥伦比亚首都、第一大城市，是南美洲发展最快的都市。波哥大是哥伦比亚经济中心、拉丁美洲最大的工业中心。工业有汽车装配、水泥、化工、纺织、药品、皮革、啤酒、绿宝石加工等部门。',
                        market6: '中哥经贸往来关系',
                        market7: '中国是哥伦比亚第二大贸易伙伴。哥伦比亚工业基础薄弱，所需产品大量依赖进口。2017年，中哥双边货物进出口额为107.6亿美元，增加9.8%。截止到12月，中国为哥伦比亚第二大进口来源地和第三大出口市场。中国的电子和音像制品、家电、纺织、金属制品等产品在哥伦布比亚受欢迎。',

                    },
                    match: {
                        match1: '为确保参展效果，提升贸易配对成功率，Home Show Colombia 为您提供展前的网络预配服务，持续跟踪潜力买家，获得更大更多商机！'
                    },
                    registration: {
                        registration1: 'homeshowcolombia@uaec-expo.com'
                    },
                    offline: {
                        offline1: '哥伦比亚国际家庭用品礼品展',
                        offline2: 'homeshowcolombia@uaec-expo.com'
                    }
                },
                en: {
                    app: {
                        app1: '28-30 Aug 2019',
                        app2: 'Bogotá, Colombia'
                    },
                    home: {
                        home1: 'WELCOME TO HOME SHOW COLOMBIA',
                        home2: 'Latin America Home Show Colombia is one of the Home Show series exhibitions in Latin America. Building on worldwide business networks, Home Show Colombia aims to promote multilateral consumer goods trade since its establishment. ',
                        home3: 'MAKE SURE YOU\'RE HERE',
                        home4: 'At Latin America Home Show Colombia, which is co-located with Feria Del Hogar, you can meet a kaleidoscope of global consumer goods one-stop in Colombia and make potential trading connections with global brands. Join us at Corferias Convention Centre and enjoy potential trade and connections with global brands! You can get more than what you expected!',
                        home5: 'FIND WHAT YOU DREAM HERE',
                        home6: 'HOME SHOW COLOMBIA IS WORTH YOUR VISITING',
                        home7: 'A foremost international B2B event with global supplying chain and professional market orientation, Latin America Home Show Colombia is worth your visiting.',
                        home8: "MATCHUP EXPO",
                        home9: 'As a value-added service and to increase your business results, Online and Onsite Matchmaking is served after you finish the Exhibitor/Visitor Application, benefiting your potential business quite a lot.'
                    },
                    Information: {
                        Information1: 'Home Show Colombia',
                        tabel: [{
                                left: 'Date',
                                right: '28-30 Aug 2019'
                            },
                            {
                                left: 'Venue',
                                right: 'Corferias Convention Centre, Bogotá, Colombia'
                            },
                            {
                                left: 'Exhibits',
                                right: 'Household Products, Home Textiles, Home Decoration, Gifts, Holiday  &  Party Supplies, Garden  &  Gardening, Consumer Electronics, Accessory, Pets Accessories'
                            },
                            {
                                left: 'Organizers',
                                right: 'United Asia International Exhibition Group<br>' +
                                    'Corferias <br>'
                            },
                            {
                                left: 'Co-located With Feria Del Hogar',
                                right: ''
                            }
                        ]
                    },
                    products: {
                        products1: 'Exhibition Products',
                        products2: 'Latin America Home Show Colombia focuses on the following segments.',
                        tabel: [{
                                left: 'Housewares Products',
                                right: 'Kitchenware, Tableware, Toiletries, Storage Utensils, Furniture  &  Accessories, Bathroom Products, Daily Consuming Goods'
                            },
                            {
                                left: 'Home Decoration',
                                right: 'Lighting, Artificial Flower  &  Fruit, Decorative Candle, Painting, Photo Frame, Soft Decoration, Arts  &  Crafts, Hardware, Tools, Home Improvement'
                            },
                            {
                                left: 'Home Textile',
                                right: 'Pillow, Quilt, Bedspread, Sheet, Cushion, Curtain, Carpet, Kitchen Textiles, Bathroom Textiles, Wallpaper'
                            },
                            {
                                left: 'Garden  &  Gardening',
                                right: 'Lawn Supplies, Camping Supplies, Picnic Supplies, Garden Machinery, Garden Supplies, Gardening Tools, Barbecue'
                            },
                            {
                                left: 'Gift',
                                right: 'Gifts, Arts  &  Crafts, Stationery, Suitcase, Travel Goods, Aromatherapy Product, Wrapping Paper, Greeting Card, Toy, Promotional Item, Personal Belongings'
                            },
                            {
                                left: 'Holiday  &  Party Supplies',
                                right: 'Christmas Supplies, Holiday Supplies  &  Decoration, Gifts, Religious Supplies'
                            },
                            {
                                left: 'Consumer Electronics',
                                right: 'Household Appliances, Electronic Devices, Computer  &  Perimeters, Video and Audio, Movable Terminal (NOTE: No products related to the security sector such as monitoring security video system will be allowed)'
                            },
                            {
                                left: 'Accessory',
                                right: 'Accessories such as Jewelry and Bags'
                            },
                            {
                                left: 'Pets Accessories',
                                right: 'Accessories for Pets'
                            },
                        ]
                    },
                    ground: {
                        ground1: 'Corferias Convention Centre',
                        ground2: 'Corferias is a convention center located in the city of Bogotá Colombia, between Quinta Paredes and El Recuerdo neighborhoods. It is a venue of local, national and international events.',
                        ground3: 'Venue',
                        ground4: 'Thanks to its excellent location and transport connections, Corferia can be reached quickly and easily by air, train or car.',
                        ground5: 'Floor Plan',
                    },
                    press: {
                        press1: 'Press Registration  &  Contact',
                        press2: 'Welcome any member of the press to attend Home Show Colombia. We will be happy to help you with any queries when you register online. Alternatively, you might register on site by presenting your business card at the Registration Counter during Home Show Colombia.',
                        press3: 'homeshowcolombia@uaec-expo.com'
                    },
                    offline: {
                        offline1: 'We are looking forward to your visiting at Home Show Colombia.<br>' +
                            'United Asia International Group',
                        offline2: 'homeshowcolombia@uaec-expo.com'
                    },
                    online: {
                        online1: 'As a value-added service and to increase your business results, Online Matchmaking is served after you finish the Exhibitor/Visitor Application, benefiting your potential business quite a lot.'
                    },
                    b2b: {
                        b2b1: 'Onsite B2B Matchmaking are serviced exclusively for Home Show Colombia exhibitors to meet their potential partners for business negotiations most effectively. '
                    }
                },
                share: {
                    home: {
                        img: [
                            '807home1.png',
                            '807home2.png',
                            '807home3.png',
                            '807home4.png',
                            '807home5.png',
                            '807home6.png',
                            '807home7.png',
                            '807home8.png',
                            '807home9.png',
                            '807home10.png',
                            '807home11.png',
                            '807home12.png',
                            '807home13.png',
                            '807home14.png',
                            '807home15.png'
                        ]
                    },
                    homeBg: 'homeBg1.png',
                    match: {
                        img: [
                            '807match1.png',
                            '807match2.png',
                            '807match3.png',
                        ]
                    },
                    market: {
                        img: [
                            '807market1.png',
                            '807market2.png',
                            '807market3.png'
                        ]
                    },
                    hall: {
                        img: [
                            '807hall1.png',
                            '807hall2.png'
                        ]
                    }
                },
                es: {
                    app: {
                        app1: 'Agosto 28-30, 2019',
                        app2: 'Bogotá, Colombia'
                    },
                    home: {
                        home1: 'BIENVENIDOS A HOME SHOW COLOMBIA',
                        home2: 'Celebrada por primera vez en 2019, Home Show Colombia es una extensión de series de Home Show en América Latina. Basándose en las redes de negocios mundiales, Home Show Colombia pretende convertirse en el líder de la plataforma profesional de marcas chinas en Colombia, promoviendo el comercio bilateral y expandiendo la influencia del mercado.',
                        home3: 'ASEGÚRESE DE QUE ESTÁ AQUÍ',
                        home4: 'En Home Show Colombia, puede conocer múltiples productos textiles chinos de una vez por todos en Colombia y establecer conexiones comerciales potenciales con las marcas chinas. Lo que más, exhibiendo juntos en diferentes salas en el mismo centro, Feria Del Hogar Y Home Show Colombia están disponibles para sus compras.\n',
                        home5: 'AQUÍ ENCUENTRA LO QUE SUEÑA',
                        home6: 'HOME SHOW COLOMBIA',
                        home7: 'Este principal evento internacional B2B con el plan de los proveedores globales y la orientación profesional del mercado merece su presencia.',
                        home8: "MATCHMAKING EN LÍNEA",
                        home9: 'Para aumentar la posibilidad de un acuerdo final, se ofrece el Servicio de emparejamiento en línea cuando finaliza la solicitud de expositor / visitante, que beneficia mucho a su negocio potencial con los compradores que se registran.'
                    },
                    Information: {
                        Information1: 'Home Show Colombia',
                        tabel: [{
                                left: 'Fecha',
                                right: '28-30 De Agosto De 2019'
                            },
                            {
                                left: 'Lugar',
                                right: 'Centro De Convenciones Corferia, Bogotá, Colombia'
                            },
                            {
                                left: 'Exhibiciones',
                                right: 'Productos Para El Hogar, Accesorios Para El Hogar, Textiles Para El Hogar, Jardinería Y Exteriores, Consumo De Electrónicos, Artículos De Regalo, Festival Y Fiestas, Deportes Y Belleza, Otros'
                            },
                            {
                                left: 'Organizadores',
                                right: 'Corferias <br>' +
                                    'United Asia Exhibition Group<br>'
                            },
                            {
                                left: 'Co-Ubicado Con Colombiamoda',
                                right: ''
                            }
                        ]
                    },
                    products: {
                        products1: 'Productos De Exposición',
                        products2: 'Home Show Colombia Se Enfoca En Los Siguientes Segmentos',
                        tabel: [{
                                left: 'Productos Del Hogar',
                                right: 'Vajilla, Utensilios De Cocina, Herramientas De Limpieza, Almacenamiento, Baño y Equipamiento De Baño, Muebles y Accesorios, Aparatos Eléctricos Para La Cocina / Cocina y De Cocina Herramientas, Artículos Para Mascotas'
                            },
                            {
                                left: 'Accesorios Del Hogar',
                                right: 'Iluminación / Marcos De Fotos / Espejos / Relojes / Plantas Artificiales, Jarrones De Flores / Velas / Papel De Pared / Decoración Suave / Artes, Manualidades / Mejoras Para El Hogar / Hardware, Herramientas'
                            },
                            {
                                left: 'Textiles Para El Hogar',
                                right: 'Textiles Para Dormitorios, Sistemas De Sueño / Ropa De Mesa y Cocina / Textiles Para Baño / Toallas / Cortinas / Persianas, Sistemas De Tratamiento De Ventanas / Alfombras, Alfombras / Telas Para Muebles, Pieles / Cojines'
                            },
                            {
                                left: 'Jardinería Y Exteriores',
                                right: 'Aparato De Césped / Camping / Picnic / Barbacoa / Maquinaria De Jardinería / Aparato De Jardinería / Herramientas'
                            },
                            {
                                left: 'Regalo &  Materiales De Oficina',
                                right: 'Artes, Artesanías / Regalos De Temporada / Fragancias / Papelería / Libros, CD / Bolsos / Tarjetas / Artículos Promocionales / Artículos Personales / Novedad Para Turistas'
                            },
                            {
                                left: 'Festival & Fiestas',
                                right: 'Navidad / Decoraciones / Adornos Religiosos / Empaques / Fuegos Artificiales / Otros Festivales'
                            },
                            {
                                left: 'Consumo Electrónico',
                                right: 'Electrodomésticos / Dispositivos Electrónicos / Computadoras Portátiles / Móviles / Periferia / Audio, Video / Máquinas De Uso Profesional / Sistema De Monitoreo / Seguridad'
                            },
                            {
                                left: 'Deportes Y Belleza',
                                right: 'Aparatos De Gimnasia / Artículos Deportivos / Exterior / Masaje / Cuidado De La Salud / Suministros De Uñas / Peluquería'
                            },
                        ]
                    },
                    ground: {
                        ground1: 'Centro De Convenciones Corferia',
                        ground2: 'Corferias es un centro de convenciones ubicado en la ciudad de Bogotá Colombia, entre los barrios Quinta Paredes y El Recuerdo. Es un lugar de celebración de eventos locales, nacionales e internacionales.',
                        ground3: 'Lugar',
                        ground4: 'Gracias a su excelente ubicación y conexiones de transporte, se puede llegar a Corferia de forma rápida y sencilla por avión, tren o automóvil.\n',
                        ground5: 'Mapa de planta',
                    },
                    press: {
                        press1: 'Prensa Registro  &  Contacto',
                        press2: 'Cualquier miembro de la prensa que desee asistir a esta feria debe contactarnos. Nuestros contactos estarán encantados de ayudarle con cualquier consulta que pueda tener relacionada con sus informes. Alternativamente, puede registrarse en el sitio presentando su tarjeta de trabajo en el mostrador de inscripción durante la feria.',
                    }
                },
                ExhiInfo:['Housewares Products','Home Accessories','Home Textile','Gardening & Outdoor','Gifts&Office Supplies','Festivals & Parties','Consumer Electronics','Sports Beauty']
            },
            'homeshow-nigeria': {
                logo: '/static/image/logo4.png',
                background: '#00A65E',
                tel: '+86-25-84521101',
                mail: 'info@uaec-expo.com',
                web: 'http://www.uaec-expo.com',
                add: '江苏省南京市苏源大道68-28号联亚国际大厦',
                title: '即刻加入我们，出发尼日利亚国际家庭用品礼品展览会',
                time:['2019-11-04 09:30:00','2019-11-07 17:30:00'],
                // record: '©2019 UAEC 苏ICP备09034171号-7  苏公安备32011502010952号',
                headTitle: 'Home Show Nigeria--International Houseware and Gift Fair',
                headTitleZh: '尼日利亚国际家庭用品礼品展览会',
                htmlTitle: 'CONTACT US',
                oldUrl: 'http://192.168.254.10:809/Web/',
                code: 'hn',
                colorVariables: '00A65E',
                fL: '/static/image/809FL.png',
                zh: {
                    app: {
                        app1: '2019年11月4-7日',
                        app2: '尼日利亚 • 拉各斯'
                    },
                    home: {
                        home1: '欢迎来到尼日利亚国际家庭用品礼品展览会',
                        home2: '尼日利亚国际家庭用品礼品展览会，是全球企业开拓西非消费品市场不可或缺的平台。依托西非规模最大、影响力最强的国际展“拉各斯国际贸易展览会”，尼日利亚国际家庭用品礼品展览会不仅助力全球消费品生产企业加强在尼日利亚市场业务，更是业内品牌进入整个西非市场的理想之选。',
                        home3: '遇见多样尼日利亚',
                        home4: '非洲第一大经济体，石油资源强国、人口大国等众多优势，为进军尼日利亚市场助添信心！',
                        home5: '这里是丰富多彩的尼日利亚国际家庭用品礼品展览会',
                        home6: '商机不容错过',
                        home7: '尼日利亚国际家庭用品礼品展览会，专注于家用消费品的供应与需求，把达成贸易成交、推动市场的发展作为目标，让与会者从各自的细分领域找到适合自己需求的解决方案。',
                        home8: "B2B网络预配",
                        home9: '为确保参展效果，提升贸易配对成功率，NigeriaTex 将为您提供展前的网络预配服务，持续跟踪潜力买家，获得更大更多商机！'
                    },
                    exhibition: {
                        exhibition1: '尼日利亚国际家庭用品礼品展览会',
                        tabel: [{
                                left: '展期',
                                right: '2019年11月4-7日'
                            },
                            {
                                left: '展馆',
                                right: '拉各斯TBS展览中心'
                            },
                            {
                                left: '地址',
                                right: '尼日利亚 拉各斯'
                            },
                            {
                                left: '展品范围',
                                right: '餐厨家用、家庭装饰、家纺产品、礼品办公、节日派对、消费电子、花园园艺、美容运动'
                            },
                            {
                                left: '主办单位',
                                right: 'Uninet (Nigeria) Exhibition Co. Limited <br>' +
                                    '联亚国际展览集团（UAEC）'
                            },
                            {
                                left: '同期同馆',
                                right: '拉各斯国际贸易展览会'
                            },
                        ],
                        exhibition2: '拉各斯国际贸易展览会(LITF)始于1981年，由拉各斯工商会主办，得到尼联邦政府、拉州政府的大力支持，是目前西非规模最大、影响力最强的国际展。该展展商来自非洲、欧美、亚洲等20多个国家，展出面积5万平，观众主要来自西共体国家。',
                        exhibition3: '尼日利亚国际家庭用品礼品展览会(Home Show Nigeria)与LITF同期同馆举办，打造西非地区唯一的国际性、大规模的家庭用品礼品专业展。Home Show Nigeria共享LITF展买家、宣传等一切资源，另通过增值的定向宣传、点对点买家邀请、展商预登记网络配对、现场B2B贸易配对等形式，为展商提供更多商机、保障参展效果。',
                        exhibition4: '2018 Home Show Nigeria展出面积1000㎡，到会观众超过1万人，现场举办贸易配对236场次，多数展商现场获得订单。2019 Home Show将进一步邀请尼本土、周边国家及苏丹、利比亚、阿尔及利亚、乍得、埃及、贝宁等国买家到会采购，提升展会国际化程度。',
                        exhibition5: '尼日利亚国际家庭用品礼品展览会(Home Show Nigeria)是业内进入尼日利亚市场不可或缺的平台！',
                    },
                    exhibits: {
                        exhibits1: '展品介绍',
                        exhibits2: '尼日利亚国际家庭用品礼品展览会，聚焦优质家用消费品，主要展品如下：',
                        tabel: [{
                                left: '餐厨家用',
                                right: '厨房用品、餐桌用品、卫生清洁、收纳用具、浴室用品、家具与配件、 母婴用品、日用消费品等'
                            },
                            {
                                left: '家庭装饰',
                                right: '灯具照明、人造花果、油画相框、装饰蜡烛、墙纸、软装饰品、工艺礼品、镜子挂钟、时尚创意、家居改进、五金工具等'
                            },
                            {
                                left: '家纺产品',
                                right: '床品床垫、蚊帐、厨卫纺织、沙发布、窗帘布、装饰布、靠垫地垫等'
                            },
                            {
                                left: '礼品办公',
                                right: '礼品工艺品、办公用品、箱包、旅游用品、薰香制品、贺卡、玩具、促销用品、珠宝首饰、个人用品等'
                            },
                            {
                                left: '节日派对',
                                right: '圣诞用品、节日派对饰品礼品、宗教饰品、饰品包装、焰火等'
                            },
                            {
                                left: '消费电子',
                                right: '家用电器、电子设备、电脑周边、视频音频、手机周边、移动终端等'
                            },
                            {
                                left: '花园园艺',
                                right: '草坪用品、露营用品、野炊烧烤、园林机械、花园用品、园艺工具等'
                            },
                            {
                                left: '美容运动',
                                right: '美容美发美甲、洗漱清洁、运动器械、运动用品、户外用品等'
                            }
                        ],
                        exhibits3: ''
                    },
                    hall: {
                        hall1: '拉各斯TBS展览中心',
                        hall2: '拉各斯为尼日利亚第一大城市及物流中心。尼日利亚国际汽车零配件展览会，于拉各斯TBS展览中心举办，诚挚欢迎全球展商及观众的到来！',
                        hall3: '展览中心',
                        hall4: '拉各斯TBS展览中心，位于尼日利亚的拉各斯市中心，建筑面积达到10万平方米。便利的交通、优越的区位，便于全球展商的光临。',
                        hall5: '展馆展位',
                        hall6: '本届尼日利亚国际纺织服装博览会，展位分布图如下：'
                    },
                    market: {
                        market1: ' <h2> <strong>遇见多样尼日利亚</strong></h2>\n' +
                            '        <p>尼日利亚是非洲第一大、世界第二十六大经济体。其经济总量占据西非国家经济共同体总GDP的3/4以上，是全球经济成长最快的国家之一。尼日利亚总人口1.98亿，占非洲总人口的16%，年人口增长率为2.3%，是非洲人口第一大国。</p>\n' +
                            '        <p>尼日利亚为非洲第一大石油生产和出口国，全球五大液化天然气出口国之一。尼对外贸易迅速发展，除少数自己可以生产的商品禁止进口外，对大部分商品采取自由进口和低关税政策。</p>\n' +
                            '        <p>尼日利亚制造业基础薄、刚开始工业化进程，95%的纺织品服装依赖进口，属于典型的消费市场。尼日利亚政局相对稳定，商业氛围宽松，对华人友好，具有低、中、高不同档次的消费群。日益增长的人口和经济实力保证了尼购买力、消费能力。</p>\n' +
                            '        <p>尼日利亚本土纺织业生产成本较高，纺织品生产和其他制造业的生产设备不足，加上国内电力供应不足，纺织生产设备运作效率低，其纺织业落后。尼日利亚纺织品业缺乏竞争力，处于低水平徘徊，高端纺织品制造市场完全空白。</p>\n' +
                            '        <p>2018年尼日利亚宣布：尼日利亚联邦政府将筹建纺织和服装业特别经济区，通过政府与私人投资共建的形式，带动相关产业聚集发展，政府的鼓励政策刺激了纺织行业市场的革新。</p>\n' +
                            '   <p>尼日利亚国际纺织服装博览会，将是探索西非纺织市场的绝佳契机！</p>',
                        market2: '尼日利亚地理位置',
                        market3: '尼日利亚是西非共同体的领头羊，对西非其他国家乃至全非洲都具有很强的辐射力，辐射国家或地区包括苏丹、利比亚、阿尔及利亚、乍得、埃及等。',
                        market4: '展会举办城市拉各斯',
                        market5: '拉各斯为西非第一大城市、经济及物流中心。汽摩配、电器、百货、建材、轮胎、机械机电等西非十大商品物流中心都集中在此。优越的位置、天然的港口、密集的交通、高耸的大楼和飞架的桥梁可以让撒哈拉以南的多数城市失色。',
                        market6: '中尼经贸往来关系',
                        market7: '尼日利亚每年从中国等进口纺织品和原料约40亿美元。尼日利亚为中国在非洲第三大贸易伙伴地位，纺织品和衣服是中国对尼日利亚的主要出口项目，占中国对尼日利亚总出口的15％。',

                    },
                    match: {
                        match1: '为确保参展效果，提升贸易配对成功率，Home Show Nigeria 为您提供展前的网络预配服务，持续跟踪潜力买家，获得更大更多商机！'
                    },
                    registration: {
                        registration1: 'homeshownegeria@uaec-expo.com'
                    },
                    offline: {
                        offline1: '尼日利亚国际家庭用品礼品展览会',
                        offline2: 'homeshownegeria@uaec-expo.com'
                    }
                },
                en: {
                    app: {
                        app1: '4-7 Nov 2019',
                        app2: 'Lagos, Nigeria'
                    },
                    home: {
                        home1: 'WELCOME TO HOME SHOW NIGERIA',
                        home2: 'With the development of economy and urbanization, Nigeria has opened its gate for  variety of consumer goods worldwide. Aiming to be an international, professional trade platform, Home Show Nigeria tries its best to promote multilateral consumer goods trade and communications since its establishment in 2017. ',
                        home3: 'MAKE SURE YOU\'RE HERE',
                        home4: 'At Home Show Nigeria, which is co-located with LITF (Lagos International Trade Fair), you can meet multiple consumer goods and make potential trading connections with global companies. Join us at Tafawa Balewa Square and enjoy potential trade and connections with global brands! You can get more than what you expected!',
                        home5: 'FIND WHAT YOU DREAM HERE',
                        home6: 'HOME SHOW NIGERIA IS WORTH YOUR VISITING',
                        home7: 'A foremost international B2B event with global supplying chain and professional market orientation, Home Show Nigeria is worth your visiting.',
                        home8: "MATCHUP EXPO",
                        home9: 'As a value-added service and to increase your business results, Online and Onsite Matchmaking is served after you finish the Exhibitor/Visitor Application, benefiting your potential business quite a lot.'
                    },
                    Information: {
                        Information1: 'Home Show Nigeria',
                        tabel: [{
                                left: 'Date',
                                right: '4-7 Nov 2019'
                            },
                            {
                                left: 'Venue',
                                right: 'Tafawa Balewa Square, Lagos, Nigeria'
                            },
                            {
                                left: 'Exhibits',
                                right: 'Housewares Products, Home Decoration, Home Textile, Gardening  &  Outdoor, Consumer Electronics, Gift items, Festival  &  Parties, Sports  &  Beauty, Others'
                            },
                            {
                                left: 'Organizers',
                                right: 'United Asia International Exhibition Group<br>' +
                                    'Uninet (Nigeria) Exhibition Co., Ltd<br>'
                            },
                            {
                                left: 'Co-located With Lagos International Trade Fair (LITF)',
                                right: ''
                            }
                        ]
                    },
                    products: {
                        products1: 'Exhibition Products',
                        products2: 'Home Show Nigeria focuses on the following SEGMENTS:',
                        tabel: [{
                                left: 'Housewares Products',
                                right: 'Tableware, Kitchenware, Cleaning tools, Storage, Bath  &  bathroom equipment, Furniture & Accessories, Electric appliances for kitchen/ Kitchen  &  cooking tools, Mother and baby supplies'
                            },
                            {
                                left: 'Home Decoration',
                                right: 'Lighting/ Photo frames/ Mirrors/ Clocks/ Artificial Plants, Flower Vases/ Candles/ Wall Paper/ Soft Decoration/ Arts, Crafts/ Home Improvement/ Hardware, Tools'
                            },
                            {
                                left: 'Home Textile',
                                right: 'Bedroom Textiles, Sleep Systems/ Table  &  Kitchen Linens/ Bathroom Textiles/ Towels/ Curtains/ Sun Blinds, Window Treatment Systems/ Carpets, Rugs/ Furniture Fabrics, Leathers/ Cushions'
                            },
                            {
                                left: 'Gardening  &  Outdoor',
                                right: 'Lawn Appliance/ Camping/ Picnic/ Barbecue/ Garden Machinery/ Garden Appliance/ Tools'
                            },
                            {
                                left: 'Gifts  &  Office Supplies',
                                right: 'Arts, Crafts/ Seasonal Gifts/ Fragrances/ Stationary/ Books, CDs/ Bags/ Cards/ Promotional Item/ Personal Items/ Tourists Novelty'
                            },
                            {
                                left: 'Festivals  &  Parties',
                                right: 'Christmas/ Decorations/ Religious Ornaments/ Packaging/ Firework/ Other Festivals'
                            },
                            {
                                left: 'Consumer Electronics',
                                right: 'Home Appliance/ Electronic Devices/ Laptop/ Mobiles/ Periphery/ Audio, Video/ Mobile terminal/ Professional Use Machines / Monitoring System/ Security'
                            },
                            {
                                left: 'Sports  &  Beauty',
                                right: 'Exercise Equipment/ Sports Goods/ Outdoor/ Massage/ Health Care/ Nail Supplies/ Hairdressing/ Personal Hygiene'
                            },
                        ]
                    },
                    ground: {
                        ground1: '',
                        ground2: '',
                        ground3: 'Tafawa Balewa Square',
                        ground4: 'Tafawa Balewa Square (TBS) is a 35.8-acre ceremonial ground in Lagos .It has been used as a convention center for many fairs inbound and outbound, which is easily accessible by air, sea and land.',
                        ground5: 'Floor Plan',
                    },
                    press: {
                        press1: 'Press Registration  &  Contact',
                        press2: 'Welcome any member of the press to attend Home Show Nigeria. We will be happy to help you with any queries when you register online. Alternatively, you might register on site by presenting your business card at the Registration Counter during Home Show Nigeria.',
                        press3: 'homeshownigeria@uaec-expo.com'
                    },
                    offline: {
                        offline1: 'We are looking forward to your visiting at Home Show Nigeria.<br>' +
                            'United Asia International Group',
                        offline2: 'homeshownigeria@uaec-expo.com'
                    },
                    online: {
                        online1: 'As a value-added service and to increase your business results, Online Matchmaking is served after you finish the Exhibitor/Visitor Application, benefiting your potential business quite a lot.'
                    },
                    b2b: {
                        b2b1: 'Onsite B2B Matchmaking are serviced exclusively for Home Show Nigeria exhibitors to meet their potential partners for business negotiations most effectively.  '
                    }
                },
                share: {
                    home: {
                        img: [
                            '809home1.png',
                            '809home2.png',
                            '809home3.png',
                            '809home4.png',
                            '809home5.png',
                            '809home6.png',
                            '809home7.png',
                            '809home8.png',
                            '809home9.png',
                            '809home10.png',
                            '809home11.png',
                            '809home12.png',
                            '809home13.png',
                            '809home14.png',
                            '809home15.png'
                        ]
                    },
                    homeBg: 'homeBg2.png',
                    match: {
                        img: [
                            'match1.png',
                            'match2.png',
                            'match3.png',
                        ]
                    },
                    market: {
                        img: [
                            '809market1.png',
                            '809market2.png',
                            '809market3.png'
                        ]
                    },
                    hall: {
                        img: [
                            '809hall1.png',
                            '809hall2.png'
                        ]
                    }
                },
                ExhiInfo:['Housewares Products','Home Accessories','Home Textile','Gardening & Outdoor','Gifts&Office Supplies','Festivals & Parties','Consumer Electronics','Sports Beauty']
            },
            'nigeriatex': {
                logo: '/static/image/logo3.png',
                background: '#147C4D',
                tel: '+86-25-84521101',
                mail: 'info@uaec-expo.com',
                web: 'http://www.uaec-expo.com',
                add: '江苏省南京市苏源大道68-28号联亚国际大厦',
                title: '即刻加入我们，出发尼日利亚国际纺织服装博览会',
                time:['2019-11-04 09:30:00','2019-11-07 17:30:00'],
                headTitle: 'Nigeria International Textile Industry Fair',
                headTitleZh: '尼日利亚国际纺织服装博览会',
                htmlTitle: 'CONTACT US',
                oldUrl: 'http://192.168.254.10:808/Web/',
                code: 'nt',
                // record: '©2019 UAEC 苏ICP备09034171号-6 苏公安备32011502010950号',
                colorVariables: '147C4D',
                fL: [{
                        url: 'baidu',
                        img: '/static/image/808FL.png'
                    },
                    {

                    }
                ],
                fI: ['Nigeriaf1.png', 'Nigeriaf2.png', 'Nigeriaf3.png'],
                zh: {
                    app: {
                        app1: '2019年11月4-7日',
                        app2: '尼日利亚 • 拉各斯'
                    },
                    home: {
                        home1: '欢迎来到尼日利亚国际纺织服装博览会',
                        home2: '尼日利亚国际纺织服装博览会，是中国纺织企业开拓西非市场不可或缺的平台。依托西非规模最大、影响力最强的国际展“拉各斯国际贸易展览会(Lagos International Trade Fair，LITF)”，尼日利亚国际纺织服装博览会不仅助力中国纺织品牌加强在尼日利亚市场业务，更是中国品牌进入整个西非市场的理想之选。',
                        home3: '遇见多样尼日利亚',
                        home4: '除了石油与可可，尼日利亚国际纺织服装博览会，带您深入走进“非洲雄鹰”尼日利亚......',
                        home5: '这里是充满西非风情的尼日利亚国际纺织服装博览会',
                        home6: '精彩不容错过',
                        home7: '尼日利亚国际纺织服装博览会，专注于纺织服装相关产品和服务的供应与需求，把达成贸易成交、推动市场的发展作为目标，让与会者从各自的细分领域找到适合自己需求的解决方案。',
                        home8: "B2B网络预配",
                        home9: '为确保参展效果，提升贸易配对成功率，NigeriaTex 将为您提供展前的网络预配服务，持续跟踪潜力买家，获得更大更多商机！'
                    },
                    exhibition: {
                        exhibition1: '尼日利亚国际纺织服装博览会',
                        tabel: [{
                                left: '展期',
                                right: '2019年11月4-7日'
                            },
                            {
                                left: '展馆',
                                right: '拉各斯TBS展览中心'
                            },
                            {
                                left: '地址',
                                right: '尼日利亚 拉各斯'
                            },
                            {
                                left: '展品范围',
                                right: '服装服饰、服装面料、家纺产品、鞋类箱包、辅料配件、纤维纱线、染化产品、纺机服机'
                            },
                            {
                                left: '主办单位',
                                right: '中国纺织贸促会 <br>' +
                                    '联亚国际展览集团（UAEC）<br>' +
                                    'Uninet (Nigeria) Exhibition Co. Limited'
                            },
                            {
                                left: '同期同馆',
                                right: '拉各斯国际贸易展览会'
                            },
                        ],
                        exhibition2: '拉各斯国际贸易展览会(Lagos International Trade Fair，LITF)始于1981年，由拉各斯工商会主办，得到尼联邦政府、拉州政府的大力支持，是目前西非规模最大、影响力最强的国际展。该展展商来自非洲、欧美、亚洲等20多个国家，展出面积5万平，观众主要来自西共体国家。',
                        exhibition3: '尼日利亚国际纺织服装博览会(NigeriaTex)与LITF同期同馆举办，打造西非地区唯一的国际性、大规模的纺博会。NigeriaTex共享LITF展买家、宣传等一切资源，另通过增值的定向宣传、点对点买家邀请、展商预登记网络配对、现场B2B贸易配对等形式，为展商提供更多商机、保障参展效果。',
                        exhibition4: '2018 NigeriaTex展出面积1000㎡，到会观众超过1万人，现场举办贸易配对217场次，多数展商现场获得订单。2019 NigeriaTex将进一步邀请尼本土、周边国家及苏丹、利比亚、阿尔及利亚、乍得、埃及、贝宁等国买家到会采购，提升展会国际化程度。',
                        exhibition5: '尼日利亚国际纺织服装博览会(NigeriaTex)是业内进入尼日利亚市场不可或缺的平台！',
                    },
                    exhibits: {
                        exhibits1: '展品介绍',
                        exhibits2: '尼日利亚国际纺织服装博览会，聚焦纺织服装优品，主要展品如下：',
                        tabel: [{
                                left: '服装服饰',
                                right: '男/女/童装、休闲/运动装、衬衫、内衣、领带、首饰、皮带、假发等'
                            },
                            {
                                left: '服装面料',
                                right: '服装面料、纺织面料、功能性面料、合纤面料、皮革、PU/PVC等'
                            },
                            {
                                left: '鞋类箱包',
                                right: '凉鞋、拖鞋、皮革制品、箱包、手袋、背包等'
                            },
                            {
                                left: '家纺产品',
                                right: '床品床垫、蚊帐、厨卫用品、沙发布、窗帘布、装饰布、靠垫地垫等'
                            },
                            {
                                left: '辅料配件',
                                right: '垫肩、里衬、花边、刺绣、缎带、丝带、纽扣、拉链、衣架等'
                            },
                            {
                                left: '纤维纱线',
                                right: '纤维、抽纱、纱线、特殊纺丝、织造及整理、花式纱等'
                            },
                            {
                                left: '染化产品',
                                right: '纺织用化学品、染料、助剂等'
                            },
                            {
                                left: '纺机服机',
                                right: '纺织机械、工业/家用缝纫机、附件及零配件等'
                            }
                        ],
                        exhibits3: ''
                    },
                    hall: {
                        hall1: '拉各斯TBS展览中心',
                        hall2: '拉各斯为尼日利亚第一大城市及物流中心。尼日利亚国际纺织服装博览会，于拉各斯TBS展览中心举办，诚挚欢迎全球展商及观众的到来！',
                        hall3: '展览中心',
                        hall4: '拉各斯TBS展览中心，位于尼日利亚的拉各斯市中心，建筑面积达到10万平方米。便利的交通、优越的区位，便于全球展商的光临。',
                        hall5: '展馆展位',
                        hall6: '本届尼日利亚国际纺织服装博览会，展位分布图如下：'
                    },
                    market: {
                        market1: ' <h2> <strong>遇见多样尼日利亚</strong></h2>\n' +
                            '        <p>尼日利亚是非洲第一大、世界第二十六大经济体。其经济总量占据西非国家经济共同体总GDP的3/4以上，是全球经济成长最快的国家之一。尼日利亚总人口1.98亿，占非洲总人口的16%，年人口增长率为2.3%，是非洲人口第一大国。</p>\n' +
                            '        <p>尼日利亚为非洲第一大石油生产和出口国，全球五大液化天然气出口国之一。尼对外贸易迅速发展，除少数自己可以生产的商品禁止进口外，对大部分商品采取自由进口和低关税政策。</p>\n' +
                            '        <p>尼日利亚制造业基础薄、刚开始工业化进程，95%的纺织品服装依赖进口，属于典型的消费市场。尼日利亚政局相对稳定，商业氛围宽松，对华人友好，具有低、中、高不同档次的消费群。日益增长的人口和经济实力保证了尼购买力、消费能力。</p>\n' +
                            '        <p>尼日利亚本土纺织业生产成本较高，纺织品生产和其他制造业的生产设备不足，加上国内电力供应不足，纺织生产设备运作效率低，其纺织业落后。尼日利亚纺织品业缺乏竞争力，处于低水平徘徊，高端纺织品制造市场完全空白。</p>\n' +
                            '        <p>2018年尼日利亚宣布：尼日利亚联邦政府将筹建纺织和服装业特别经济区，通过政府与私人投资共建的形式，带动相关产业聚集发展，政府的鼓励政策刺激了纺织行业市场的革新。</p>\n' +
                            '   <p>尼日利亚国际纺织服装博览会，将是探索西非纺织市场的绝佳契机！</p>',
                        market2: '尼日利亚地理位置',
                        market3: '尼日利亚是西非共同体的领头羊，对西非其他国家乃至全非洲都具有很强的辐射力，辐射国家或地区包括苏丹、利比亚、阿尔及利亚、乍得、埃及等。',
                        market4: '展会举办城市拉各斯',
                        market5: '拉各斯为西非第一大城市、经济及物流中心。汽摩配、电器、百货、建材、轮胎、机械机电等西非十大商品物流中心都集中在此。优越的位置、天然的港口、密集的交通、高耸的大楼和飞架的桥梁可以让撒哈拉以南的多数城市失色。',
                        market6: '中尼经贸往来关系',
                        market7: '尼日利亚每年从中国等进口纺织品和原料约40亿美元。尼日利亚为中国在非洲第三大贸易伙伴地位，纺织品和衣服是中国对尼日利亚的主要出口项目，占中国对尼日利亚总出口的15％。',

                    },
                    match: {
                        match1: '为确保参展效果，提升贸易配对成功率，NigeriaTex 为您提供展前的网络预配服务，持续跟踪潜力买家，获得更大更多商机！'
                    },
                    registration: {
                        registration1: 'nigeriatex@uaec-expo.com'
                    },
                    offline: {
                        offline1: '尼日利亚国际纺织服装博览会',
                        offline2: 'nigeriatex@uaec-expo.com'
                    }
                },
                en: {
                    app: {
                        app1: '4-7 Nov 2019',
                        app2: 'Lagos, Nigeria'
                    },
                    home: {
                        home1: 'WELCOME TO NIGERIATEX',
                        home2: 'With a population of nearly 200 million, Nigeria is a market of great potential for textile industry products. Orientated to be an international, professional, trade and technical communication platform, NigeriaTex seeks to integrate diverse resources and thus to promote multi-lateral textile trade since its establishment in 2017. ',
                        home3: 'MAKE SURE YOU\'RE HERE',
                        home4: 'At NigeriaTex, which is co-located with LITF(Lagos International Trade Fair), you can meet multiple textile industry products and make potential trade connections with global companies. Join us at Tafawa Balewa Square and you can get more than what you expected!',
                        home5: 'FIND WHAT YOU DREAM HERE',
                        home6: 'NIGERIATEX IS WORTH YOUR VISITING',
                        home7: 'A foremost international B2B event with global supply chain and professional market orientation NigeriaTex, is worth your visiting. ',
                        home8: "MATCHUP EXPO",
                        home9: 'As a value-added service and to increase your business results, Online and Onsite Matchmaking is served after you finish the Exhibitor/Visitor Application, benefiting your potential business quite a lot.'
                    },
                    Information: {
                        Information1: 'Nigeria International Textile Industry Fair',
                        tabel: [{
                                left: 'Date',
                                right: '4-7 Nov 2019'
                            },
                            {
                                left: 'Venue',
                                right: 'Tafawa Balewa Square, Lagos, Nigeria'
                            },
                            {
                                left: 'Exhibits',
                                right: 'Apparels & Accessories, Fabrics, Yarns, Trims & Accessories, Footwear & Bags, Home Textiles, Textile Chemicals, Textile Machinery, Sewing Machinery'
                            },
                            {
                                left: 'Organizers',
                                right: 'CCPIT TEX <br>' +
                                    'United Asia International Exhibition Group<br>' +
                                    'Uninet (Nigeria) Exhibition Co., Ltd'
                            },
                            {
                                left: 'Co-located With Lagos International Trade Fair (LITF)',
                                right: ''
                            }
                        ]
                    },
                    products: {
                        products1: 'Exhibition Products',
                        products2: 'NigeriaTex focuses on the following segments:',
                        tabel: [{
                                left: 'Apparels & Accessories',
                                right: 'Men’s/ Women’s/ Children’s wear, Casual & Sports Wear, Shirts & Boluses, Underwear, Ties, Belts, Jewels, Wigs'
                            },
                            {
                                left: 'Apparel Fabrics',
                                right: 'Apparel Fabric, Functional Fabrics, Synthetic Fabrics, Leathers, PU/PVC'
                            },
                            {
                                left: 'Fibre & Yarns',
                                right: 'Fibre, Yarns, Draw Yarn, Special Spinning, Weaving and Finishing, Fancy Thread'
                            },
                            {
                                left: 'Trims & Accessories',
                                right: 'Shoulder Pad, Liner, Decorative Border, Embroidery, Ribbon , Silk Ribbon, Button,  Zipper, Hanger'
                            },
                            {
                                left: 'Home Textiles',
                                right: 'Beddings & Mattress, Mosquito Net, Kitchen Textiles, Bathroom Textiles, Decorative Fabric , Curtain, Blinds, Cushions'
                            },
                            {
                                left: 'Footwear & Bags',
                                right: 'Sandals , Slippers, Leather Ware, Cases & Bags, Handbags,   Backpacks'
                            },
                            {
                                left: 'Dye+Chem',
                                right: 'Textile Chemicals, Dyestuff and Pigment, Dyeing and Finishing Auxiliary'
                            },
                            {
                                left: 'Apparel & Textile Machinery',
                                right: 'Textile Machine, Sewing Machine, Machine Accessories & Spare Parts'
                            },
                        ]
                    },
                    ground: {
                        ground1: '',
                        ground2: '',
                        ground3: 'Tafawa Balewa\n' +
                            'Square',
                        ground4: 'Tafawa Balewa Square (TBS) is a 35.8-acre ceremonial ground in Lagos .It has been used as a convention center for many fairs inbound and outbound, which is easily accessible by air, sea and land.',
                        ground5: 'Floor Plan',
                    },
                    press: {
                        press1: 'Press Registration  &  Contact',
                        press2: 'Welcome any member of the press to attend NigeriaTex. We will be happy to help you with any queries when you register online. Alternatively, you might register on site by presenting your business card at the Registration Counter during NigeriaTex.',
                        press3: 'nigeriatex@uaec-expo.com'
                    },
                    offline: {
                        offline1: 'We are looking forward to your visiting at NigeriaTex.<br>United Asia International Group',
                        offline2: 'nigeriatex@uaec-expo.com'
                    },
                    online: {
                        online1: 'As a value-added service and to increase your business results, Online Matchmaking is served after you finish the Exhibitor/Visitor Application, benefiting your potential business quite a lot.'
                    },
                    b2b: {
                        b2b1: 'Onsite B2B Matchmaking are serviced exclusively for NigeriaTex exhibitors to meet their potential partners for business negotiations most effectively. '
                    }
                },
                share: {
                    home: {
                        img: [
                            '808home1.png',
                            '808home2.png',
                            '808home3.png',
                            '808home4.png',
                            '808home5.png',
                            '808home6.png',
                            '808home7.png',
                            '808home8.png',
                            '808home9.png',
                            '808home10.png',
                            '808home11.png',
                            '808home12.png',
                            '808home13.png',
                            '808home14.png',
                            '808home15.png'
                        ]
                    },
                    homeBg: 'homeBg2.png',
                    match: {
                        img: [
                            'match1.png',
                            'match2.png',
                            'match3.png',
                        ]
                    },
                    market: {
                        img: [
                            '808market1.png',
                            '808market2.png',
                            '808market3.png'
                        ]
                    },
                    hall: {
                        img: [
                            '808hall1.png',
                            '808hall2.png'
                        ]
                    }
                },
                ExhiInfo:['Apparels & Accessories','Textile Chemicals','Footwear & Bags','Yarns','Trims & Accessories','Fabrics','Home Textile']
            },
        },
        skin: {},
        token: null,
        userInfo: {},
        element: {
            choose: '请选择',
            chooseen: 'please choose'
        },
        page:{
            userCenter:{
                collapseIndex:''
            },
            searchList:{
                cache:false,
                data: [],
                loading: false,
                finished: false,
                pageCount: 1,
                page: 1,
                size: 10,
            }
        }
    },
    mutations: {
        setSkin: (state, data) => {
            // 未匹配默认展会
            state.skin = state.host[data.hostName] || state.host[data.default]
            // theme(state.skin.colorVariables, '#000000')
        },
        setIsExhibitor: (state, data) => {
            state.userInfo.isExhibitor = data
        },
        setToken: (state, token) => {
            state.token = token
        },
        outToken: (state) => {
            state.token = null
        },
        setUserInfo: (state, userInfo) => {
            state.userInfo = userInfo
        },
        // matchup搜索列表
        searchListInit: (state) => {
            state.page.searchList.data = []
            state.page.searchList.page = 1
            state.page.searchList.finished = false
        },
        searchListCache: (state,data) => {
            state.page.searchList.cache = data
        },
        searchListLoad: (state) => {
            state.page.searchList.loading = true
        },
        searchListSuccess: (state, result) => {
            state.page.searchList.data = state.page.searchList.data.concat(result.data)
            state.page.searchList.pageCount = result.count
            state.page.searchList.loading = false
        },
        searchListPageCount: (state) => {
            state.page.searchList.page++
        },
        searchListFinished: (state) => {
            state.page.searchList.finished = true
        },
        setActiveCollapse: (state,data) => {
            state.page.userCenter.collapseIndex = data
        },
    },
    actions: {
        set_skin: ({
            commit
        }) => {
            let hostName = ''
            let host = location.hostname.split('.')
            hostName = host.length == 2 ? host[0] : host[1]

            if (process.env.NODE_ENV == "development") { //切换国家code
                // hostName = 'homeshow-colombia'
                // hostName = 'homeshow-nigeria'
                hostName = 'nigeriatex'
                // hostName = 'autoequip-nigeria'

                // 无用
                // hostName = 'cotex-colombia'
                // hostName = 'ctis-colombia'
            }
            commit('setSkin', {hostName, default:'homeshow-colombia'})
        },
        set_isExhibitor:({
            commit
        }, result) => {
            commit('setIsExhibitor', result)
        },
        set_token: ({
            commit
        }, result) => {
            return new Promise((resolve, reject) => {
                commit('setToken', result.Ticket)
                Util.setsessionStorage('token',result.Ticket)

                // store 用户信息
                commit('setUserInfo', {
                    ...result.User,
                    isExhibitor: result.isExhibitor
                })
                // 保存用户信息
                Util.setsessionStorage('userInfo', {
                    ...result.User,
                    isExhibitor: result.isExhibitor
                })

                resolve()
            })
        },
        out_login: ({
            commit
        }) => {
            return new Promise((resolve, reject) => {
                commit('outToken')
                Util.removesessionStorage('token')

                // 删除储存的用户信息
                Util.setsessionStorage('userInfo', {})

                resolve()
            })
        },
        // searchList_init: ({
        //     commit
        // }) => {
        //     commit('outToken')
        // }
    },
    getters: {}
}

export default app
