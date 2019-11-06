<template>
<div class="wrap">
    <div class="View">
        <el-form ref="form" :model="form" :rules="formRules" label-width="150px">
            <h5>注册</h5>
            <el-form-item label="手机号" prop="Mobile">
                <el-input v-model="form.Mobile" placeholder="请输入手机号" type="number"></el-input>
            </el-form-item>

            <CountDown ref="VerifyCode" :mobile="form.Mobile" :sendFun="send"></CountDown>

            <el-form-item label="密码" prop="Password">
                <el-input v-model="form.Password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="重新输入密码" prop="Password2">
                <el-input v-model="form.Password2" type="password" placeholder="请重新输入密码"></el-input>
            </el-form-item>
            <el-form-item label="公司名称" prop="CompanyName">
                <el-input v-model="form.CompanyName" type="text" placeholder="请输入公司名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit" :loading="form.loading">注册</el-button>
            </el-form-item>
        </el-form>
        <div class="bottom">
            <router-link :to="{'name': 'SignIn'}">登录</router-link>
            <router-link :to="{'name': 'Forgot'}">忘记密码</router-link>
        </div>
    </div>
</div>
</template>

<script>
import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";
import CountDown from "@/Components/CountDown/index.vue";
// import {
//     Message,
// }
// from 'element-ui'

export default {
    data() {
        return {
            form: {
                loading: false,
            },
            formRules: {
                Mobile: [{
                    required: true,
                    message: this.$t('text.input') + '手机号' + this.$t('text.here'),
                    trigger: 'blur'
                }, {
                    validator: (rule, value, callback) => {
                        let phone = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
                        if (!phone.test(value)) {
                            callback(new Error('无效的手机号'));
                        } else {
                            callback();
                        }
                    },
                    trigger: ['blur', 'change']
                }],
                VerifyCode: [{
                    validator: (rule, value, callback) => {
                        let newValue = this.$refs['VerifyCode'].code
                        if (!newValue) {
                            callback(new Error(this.$t('text.input') + '手机验证码' + this.$t('text.here')));
                        } else {
                            callback();
                        }
                    },
                    trigger: 'blur'
                }],
                Password: [{
                    required: true,
                    message: this.$t('text.input') + this.$t('form.PassWord') + this.$t('text.here'),
                    trigger: 'blur'
                }],
                Password2: [{
                    required: true,
                    message: this.$t('text.input') + this.$t('form.ReEnterPassWord') + this.$t('text.here'),
                    trigger: 'blur'
                }, {
                    validator: (rule, value, callback) => {
                        if (value !== this.form.Password) {
                            callback(new Error('再次输入的密码不相同'));
                        } else {
                            callback();
                        }
                    },
                    trigger: 'blur'
                }]
            },
        }
    },
    created() {
    },
    methods: {
        send() {
            customRequest({
                method: 'get',
                url: '/WebUser/SMSSend',
                params: {
                    Number:this.form.Mobile
                }
            }).then(result => {
                 this.$refs['VerifyCode'].countDownStatus()
            }).catch(() => {
                this.$refs['VerifyCode'].error()
            })
        },
        submit() {
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    this.form.VerifyCode = this.$refs['VerifyCode'].code
                    this.form.loading = true
                    this.form.pkcode = this.$route.query.pkcode

                    customRequest({
                        method: 'post',
                        url: '/WebUser/regCn',
                        data: this.form
                    }).then(result => {
                        // 注册成功跳转会员中心
                        Util.doLogin(result)
                        // customRequest({
                        //     method: 'post',
                        //     url: '/WebUser/Login',
                        //     data: {
                        //         LoginName:this.form.Mobile,
                        //         LoginPass:this.form.Password,
                        //     }
                        // }).then(result => {
                        //     Util.doLogin(result)
                        // })
                    }).finally(() => {
                        this.form.loading = false
                    })
                }
            });
        }
    },
    components: {
        CountDown
    }
}
</script>

<style scoped lang="scss">
.wrap {
    overflow: auto;
    height: 100%;
    background: #f5f5f5;
    .View {
        margin: 0 auto;
        width: 410px;
        h5 {
            text-align: center;
            font-size: 20px;
        }

        .bottom {
            overflow: auto;
            padding: 10px 0 20px;
            a {
                color: #333;
                &:last-child {
                    float: right;
                }
            }
        }
    }
}
</style>
