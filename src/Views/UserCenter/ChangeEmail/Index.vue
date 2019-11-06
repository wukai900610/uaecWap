<template>
<div class="wrap">
    <div class="View">
        <el-form ref="form" :model="form" :rules="formRules" label-width="100px">
            <h5>Change Email</h5>
            <el-form-item label="Email">
                <el-input disabled v-model="form.Email" placeholder="Enter email"></el-input>
            </el-form-item>
            <el-form-item label="New Email" prop="NewEmail">
                <el-input v-model="form.NewEmail" placeholder="Enter email"></el-input>
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
import Util from "@/assets/service/customUtil";
import CountDown from "@/Components/CountDown/index.vue";

export default {
    data() {
        let userInfo = Util.getsessionStorage('userInfo')
        return {
            userInfo: userInfo,
            form: {
                Email: userInfo.Email,
                NewEmail: '',
                loading: false
            },
            formRules: {
                NewEmail: [{
                    required: true,
                    message: this.$t('text.input') + 'Email' + this.$t('text.here'),
                    trigger: 'blur'
                }, {
                    type: 'email',
                    message: 'Invalid email'
                }, {
                    validator: (rule, value, callback) => {
                        if (value == this.form.Email) {
                            callback(new Error("Mailbox can't be repeated"));
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
                if (_this.form.Email) {
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

                    this.$router.push({
                        name: 'VerifyEmail',
                        query: {
                            UserID: this.userInfo.ID,
                            Email: this.userInfo.Email
                        }
                    })
                }
            });
        }
    },
    watch: {
        // '$i18n.locale'() {
        //     if (this.$i18n.locale == 'es') {
        //         this.$router.push('/newViewES')
        //     } else {
        //         location.reload()
        //     }
        // }
    }
}
</script>

<style scoped lang="scss">
.wrap {
    overflow: auto;
    flex: 1;
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
