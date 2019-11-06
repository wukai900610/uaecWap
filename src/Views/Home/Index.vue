<template>
<Layout :isIndex="'true'" class="index">
    <GetListData class="banner" listName="banner" ref="banner" url="/b2bbanner" type="get">
        <template slot-scope="slotProps">
            <van-swipe :autoplay="6000" indicator-color="white">
                <van-swipe-item>
                    <router-link :to="{path: slotProps.data.LinkUrl}">
                        <img :src="slotProps.data.Banner" alt="">
                    </router-link>
                </van-swipe-item>
                <van-swipe-item>
                    <router-link :to="{path: slotProps.data.LinkUrl}">
                        <img :src="slotProps.data.Banner2" alt="">
                    </router-link>
                </van-swipe-item>
            </van-swipe>
        </template>
    </GetListData>

    <GetListData class="hotNews" listName="hotNews" ref="hotNews" url="/WebNews/Getlist" type="get" :payload="newsPayload">
        <template slot-scope="slotProps">
            <router-link :to="{name: 'ListDetailPage', params: {id: item.ID}, query: {title:item.Title}}" class="news van-hairline--top" v-for="item in slotProps.data" :key="item.ID">
                <div>
                    <h5>{{ item.Title }}</h5>
                    <p>{{ item.AddTime | dateTime }}</p>
                </div>
            </router-link>
        </template>
    </GetListData>
</Layout>
</template>

<script>
import {
    Locale
} from 'vant';

import {
    messages
} from "@/assets/api/i18n/"

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
            newsPayload: {
                page: 1,
                size: 5,
                kind: 'news',
            }
        }
    },
    created() {
    },
    methods: {},
    watch: {
        '$i18n.locale'() {
            Locale.use(this.$i18n.locale, messages[this.$i18n.locale]);
        }
    },
}
</script>

<style scoped lang="scss">
.index {
    .banner {
        padding: 0;
        margin-bottom: 0;
        height: auto;
    }
    .hotNews {
        margin: 0;
        height: auto;
        min-height: 2rem;
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
                    font-size: 0.26rem;
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
}
</style>
