<template>
<Layout :title="lan == 'en' ? 'My Account' : '我的帐户'">
    <div class="account">
        <van-cell-group v-if="lan == 'en'">
            <van-field v-model="userInfo.Email" readonly label="username">
                <!-- <van-button slot="button" size="small" type="info">change</van-button> -->
            </van-field>
            <van-field value="******" readonly type="password" label="password">
                <van-button slot="button" size="small" type="info" @click="showChangPass">change</van-button>
            </van-field>
        </van-cell-group>
        <van-cell-group v-else>
            <van-field v-model="userInfo.Mobile" readonly label="手机号">
                <!-- <van-button slot="button" size="small" type="info">修改</van-button> -->
            </van-field>
            <van-field value="******" readonly type="password" label="密码">
                <van-button slot="button" size="small" type="info" @click="showChangPass">修改</van-button>
            </van-field>
        </van-cell-group>

        <van-dialog v-model="passwordData.show" :title="$t('page.modifyPass')" @confirm="modifyPass" show-cancel-button>
            <van-cell-group>
                <van-field v-model="passwordData.LoginPass" type="password" :label="$t('form.LoginPass')">
                </van-field>
                <van-field v-model="passwordData.LoginPass2" type="password" :label="$t('form.ReLoginPass')">
                </van-field>
            </van-cell-group>
        </van-dialog>
    </div>
</Layout>
</template>

<script>
import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";

import Layout from "@/components/Layout";

export default {
    components: {
        Layout,
    },
    data() {
        let userInfo = Util.getsessionStorage('userInfo')
        return {
            userInfo: userInfo,
            passwordData:{
                LoginPass:'',
                LoginPass2:'',
                show:false
            },
        }
    },
    created() {
        this.lan = Util.getsessionStorage('lang')
    },
    methods: {
        showChangPass() {
            this.passwordData.show = true
        },
        modifyPass() {
            customRequest({
                method: 'put',
                url: '/webuser/modipass ',
                data: this.passwordData
            }).then(result => {
                this.$toast.success(this.$t('prompt.modifyPassSuccess'))

                setTimeout(function() {
                    this.$store.dispatch('out_login')
                        .then(result => {
                            this.$router.push({name:'SignIn'})
                        })
                }.bind(this), 1000);
            })
        },
    },
}
</script>

<style scoped lang="scss">
</style>
