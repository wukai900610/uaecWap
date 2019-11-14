<template>
<Layout>
    <div class="VerifyEmail">
        <div class="content">
            <p>{{$t('form.VerifyEmail')}}</p>
            <el-form ref="form" :model="form" :rules="formRule">
                <p class="text" v-if="email.status == 'success'">
                    To verify your email, we've sent a code to {{form.Email}}
                    <!-- <router-link class="cbutton" :to="{'name': 'SignUp'}">Change</router-link> -->
                    <span class="cbutton" @click="ChangeEmail">Change</span>
                </p>
                <el-form-item :label="$t('form.VerifyEmailCode')" prop="CheckCode">
                    <el-input v-model="form.CheckCode" :placeholder="$t('form.VerifyEmailCode')"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button :loading="form.status == 'loading'" style="width:100%;" type="primary" @click="vertify">{{$t('form.VerifyEmail')}}</el-button>
                </el-form-item>
                <p class="text" style="color:#439671" v-if="email.status == 'success'">A new code has been sent to your email.</p>
                <div class="note" v-if="form.status == 'error' || form.status == 'loading'">
                    <el-button :loading="email.status == 'loading'" @click="resendCode">Resend Code</el-button>
                    <div>
                        Note:If you didn't receiver our verification email:
                        <p>Confirm that your email adress was entered correctly above.</p>
                        <p>Check your spam or junk email folder.</p>
                    </div>
                </div>
            </el-form>
        </div>
    </div>
</Layout>
</template>

<script>
import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";
import Layout from "@/components/Layout";

export default {
    data() {
        return {
            regInfo: Util.getsessionStorage('regInfo') || {},
            formRule: {
                CheckCode: [{
                    required: true,
                    message: this.$t('text.input') + this.$t('form.VerifyEmailCode'),
                    trigger: 'blur'
                }],
            },
            form: {
                Email: this.$route.query.Email,
                UserID: this.$route.query.UserID,
                CheckCode: '',
                status: ''
            },
            email: {
                status: '',
            },
        }
    },
    methods: {
        ChangeEmail() {
            this.$router.back(-1)
        },
        sendCode() {
            let _this = this

            this.email.status = 'loading';
            customRequest({
                    url: '/webuser/EmailReSend',
                    method: 'get',
                    params: {
                        UserId: _this.$route.query.UserID,
                    }
                })
                .then(() => {
                    this.email.status = 'success';
                    // 重置form状态
                    this.form.status = '';
                }).catch(() => {
                    this.email.status = 'error';
                })
        },
        resendCode() {
            this.sendCode()
        },
        vertify() {
            let _this = this
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    this.form.status = 'loading';
                    customRequest({
                        url: '/WebUser/EmailPut',
                        method: 'get',
                        params: {
                            UserID: _this.$route.query.UserID,
                            CheckCode: _this.form.CheckCode,
                        }
                    }).then(result => {
                        _this.form.status = 'success';

                        // 清除已保存的注册信息
                        Util.removesessionStorage('regInfo')

                        Util.doLogin(this.regInfo)

                        // 注册成功跳转会员中心
                        // customRequest({
                        //     method: 'post',
                        //     url: '/WebUser/Login',
                        //     data: {
                        //         LoginName:_this.regInfo.Email,
                        //         LoginPass:_this.regInfo.Password,
                        //     }
                        // }).then(result => {
                        //     // 清除已保存的注册信息
                        //     Util.removesessionStorage('regInfo')
                        //
                        //     Util.doLogin(result)
                        // }).catch((err) => {
                        //     _this.$router.push({name:'Login'})
                        // })
                    }).catch(() => {
                        _this.form.status = 'error'
                        // 重置邮箱状态
                        _this.email.status = ''
                    })
                }
            });
        },
    },
    created() {
        if (!this.$route.query.UserID || !this.$route.query.Email) {
            this.$router.go(-1)
        } else {
            this.sendCode();
        }
    },
    watch: {
        '$i18n.locale'() {
            if (this.$i18n.locale == 'es') {
                this.$router.push('/newViewES')
            } else {
                location.reload()
            }
        }
    },
    components: {
        Layout,
    }
}
</script>

<style scoped lang="scss">
.VerifyEmail {
    overflow: hidden;
    height: calc(100% - (140px + 355px));
    background: #f5f5f5;
    .content {
        margin: 0 auto;
        width: 500px;
        .text {
            cursor: default;
        }
        .cbutton {
            color: blue;
            cursor: pointer;
        }
        .note {
            padding-bottom: 20px;
            line-height: 1.5;
            p {
                margin: 0;
                text-indent: 2em;
            }
        }
    }
}
</style>
