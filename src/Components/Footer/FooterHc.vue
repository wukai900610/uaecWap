<template>
<div class="foot">
    <h3>{{$i18n.locale=='zh'?$store.getters.skin.title:$store.getters.skin.htmlTitle}}</h3>
    <div class="footer-view">
        <div class="footer-view-text footer-view-item">
            <p>{{transText('footer.companyName',local)}}</p>
            <p>
                <span>{{transText('footer.tel',local)}}：</span>
                <span>{{$store.getters.skin.tel}} </span>
            </p>
            <p>
                <span>{{transText('footer.Fax',local)}}：</span>
                <span>+86-25-84692610</span></p>
            <p>
                <span>{{transText('footer.Mail',local)}}：</span>
                <span>{{$store.getters.skin.mail}}</span>
            </p>
            <p>
                <span>{{transText('footer.Web',local)}}：</span>
                <span>{{$store.getters.skin.web}}</span></p>
            <p>
                <span>{{transText('footer.Add',local)}}：</span>
                <span>{{transText('footer.Address',local)}}</span>
            </p>
        </div>
        <div class="footer-view-item">
            <a href="http://www.uaec-expo.com/" target="_blank"><img src="/static/image/807FL-1.png" alt="" border=0></a>
            <a href="http://www.corferias.com/" target="_blank"> <img src="/static/image/807FL-2.png" alt=""></a>
        </div>
        <div class="footer-view-item">
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
    <!-- <div>{{$store.getters.skin.record}}</div> -->
    <div>
        ©2019 UAEC 苏ICP备09034171号-5
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011502010949">
            <img src="http://www.beian.gov.cn/file/ghs.png" style="margin:0; vertical:top;">
            苏公安备32011502010949号
        </a>
    </div>
</div>
</template>
<script>
export default {
    props: ['lang'],
    data() {
        return {
            local: this.lang || 'en'
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
    .footer-view {
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
}
</style>
