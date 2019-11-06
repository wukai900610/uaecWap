<template>
<div class="contact warp">
    <h2>Contact Now</h2>
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="Subject" prop="Subject">
            <el-input v-model="form.Subject"></el-input>
        </el-form-item>
        <!--<el-form-item label="From">-->
        <!--<el-input v-model="form.UserTo"></el-input>-->
        <!--</el-form-item>-->
        <el-form-item label="Content" prop="Message">
            <el-input type="textarea" v-model="form.Message"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import {
    getSupplier,
    postMessage
} from "@/assets/api/api";
import Util from "@/assets/service/customUtil";

export default {
    data() {
        return {
            input1: '',
            textarea2: '',
            form: {
                Subject: '',
                UserTo: '',
                Message: ''
            },
            rules: {
                Subject: [{
                    required: true,
                    message: 'Please enter Subject',
                    trigger: 'blur'
                }, ],
                Message: [{
                    required: true,
                    message: 'Please enter Message',
                    trigger: 'blur'
                }]
            }
        }
    },
    created() {
        if (this.$i18n.locale = 'es') {
            this.$i18n.locale = 'en'
            Util.setsessionStorage('lang','en')
        }
    },
    methods: {
        onSubmit() {
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    this.form['code'] = 'an'
                    this.form['UserTo'] = this.$route.query.id
                    postMessage(this.form)
                        .then(result => {
                            this.$message({
                                message: this.$t('prompt.title'),
                                type: 'success'
                            })
                            this.$router.back()
                        })
                }
            });
        }
    },
    watch: {
        '$i18n.locale'() {
            if (this.$i18n.locale == 'es') {
                this.$i18n.locale = 'en'
                Util.setsessionStorage('lang','en')
            }
        }
    }
}
</script>

<style scoped lang="scss">
.contact {
    width: 1200px;
    margin: 70px auto;
    h2 {
        text-align: center;
        margin: 70px 0;
    }
    .el-form {
        .el-input {
            width: 560px;
        }
        .el-form-item {
            margin-left: 200px;
        }
        .el-form-item:last-child {
            margin: 20px 270px;
        }
    }
    .el-button {
        width: 560px;
        border-radius: 4px;
        display: block;
        color: #fff;
    }
}
</style>
<style lang="scss">
.contact {
    .el-input__inner,
    .el-textarea {
        width: 560px;
    }
    .el-form-item__label {
        width: 150px !important;
    }
    .el-form-item__error {
        left: 70px;
    }
}
</style>
