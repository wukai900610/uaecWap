<template>
<Layout title="Contact Now">
    <div class="contact">
        <van-cell-group>
            <van-field v-model="form.subject" label="Subject" placeholder="Subject" />
            <van-field v-model="form.message" rows="2" autosize label="Content" type="textarea" maxlength="500" placeholder="Content" show-word-limit />
        </van-cell-group>
    </div>
    <!-- <el-form class="contact" ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="Subject" prop="Subject">
            <el-input v-model="form.Subject"></el-input>
        </el-form-item>
        <el-form-item label="Content" prop="Message">
            <el-input type="textarea" v-model="form.Message"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form-item>
    </el-form> -->
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
        return {
            form: {
                subject: '',
                userTo: this.$route.query.id,
                message: ''
            },
            // rules: {
            //     Subject: [{
            //         required: true,
            //         message: 'Please enter Subject',
            //         trigger: 'blur'
            //     }, ],
            //     Message: [{
            //         required: true,
            //         message: 'Please enter Message',
            //         trigger: 'blur'
            //     }]
            // }
        }
    },
    created() {},
    methods: {
        onSubmit() {
            customRequest({
                method: 'post',
                url: '/B2BMessage',
                data: this.form
            }).then(result => {
                this.$message({
                    message: this.$t('prompt.title'),
                    type: 'success'
                }).then(() => {
                    this.$router.back()
                })
            })
            // this.$refs['form'].validate((valid) => {
            //     if (valid) {
            //     }
            // });
        }
    },
}
</script>

<style scoped lang="scss">
.contact {}
</style>
