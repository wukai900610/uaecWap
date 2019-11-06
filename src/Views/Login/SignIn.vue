<template>
<div class="wrap">
    <div class="View">
        <el-form ref="form" :model="form" :rules="formRules" label-width="80px">
            <h5>登录</h5>
            <el-form-item label="手机号" prop="LoginName">
                <el-input v-model="form.LoginName" placeholder="请输入手机号" type="number"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="LoginPass">
                <el-input v-model="form.LoginPass" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit" :loading="form.loading">登录</el-button>
            </el-form-item>
        </el-form>
        <div class="bottom">
            <router-link :to="{'name': 'SignUp'}">注册</router-link>
            <router-link :to="{'name': 'Forgot'}">忘记密码</router-link>
        </div>
    </div>
</div>
</template>

<script>
import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";

export default {
    data() {
        return {
            form: {
                loading:false
            },
            formRules: {
                LoginName: [{
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
                    trigger:'blur'
                }],
                LoginPass: [{
                    required: true,
                    message: this.$t('text.input') + this.$t('form.PassWord') + this.$t('text.here'),
                    trigger: 'blur'
                }]
            },
        }
    },
    created() {
        let _this = this;

        // 注册enter事件
        document.body.addEventListener('keydown', function(e) {
            if (e.keyCode == 13) {
                if (_this.form.LoginName && _this.form.LoginPass && _this.$refs['form']) {
                    _this.submit();
                }
            }
        });
    },
    methods: {
        submit() {
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    this.form.loading = true

                    customRequest({
                        method: 'post',
                        url: '/WebUser/Login',
                        data: this.form
                    }).then(result => {
                        Util.doLogin(result,this.$route.query.Rurl)
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

        .bottom{
            overflow: auto;
            padding: 10px 0 20px;
            a{
                color: #333;
                &:last-child{
                    float: right;
                }
            }
        }
    }
}
</style>
