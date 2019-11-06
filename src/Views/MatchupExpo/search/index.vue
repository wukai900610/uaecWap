<template>
<div class="search-wrap">
    <div class="search-view">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/MatchupExpo' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.query.key}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="search-view-keyword">
            <ul>
                <li @click="changeTabel('product')"
                    :style="{color: tabelName=='product'?$store.getters.skin.background:'',borderBottom:tabelName=='product'?'1px solid '+$store.getters.skin.background+' !important':'1px solid #fff !important', transition: '.5s'}">Products</li>
                <li @click="changeTabel('offer')"
                    :style="{color: tabelName=='offer'?$store.getters.skin.background:'',borderBottom:tabelName=='offer'?'1px solid '+$store.getters.skin.background+' !important':'1px solid #fff !important', transition: '.5s'}">Offers</li>
                <li @click="changeTabel('supply')"
                    :style="{color: tabelName=='supply'?$store.getters.skin.background:'',borderBottom:tabelName=='supply'?'1px solid '+$store.getters.skin.background+' !important':'1px solid #fff !important', transition: '.5s'}">Companies</li>
            </ul>
        </div>
        <div class="search-view-item" v-for="(item,index) in classData" :keys="item" v-loading="loading" @click="nextSearchView(item)">
            <div class="search-view-item-left">
                <img :src="item.Img" alt="">
            </div>
            <div class="search-view-item-right">
                <div class="search-view-item-product" v-if="tabelName=='product'||tabelName=='offer'">
                    <div class="search-view-item-product-view">
                        <p v-html="item.Name" class="line1"></p>
                    </div>
                    <p class="search-view-item-product-view-description line1" v-html="item.Description"></p>
                </div>
                <div class="search-view-item-supply" v-else>
                    <h3 class="line1" v-html="item.Name"></h3>
                    <p v-html="item.Description"></p>
                </div>
                <div>
                    <p class="line1" v-if="$route.query.type!='supply'" @click.stop="nextSupplyID(item)">
                        <span>Company:</span>
                        {{item.SupplyName}}
                    </p>
                </div>
                <div v-if="$route.query.type=='supply'" class="companyV">

                </div>
                <div class="xl-over" style="display: flex;">
                    <p v-if="$route.query.type == 'offer'"><span>kind</span>:{{item.Kind=='0'?'Buy':'cooperation'}}</p>
                    <p><span>Role</span>:{{item.IsExhibitor==0?'Visitors':'Exhibitors'}}</p>
                    <p v-if="item.IsExhibitor==1"><span>Booth</span>:{{item.BoothNum}}</p>
                </div>
                <div class="search-view-item-right-p">
                    <p><span>Mobile phone</span>:{{item.ManPhone}}</p>
                    <p><span>Contact Person</span>:{{item.ManName}}</p>
                    <p class="line1"><span>Website</span>:{{item.WebSite}}</p>
                    <p><span>{{item.ManWeChat?'WeChat':item.ManFacebook?'FaceBook':'Whatsapp'}}</span>:{{item.ManWeChat || item.ManFacebook || item.ManWhatsapp}}</p>
                </div>
                <div>
                    <el-button @click.stop="nextContact(item)" type="primary">Contact Company</el-button>
                    <el-button @click.stop="nextInvitation(item)" type="primary">Meet Company</el-button>
                </div>
            </div>
        </div>
        <div class="search-view-item" v-if="pageCount == 0">
            <div id="none"><img src="/static/image/none.png" alt=""></div>
        </div>
    </div>
    <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="size" :current-page.sync="page" :total="pageCount">
    </el-pagination>
</div>
</template>
<script>
import {
    getSearchKeyword,
    getsearchGetByCatelogID
} from "@/assets/api/api";
import Util from "@/assets/service/customUtil";

