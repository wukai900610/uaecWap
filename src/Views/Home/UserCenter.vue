<template>
<Layout>
    <span slot="header"></span>

    <div class="userCenter">
        <div class="userInfo">
            <div class="title">
                <span>{{$t('page.Mine')}}</span>
                <!-- <em class="msg"></em> -->
            </div>
            <div class="info" v-if="isLogin">
                <img :src="defaultUser">
                <div>
                    <span class="login">{{userInfo.LoginName}}</span>
                    <p>{{myStatus()}}</p>
                </div>
            </div>
            <div class="info" @click="toLogin" v-else>
                <img :src="defaultUser">
                <div>
                    <span class="login">{{$t('page.Login')}}</span>
                    <p>{{$t('page.ViewMore')}}</p>
                </div>
            </div>
        </div>
        <van-cell-group>
            <van-cell is-link :to="$t('userCenterMenu')[0].children[0].url">
                <template slot="title">
                    <div>
                        <h5>{{$t('userCenterMenu')[0].children[0].name}}</h5>
                    </div>
                </template>
            </van-cell>
            <van-collapse v-for="(item, index) in $t('userCenterMenu')[1].children" :key="index" accordion v-model="$store.state.app.page.userCenter.collapseIndex" @change="change">
                <van-collapse-item :title="item.name" :name="index">
                    <ul class="menus" v-if="item.children" style="margin-left:20px;">
                        <li v-for="(item2, index2) in item.children" :key="index2">
                            <router-link :to="{path:item2.url}">{{item2.name}}</router-link>
                        </li>
                    </ul>
                </van-collapse-item>
            </van-collapse>

            <van-cell is-link :to="$t('userCenterMenu')[2].url">
                <template slot="title">
                    <div>
                        <h5>{{$t('userCenterMenu')[2].name}}</h5>
                    </div>
                </template>
            </van-cell>
        </van-cell-group>
        <van-button type="danger" :loading="login.status == 'loading'" :block="true" size="normal" @click="logout" v-if="isLogin">{{$t('form.Logout')}}</van-button>
    </div>
</Layout>
</template>

<script>
import Util from "@/assets/service/customUtil";
import customRequest from "@/assets/service/customRequest";

import Layout from "@/components/Layout";

export default {
    components: {
        Layout,
    },
    data() {
        return {
            isLogin: Util.getsessionStorage('token') || '',
            userInfo: Util.getsessionStorage('userInfo') || {},
            defaultUser: require('../../../static/image/defaultUser.png'),
            login: {
                status: ''
            },

        }
    },
    methods: {
        myStatus(){
            if(this.$store.state.app.userInfo.IsExhibitor === ''){
                return this.$i18n.locale == 'en' ? 'Please choose your status' : '请选择身份'
            }else if(this.$store.state.app.userInfo.IsExhibitor == 1){
                return this.$t('table.Exhibitor')
            }else if(this.$store.state.app.userInfo.IsExhibitor == 0){
                return this.$t('table.Visitor')
            }
        },
        toLogin() {
            this.$router.push({
                name: 'Login'
            })
        },
        logout() {
            this.login.status = 'loading'
            customRequest({
                method: 'get',
                url: '/WebUser/Logout',
            }).then(result => {
                this.$store.dispatch('out_login').then(() => {
                    this.$router.push({
                        name: 'Login'
                    })
                })
            }).finally(() => {
                this.login.status = ''
            })
        },
        change(index){
            this.$store.commit('setActiveCollapse',index)
        }
    },
}
</script>

<style scoped lang="scss">
.userCenter {
    overflow: auto;
    height: 100%;
    background: url("/static/image/userCenterBg.png") left top no-repeat;
    background-size: contain;

    .userInfo {
        // margin-bottom: 0.35rem;
        height: 3rem;
        .title {
            position: relative;
            display: block;
            padding: 0.3rem 0 0;
            text-align: center;
            color: #fff;
            font-size: 0.34rem;
            .msg {
                position: absolute;
                right: 0.25rem;
                top: 0.39rem;
                padding: 0.16rem 0.22rem;
                background: url("/static/image/msg.png") no-repeat;
                background-size: 0.44rem;
            }
        }
        .info {
            display: flex;
            padding: 0.4rem 0.8rem 0;
            img {
                margin-right: 0.2rem;
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
            }
            div {
                color: #fff;
                font-size: 0.26rem;
                span {
                    font-size: 0.38rem;
                }
            }
        }
    }
    .van-cell-group {
        margin-bottom: 0.5rem;
    }
    .menus {
        li {
            padding: 0.1rem 0;
            color: #333;
            font-weight: bold;
        }
    }
}
</style>
