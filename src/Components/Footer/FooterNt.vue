<template>
<div class="foot nt">
    <h3>{{$i18n.locale=='zh'?$store.getters.skin.title:$store.getters.skin.htmlTitle}}</h3>
    <div class="footer-view">
        <div class="footer-view-text footer-view-item">
            <p>{{transText('footer.companyName')}}</p>
            <p>
                <span>{{transText('footer.tel')}}：</span>
                <span>{{$store.getters.skin.tel}} </span>
            </p>
            <p>
                <span>{{transText('footer.Fax')}}：</span>
                <span>+86-25-84692610</span></p>
            <p>
                <span>{{transText('footer.Mail')}}：</span>
                <span>{{$store.getters.skin.mail}}</span>
            </p>
            <p>
                <span>{{transText('footer.Web')}}：</span>
                <span>{{$store.getters.skin.web}}</span></p>
            <p>
                <span>{{transText('footer.Add')}}：</span>
                <span>{{transText('footer.Address')}}</span>
            </p>
        </div>
        <div class="footer-view-item">
            <div class="footer-view-text" v-if="$i18n.locale!='zh'">
                <p>CCPIT TEX</p>
                <p><span>{{transText('footer.tel')}}：</span><span>+86-10-85229450</span></p>
                <p><span>{{transText('footer.Fax')}}：</span><span>+86-10-65121732</span></p>
                <p><span>{{transText('footer.Mail')}}：</span><span>wzz@ccpittex.com</span></p>
                <p><span>{{transText('footer.Add')}}：</span><span>Room 1002, 18 Chaoyangmenbei Avenue, Chaoyang District, 100020 Beijing, P.R.China</span></p>
            </div>
            <div class="footer-view-text" v-else>
                <p>中国国际贸易促进委员会纺织行业分会</p>
                <p><span>{{transText('footer.tel')}}：</span><span>+86-10-85229450</span></p>
                <p><span>{{transText('footer.Fax')}}：</span><span>+86-10-65121732</span></p>
                <p><span>{{transText('footer.Mail')}}：</span><span>wzz@ccpittex.com</span></p>
                <p><span>{{transText('footer.Add')}}：</span><span>北京市朝阳区朝阳门北大街18号10层</span></p>
            </div>
        </div>
        <div class="footer-view-item fr">
            <div class="footer-view-item-img">
                <img src="/static/image/wechatCode-1.png" alt="">
                <p>ABOUT</p>
            </div>
            <div class="footer-view-item-img">
                <img src="/static/image/followCode-1.png" alt="">
                <p>WECHAT ID</p>
            </div>
        </div>
    </div>

    <ul class="footInfo">
        <li>
            <h5>{{transText('footer.organizer')}}</h5>
            <div>
                <a href="http://www.ccpittex.com/" target="_blank"><img src="/static/image/Nigeriaf1.png" alt=""></a>
                <a href="http://www.uaec-expo.com" target="_blank"> <img src="/static/image/Nigeriaf2.png" alt=""></a>
                <img src="/static/image/Nigeriaf3.png" alt="">
            </div>
        </li>
        <li>
            <h5>{{transText('footer.cooperative')}}</h5>
            <div>
                <a href="https://www.finelib.com/events/" target="_blank"><img src="https://www.finelib.com/images/logo.png" alt=""></a>
            </div>
        </li>
    </ul>
    <div>
        <p>
            ©2019 UAEC 苏ICP备09034171号-6
        </p>
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011502010950">
            <img src="http://www.beian.gov.cn/file/ghs.png" style="margin:0;">
            苏公安备32011502010950号
        </a>
    </div>
</div>
</template>
<script>
export default {
    props:['lang'],
    data() {
        return {
            local:this.lang || 'en'
        }
    },
    methods: {
        transText(text){
            if(this.lang){
                return this.$t(text,this.local)
            }else{
                return this.$t(text)
            }
        },
        nextOpen(url) {
            window.open(url, 'blank_')
        }
    }
}
</script>
<stylescoped lang='scss'>
.foot {
    margin: 0 auto;
    width: 1200px;
    .footer-view{
        .footer-view-text {
            p {
                display: flex;

            }
            span {
                width: 60px;
                display: block;
                text-align: right;
            }
            span:last-child {
                width: calc(100% - 60px);
                text-align: left;
            }
        }
    }
    .footInfo{
        overflow: auto;
        li{
            margin-bottom: 20px;
            width: 50%;
            float: left;
            h5{
                margin: 0 20px 20px 20px;
                text-align: left;

                font-size: 16px;
            }
            div{
                display: flex;
                align-items: center;
                justify-content: space-around;
                height: 120px;
            }
        }
    }
}
</style>
