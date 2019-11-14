<template>
<div class="wrap">
    <div class="View">
        <el-form ref="form" :model="form" :rules="formRules" label-width="150px">
            <h5>忘记密码?</h5>
            <el-form-item label="手机号" prop="number">
                <el-input v-model="form.number" placeholder="请输入注册手机号" type="number"></el-input>
            </el-form-item>
            <CountDown ref="VerifyCode" :mobile="form.number" :sendFun="send"></CountDown>

            <el-form-item :label="'新'+$t('form.PassWord')" prop="newPass">
                <el-input v-model="form.newPass" type="password" placeholder="请输入新密码"></el-input>
            </el-form-item>
            <el-form-item :label="$t('form.ReEnterPassWord')" prop="newPass2">
                <el-input v-model="form.newPass2" type="password" placeholder="重新输入密码"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submit" :loading="form.loading">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
import customRequest from "@/assets/service/customRequest";
import CountDown from "@/Components/CountDown/index.vue";

export default {
    data() {
        return {
            form: {
                loading: false,
            },
            formRules: {
                number: [{
                    required: true,
                    message: this.$t('text.input') + '手机号' + this.$t('text.here'),
                    trigger: 'blur'
                }, {
                    validator: (rule, value, callback) => {
                        let ereg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
                        if (!ereg.test(value)) {
                            callback(new Error('无效的手机号'));
                        } else {
                            callback();
                        }
                    },
                    trigger: ['blur', 'change']
                }],
                // VerifyCode: [{
                //     validator: (rule, value, callback) => {
                //         let newValue = this.$refs['VerifyCode'].code
                //         if (!newValue) {
                //             callback(new Error(this.$t('text.input') + '手机验证码' + this.$t('text.here')));
                //         } else {
                //             callback();
                //         }
                //     },
                //     trigger: 'blur'
                // }],
                newPass: [{
                    required: true,
                    message: this.$t('text.input') + this.$t('form.PassWord') + this.$t('text.here'),
                    trigger: 'blur'
                }],
                newPass2: [{
                    validator: (rule, value, callback) => {
                        if (!value || value != this.form.newPass) {
                            callback(new Error('两次输入的密码不相同'));
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
                url: '/WebUser/SMSReSendFind',
                params: {
                    Number:this.form.number
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
                    this.form.loading = true
                    this.form.CheckCode = this.$refs['VerifyCode'].code

                    customRequest({
                        method: 'get',
                        url: '/WebUser/SMSPutFind',
                        params: this.form
                    }).then(result => {
                        this.$confirm('密码修改成功', 'Tips', {
                                confirmButtonText: "确定",
                                type: 'success'
                            })
                            .then(_ => {
                                this.$router.push({
                                    name:'Login'
                                })
                            })
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
    flex:1;
    background: #f5f5f5;
    .View {
        margin: 0 auto;
        width: 500px;
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
