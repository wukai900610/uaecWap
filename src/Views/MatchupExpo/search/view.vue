<template>
<div class="view-wrap">
    <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/MatchupExpo' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/MatchupExpo/search?section=0&key=&type='+ $route.query.type}">{{$route.query.type=='supply'?'Company':$route.query.type}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{classData.Name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <h2 v-if="token" v-html="tabelName=='product' || tabelName=='offer'?classData.SupplyName:classData.Name"></h2>
    <div class="search-view-item" v-loading="loading">
        <div class="search-view-item-left">
            <img :src="classData.Img" alt="">
        </div>
        <div class="search-view-item-right">
            <div class="search-view-item-product" v-if="tabelName=='product'||tabelName=='offer'">
                <div class="search-view-item-product-view">
                    <p v-html="classData.Name"></p>
                </div>
            </div>
            <div class="search-view-item-supply" v-else>
                <p @click="next('/MatchupExpo/search/viewAllOffers')">All Offers</p>
                <p @click="next('/MatchupExpo/search/viewAllProducts')">All Products</p>
                <p @click="next('/MatchupExpo/search/viewOffersCategories')">Offers Categories</p>
                <p @click="next('/MatchupExpo/search/viewProductsCategories')">Products Categories</p>
            </div>
            <p class="search-view-item-product-view-description" v-html="classData.Description"></p>
            <div v-if="$route.query.type != 'supply'" @click="nextSupplyID">
                <p><span>Company:</span>{{classData.SupplyName}}</p>
            </div>
            <div class="xl-over">
                <p class="xl-left"><span>Role</span>:{{classData.IsExhibitor==0?'Visitors':'Exhibitors'}}</p>
                <p class="xl-left" v-if="classData.IsExhibitor==1">Booth:{{classData.BoothNum}}</p>
            </div>
            <div class="search-view-item-right-p">
                <p><span>Mobile phone</span> : {{classData.ManPhone}}</p>
                <p><span>Contact Person</span> : {{classData.ManName}}</p>
                <p class="line1"><span>Website</span> : {{classData.WebSite}}</p>
                <p><span>{{classData.ManWeChat?'WeChat' : classData.ManFacebook?'FaceBook' : 'Whatsapp'}}</span> : {{classData.ManWeChat || classData.ManFacebook || classData.ManWhatsapp}}</p>
            </div>
            <div>
                <el-button @click="nextContact(tabelName)" type="primary">Contact Company</el-button>
                <el-button @click="nextInvitation(tabelName)" type="primary">Meet Company</el-button>
            </div>
        </div>
    </div>
    <div class="search-view-content ql-editor" v-loading="loading">
        <div v-html="classData.Summary">

        </div>
        <p></p>
    </div>
</div>
</template>

<script>
import {
    getcompany
} from "@/assets/api/api";
import Util from "@/assets/service/customUtil";

export default {
    data() {
        return {
            token: Util.getsessionStorage('token'),
            classData: {},
            tabelName: this.$route.query.type,
            loading: true
        }
    },
    created() {
        getcompany({
                url: '/b2b' + this.$route.query.type,
                id: this.$route.query.id
            })
            .then(result => {
                // console.log(result)
                this.classData = this.formatResult(result.data[0])
                this.loading = false
            })
    },
    methods: {
        formatResult(data){
            if(!this.token){
                data.ManName = '******'
                data.SupplyName = '******'
                data.ManPhone = '******'
                data.ManWeChat = '******'
                data.ManFacebook = '******'
                data.ManWhatsapp = '******'
                data.WebSite = '******'
            }

            return data
        },
        nextInvitation() {
            this.$router.push('/MatchupExpo/Invitation?id=' + this.classData.UserID + '&Booth=' + this.classData.BoothNum)
        },
        nextContact() {
            this.$router.push('/MatchupExpo/contact?id=' + this.classData.UserID)
        },
        next(url) {
            this.$router.push(url + '?id=' + this.classData.ID + '&name=' + this.classData.Name)
        },
        nextSupplyID() {
            this.$router.push('/MatchupExpo/search/view?id=' + this.classData.SupplyID + '&type=supply')
        }
    },
    watch: {
        '$route'() {
            this.loading = true
            getcompany({
                    url: '/b2b' + this.$route.query.type,
                    id: this.$route.query.id
                })
                .then(result => {
                    // console.log(result)
                    this.classData = result.data[0]
                    this.tabelName = this.$route.query.type
                    this.loading = false
                })
        }
    }
}
</script>

<style scoped lang="scss">
.view-wrap {
    background: rgba(245,245,245,1);
    width: 100%;
    overflow: hidden;
    h2 {
        text-align: center;
    }
    .search-view-item {
        width: 1200px;
        margin: 0 auto;
        background-color: #fff;
        overflow: hidden;
        height: 525px;
        border-bottom: 2px solid rgba(224,224,224,1);
        .search-view-item-left {
            float: left;
            width: 560px;
            line-height: 525px;
            text-align: center;
            img {
                width: 500px;
                height: 450px;
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
                        float: left;
                        margin: 35px 0 15px;
                        line-height: 30px;
                        font-size: 24px;
                        color: rgba(51,51,51,1);
                    }
                }

            }
            .search-view-item-product-view-description {
                min-height: 100px;
            }
            .search-view-item-right-p {
                width: 100%;
                position: relative;
                min-height: 55px;
                p {
                    float: left;
                    width: 50%;
                }
            }
            .search-view-item-supply {
                border-bottom: 1px dashed rgba(224,224,224,1);
                text-align: left;
                margin-top: 20px;
                width: 100%;
                overflow: hidden;
                min-height: 115px;
                p {
                    width: 50% !important;
                    float: left !important;
                }
            }
            p {
                margin: 15px 0;
                font-size: 16px;
                color: #000;
                span {
                    color: rgba(102,102,102,1);
                }
            }
            h3 {
                margin: 35.5px 0 15px;
                font-size: 24px;
                font-weight: 400;
                color: rgba(51,51,51,1);
            }
            .el-button {
                margin: 30px 30px 15px 0;
                width: 230px;
                height: 45px;
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
    .search-view-content {
        width: 1200px;
        margin: 0 auto;
        min-height: 550px;
        border-left: 1px solid rgba(224,224,224,1);
        border-right: 1px solid rgba(224,224,224,1);
        border-bottom: 1px solid rgba(224,224,224,1);
        margin-bottom: 30px;
        background-color: #fff;
        h4 {
            color: #A06C13;
            font-size: 18px;
            margin: 0;
            padding: 15px 0;
        }
        p {
            font-size: 18px;
            color: rgba(51,51,51,1);
            line-height: 31px;
        }
    }
}
</style>
<style lang="scss">
.view-wrap {
    .ql-editor {
        img {
            max-width: 100% !important;
        }
    }
}
</style>
