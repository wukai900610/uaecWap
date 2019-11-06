<template>
<Layout>
    <!-- <Header slot="header" lang="en" /> -->

    <!-- <p slot="exhibitionName">{{$store.state.app.skin.headTitle}}</p>

    <div class="carousel">
        <el-carousel height="600px">
            <el-carousel-item v-for="(item,index) in carousel" :key="index">
                <a :href="item.link" title="click for more details">
                    <img @click="next" :src="item.img">
                </a>
            </el-carousel-item>
        </el-carousel>
        <div class="carousel-window" :style="{background:$store.getters.skin.background}">
            <p>{{$store.getters.skin.en.app.app1}}</p>
            <p v-if="isNiCode">9:30-17:30</p>
            <p>{{$store.getters.skin.en.app.app2}}</p>
            <div class="carousel-window-box">
                <router-link to="/Status">
                    <p>As Exhibitors</p>
                </router-link>
                <router-link to="/Status">
                    <p>As Visitors</p>
                </router-link>
            </div>
        </div>
    </div>
    <router-view class="router-wrap"></router-view> -->

    <!-- <Footer slot="footer" lang="en" /> -->

    <van-swipe :autoplay="6000" indicator-color="white">
        <van-swipe-item v-for="item in carousel" :key="$index">
            <img :src="item.img" alt="">
        </van-swipe-item>
    </van-swipe>
    <van-datetime-picker style="width:350px;" v-model="currentDate" type="datetime" :min-date="minDate" :max-date="maxDate" />

</Layout>
</template>

<script>
import {
    DatetimePicker,
    Locale
} from 'vant';

import {
    messages
} from "@/assets/api/i18n/"

import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";

import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
    data() {
        return {
            isNiCode: Util.isNiCode(),
            carousel: [],

            minHour: 10,
            maxHour: 20,
            minDate: new Date(),
            maxDate: new Date(2019, 10, 1),
            currentDate: new Date()
        }
    },
    created() {
        customRequest({
            method: 'get',
            url: '/b2bbanner',
        }).then(result => {
            this.carousel = [{
                img: result.data.Banner,
                link: result.data.LinkUrl,
            }, {
                img: result.data.Banner2,
                link: result.data.LinkUrl2,
            }]
        })
    },
    methods: {
        next() {
            // if(this.$store.getters.skin.code=='nt')
            this.$router.push('/MatchupExpo')
        }
    },
    watch: {
        '$i18n.locale'() {
            Locale.use(this.$i18n.locale, messages[this.$i18n.locale]);

            // if (this.$i18n.locale == 'zh') {
            //  a   this.$router.push('/newView')
            // } else if (this.$i18n.locale == 'es') {
            //     this.$router.push('/newViewES')
            // } else {
            //     this.$router.push('/newViewEn')
            // }
        }
    },
    components: {
        Layout,
        Header,
        Footer
    },
}
</script>
