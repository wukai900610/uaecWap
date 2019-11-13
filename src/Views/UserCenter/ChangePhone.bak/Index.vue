<template>
<div class="wrap">
    <div class="View">
        <el-form ref="form" :model="form" :rules="formRules" label-width="80px">
            <h5>修改手机</h5>
            <el-form-item label="新手机" prop="Mobile">
                <el-input v-model="form.Mobile" placeholder="请输入手机号" type="number"></el-input>
            </el-form-item>
            <CountDown ref="VerifyCode" :sendFun="send"></CountDown>
            <el-form-item>
                <el-button type="primary" @click="submit" :loading="form.loading">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";
import CountDown from "@/Components/CountDown/index.vue";

export default {
    name: "index",
    data() {
        return {
            form: {
                loading:false
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
            },
        }
    },
    created() {
        let _this = this;

        // 注册enter事件
        document.body.addEventListener('keydown', function(e) {
            if (e.keyCode == 13) {
                if (_this.form.LoginName && _this.form.LoginPass) {
                    _this.submit();
                }
            }
        });
    },
    methods: {
        send() {
            if(this.form.Mobile){
                customRequest({
                    method: 'get',
                    url: '/WebUser/SMSReSend',
                    params: {
                        UserId:this.$store.state.app.userInfo.ID
                    }
                }).then(result => {
                     this.$refs['VerifyCode'].countDownStatus()
                }).finally(() => {
                })
            }
        },
        submit() {
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    this.form.loading = true

                    // customRequest({
                    //     method: 'post',
                    //     url: '/WebUser/Login',
                    //     data: this.form
                    // }).then(result => {
                    //     Util.doLogin(result)
                    // }).finally(()=>{
                    //     this.form.loading = false
                    // })
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
        width: 410px;
        h5 {
            text-align: center;
            font-size: 20px;
        }
    }
}
</style>
