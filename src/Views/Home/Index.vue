<template>
<Layout :isIndex="'true'">
    <div class="index">
        <GetListData class="banner" listName="banner" ref="banner" url="/b2bbanner" type="get">
            <template slot-scope="slotProps">
                <van-swipe :autoplay="6000" indicator-color="white">
                    <van-swipe-item>
                        <router-link :to="{path: slotProps.data.LinkUrl.split('/#')[1]}">
                            <img :src="slotProps.data.Banner" alt="">
                        </router-link>
                    </van-swipe-item>
                    <van-swipe-item>
                        <router-link :to="{path: slotProps.data.LinkUrl.split('/#')[1]}">
                            <img :src="slotProps.data.Banner2" alt="">
                        </router-link>
                    </van-swipe-item>
                </van-swipe>
            </template>
        </GetListData>

        <van-search :placeholder="$t('page.index.placeholder')" show-action shape="round" v-model="keyword">
            <van-button slot="action" type="info" size="small" @click="onSearch">{{$t('page.index.search')}}</van-button>
        </van-search>

        <GetListData class="hotNews" listName="hotNews" ref="hotNews" url="/WebNews/Getlist" type="get" :payload="newsPayload">
            <template slot-scope="slotProps">
                <router-link :to="{name: 'reportDetails', query: {id:item.ID}}" class="news van-hairline--top" v-for="item in slotProps.data" :key="item.ID">
                    <div>
                        <h5>{{ item.Title }}</h5>
                        <p>{{ item.AddTime | dateTime }}</p>
                    </div>
                </router-link>
            </template>
        </GetListData>

        <div class="info">
            <div v-if="lan == 'en'">
                <h5>{{$store.getters.skin.en.home.home1}}</h5>
                <p v-html="$store.getters.skin.en.home.home2"></p>
            </div>
            <div v-else>
                <h5>{{$store.getters.skin.zh.home.home1}}</h5>
                <p v-html="$store.getters.skin.zh.home.home2"></p>
            </div>

            <img :src="siteImg" :alt="$store.getters.skin.en.home.home1">
        </div>
    </div>
</Layout>
</template>

<script>
import {
    Locale
} from 'vant';

import {
    messages
} from "@/assets/i18n/"

import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";

import Layout from "@/components/Layout";
import GetListData from "@/components/GetListData";

export default {
    components: {
        Layout,
        GetListData,
    },
    data() {
        return {
            lan: Util.getsessionStorage('lang'),
            keyword: '',
            newsPayload: {
                page: 1,
                size: 5,
                kind: 'news',
            },
            siteImg: '../../../static/image/' + this.$store.state.app.skin.share.home.img[0],
        }
    },
    created() {},
    methods: {
        onSearch(){
            if(this.keyword){
                this.$router.push({
                    name:'MatchupExpo_search',
                    query:{
                        keyword:this.keyword,
                        section:0,
                    }
                })
            }else{
                this.$router.push({
                    name:'MatchupExpo',
                })
            }
        }
    },
    watch: {
        '$i18n.locale'() {
            this.lan = this.$i18n.locale;
            Locale.use(this.$i18n.locale, messages[this.$i18n.locale]);

            // 重新获取热点新闻
            this.$refs['hotNews'].request()
        }
    },
}
</script>

<style scoped lang="scss">
.index {
    background: #fff;
    .banner {
        padding: 0;
        margin-bottom: 0;
        height: auto;
    }
    .hotNews {
        margin: 0;
        padding: 0 ;
        height: auto;
        min-height: 2rem;
        border-top: 1px solid #eee;
        .news {
            // overflow: auto;
            display: flex;
            padding-top: 0.15rem;
            margin: 0 0.1rem 0.15rem;
            div {
                flex: 1;
                display: flex;
                flex-direction: column;
                margin-left: 0.15rem;
                h5 {
                    flex: 1;
                    height: 0.8rem;
                    line-height: 1.4;
                    text-overflow: ellipsis;
                    font-size: 0.24rem;
                }
                // span {
                //     padding-left: 0.2rem;
                //     color: #999;
                // }
                p {
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    line-height: 1.6;
                    text-overflow: ellipsis;
                    color: #666;
                    font-size: 0.24rem;
                }
            }
        }
    }
    .info {
        margin: 0.15rem 0.15rem 0;
        padding: 0.15rem 0 0;
        border-top: 1px solid #eee;
        line-height: 1.5;
        h5 {
            font-size: 0.3rem;
        }
        p {
            font-size: 0.26rem;
        }
        img {
            margin: 0.15rem 0;
        }
    }
}
</style>