export default {
    data() {
        return {
            token: Util.getsessionStorage('token'),
            tabelName: 'product',
            classData: [],
            className: 'Products',
            pageCount: 1,
            page: 1,
            size: 10,
            loading: true
        }
    },
    created() {
        this.tabelName = this.$route.query.type || 'product'

        this.getData(this.$route.query.section)
    },
    methods: {
        getData(section){
            if(section == 1){
                // 来自目录
                getsearchGetByCatelogID({
                        CatelogID: this.$route.query.id,
                        type: this.$route.query.type || 'product',
                        page: this.$route.query.page || 1,
                        CLevel: this.$route.query.CLevel,
                        size: this.size
                    })
                    .then(result => {
                        this.classData = this.formatResult(result.data)
                        this.pageCount = result.count
                        this.page = Number(this.$route.query.page) || 1
                        this.loading = false
                    })
            }else{
                // 来自关键词
                getSearchKeyword({
                        KeyWords: this.$route.query.key,
                        type: this.$route.query.type || 'product',
                        page: this.$route.query.page || 1,
                        CLevel: this.$route.query.CLevel,
                        size: this.size
                    })
                    .then(result => {
                        this.classData = this.formatResult(result.data)
                        this.pageCount = result.count
                        this.page = Number(this.$route.query.page) || 1
                        this.loading = false
                    })
            }
        },
        formatResult(data){
            data.map((item)=>{
                if(!this.token){
                    item.ManName = '******'
                    item.SupplyName = '******'
                    item.ManPhone = '******'
                    item.ManWeChat = '******'
                    item.ManFacebook = '******'
                    item.ManWhatsapp = '******'
                    item.WebSite = '******'
                }
            })

            return data
        },
        changeLang() {
            this.$i18n.locale == 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
        },
        changeTabel(name) {
            this.tabelName = name
            this.page = 1
            this.$router.push('/MatchupExpo/search?key=' + this.$route.query.key + '&page=1' + '&type=' + name + '&section=' + (this.$route.query.section || '') + '&id=' + (this.$route.query.id || ''))
        },
        handleSizeChange(val) {
            this.$router.push('/MatchupExpo/search?key=' + this.$route.query.key + '&page=' + val + '&type=' + (this.$route.query.type || 'product') + '&section=' + (this.$route.query.section || '') + '&id=' + this.$route.query.id)
        },
        handleCurrentChange(val) {
            this.$router.push('/MatchupExpo/search?key=' + this.$route.query.key + '&page=' + val + '&type=' + (this.$route.query.type || 'product') + '&section=' + (this.$route.query.section || '') + '&id=' + this.$route.query.id)
        },
        nextInvitation(item) {
            this.$router.push('/MatchupExpo/Invitation?id=' + item.UserID + '&Booth=' + item.BoothNum)
        },
        nextSearchView(item) {
            this.$router.push('/MatchupExpo/search/view?id=' + item.ID + '&type=' + this.tabelName)
        },
        nextContact(item) {
            this.$router.push('/MatchupExpo/contact?id=' + item.UserID)
        },
        nextSupplyID(item) {
            this.$router.push('/MatchupExpo/search/view?id=' + item.SupplyID + '&type=supply')
        }
    },
    watch: {
        '$route'() {
            this.loading = true
            this.tabelName = this.$route.query.type || 'product'
            this.page = Number(this.$route.query.page) || 1
            this.getData(this.$route.query.section)
        }
    }
}
</script>
<style spoed lang="scss">
.search-wrap {
    width: 100%;
    overflow: hidden;
    background: rgba(245,245,245,1);
}
.search-view {
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 20px;
    .search-view-keyword {
        ul {
            width: 100%;
            overflow: hidden;
            li {
                float: left;
                padding: 10px 15px;
                font-size: 16px;
                font-weight: bold;
                color: rgba(102,102,102,1);
                border-bottom: 1px solid rgba(255,255,255,1);
            }
        }
    }
    .search-view-item {
        width: 100%;
        background-color: #fff;
        overflow: hidden;
        border-bottom: 2px solid rgba(224,224,224,1);
        .search-view-item-left {
            float: left;
            width: 360px;
            line-height: 325px;
            text-align: center;
            img {
                width: 300px;
                height: 300px;
                vertical-align: middle;
            }
        }
        .search-view-item-right {
            float: left;
            width: calc(100% - 560px);
            .search-view-item-product {
                border-bottom: 1px dashed rgba(224,224,224,1);
                width: 100%;
                overflow: hidden;
                .search-view-item-product-view {
                    overflow: hidden;
                    p {
                        width: 100%;
                        margin: 12px 0 15px;
                        font-size: 24px;
                        line-height: 30px;
                        color: rgba(51,51,51,1);
                    }
                }

            }
            .search-view-item-supply {
                p:nth-child(3) {
                    border-bottom: 1px dashed rgba(224,224,224,1);
                    min-height: 35px;
                }
            }
            .companyV {
                height: 25px;
                border-top: 1px dashed rgba(224,224,224,1);
            }
            .search-view-item-right-p {
                width: 100%;
                position: relative;
                min-height: 55px;
                p {
                    float: left;
                    width: 50%;
                    line-height: 30px;
                }
            }
            p {
                margin: 10px 0;
                font-size: 16px;
                color: #000;
                span {
                    color: rgba(102,102,102,1);
                }
            }
            h3 {
                margin: 0;
                font-size: 24px;
                font-weight: 400;
                color: rgba(51,51,51,1);
                height: 70px;
                line-height: 60px;
            }
            .el-button {
                margin: 17px 17px 15px 0;
                width: 230px;
                height: 45px;
                /*background:rgba(250,171,35,1);*/
                color: rgba(255,255,255,1);
                border-radius: 4px;
                font-size: 16px;
            }
            .el-button:nth-child(2) {
                background: rgba(245,245,245,1);
                border: 1px solid rgba(206,211,217,1);
                color: rgba(51,51,51,1);
                margin: 15px 30px;
            }
        }
        .xl-over {
            p {
                width: 50%;
            }
        }
    }
}
</style>
