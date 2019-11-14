<template>
<div class="wrap">
    <div class="View">
        <el-form ref="form" :model="form" :rules="formRules" label-width="150px">
            <h5>Sign Up</h5>
            <el-form-item label="Email" prop="Email">
                <el-input v-model="form.Email" placeholder="Enter email"></el-input>
            </el-form-item>
            <el-form-item label="PassWord" prop="Password">
                <el-input v-model="form.Password" type="password" placeholder="Enter passWord"></el-input>
            </el-form-item>
            <el-form-item label="Re-enter Password" prop="Password2">
                <el-input v-model="form.Password2" type="password" placeholder="Re-enter password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit" :loading="form.loading">Sign Up</el-button>
            </el-form-item>
        </el-form>
        <div class="bottom">
            <router-link :to="{'name': 'Login'}">Sign In</router-link>
            <router-link :to="{'name': 'Forgot'}">Forget Password</router-link>
        </div>
    </div>
</div>
</template>

<script>
import Util from "@/assets/service/customUtil";

import customRequest from "@/assets/service/customRequest";
// import {
//     Message,
// }
// from 'element-ui'

export default {
    data() {
        let regInfo = Util.getsessionStorage('regInfo') || {}
        return {
            form: {
                Email:regInfo.Email,
                loading:false
            },
            formRules: {
                Email: [{
                    required: true,
                    message: this.$t('text.input') + 'Email' + this.$t('text.here'),
                    trigger: 'blur'
                }, {
                    type: 'email',
                    message: 'Invalid email'
                }],
                Password: [{
                    required: true,
                    message: this.$t('text.input') + this.$t('form.PassWord') + this.$t('text.here'),
                    trigger: 'blur'
                }],
                Password2: [{
                    validator: (rule, value, callback) => {
                        if (value === '') {
                            callback(new Error('Please enter password'));
                        } else if (value !== this.form.Password) {
                            callback(new Error('Inconsistent input password twice'));
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
        submit() {
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    this.form.loading = true
                    this.form.pkcode = this.$route.query.pkcode

                    customRequest({
                        method:'post',
                        url: '/WebUser/RegEn',
                        data:this.form
                    }).then(result => {
                        // 注册成功登陆用的
                        Util.setsessionStorage('regInfo',result)
                        // setsessionStorage('regInfo',{
                        //     Email:result.data.User.Email,
                        //     Password:this.form.Password
                        // })
                        // 跳转至邮箱验证
                        this.$router.push({
                            name:'VerifyEmail',
                            query:{
                                UserID:result.data.User.ID,
                                Email:result.data.User.Email
                            }
                        })
                    }).finally(()=>{
                        this.form.loading = false
                    })
                }
            });
        }
    },
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
