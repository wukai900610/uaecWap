<template>
<div class="wrap">
    <div class="View">
        <el-form ref="form" :model="form" :rules="formRules" label-width="150px">
            <h5>Forgot Password?</h5>
            <el-form-item label="Email" prop="Email">
                <el-input v-model="form.Email" placeholder="Enter email" type="Email"></el-input>
            </el-form-item>
            <CountDown ref="VerifyCode" :mobile="form.Email" :sendFun="send" propLimit="60" tipText="Please enter the code here when you receive the e-mail"></CountDown>

            <el-form-item :label="'New '+$t('form.PassWord')" prop="newPass">
                <el-input v-model="form.newPass" type="password" placeholder="Enter New passWord"></el-input>
            </el-form-item>
            <el-form-item :label="$t('form.ReEnterPassWord')" prop="newPass2">
                <el-input v-model="form.newPass2" type="password" placeholder="Re-enter password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submit" :loading="form.loading">Submit</el-button>
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
                Email: [{
                    required: true,
                    message: this.$t('text.input') + ' Email ' + this.$t('text.here'),
                    trigger: 'blur'
                }, {
                    validator: (rule, value, callback) => {
                        let ereg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
                        if (!ereg.test(value)) {
                            callback(new Error('Invail Email'));
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
                //             callback(new Error(this.$t('text.input') + 'Code' + this.$t('text.here')));
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
                            callback(new Error('Inconsistent passwords entered again'));
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
                url: '/WebUser/EmailReSendFind',
                params: {
                    Email:this.form.Email
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
                        url: '/WebUser/EmailPutFind',
                        params: this.form
                    }).then(result => {
                        this.$confirm('Password modification successfully', 'Tips', {
                                confirmButtonText: "ok",
                                type: 'success'
                            })
                            .then(_ => {
                                this.$router.push({
                                    name:'SignIn'
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
