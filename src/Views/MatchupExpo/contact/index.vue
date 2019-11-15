<template>
<Layout title="Contact Now">
    <div class="contact">
        <van-cell-group>
            <van-field v-model="form.subject" label="Subject" placeholder="Subject" />
            <van-field v-model="form.message" rows="2" autosize label="Content" type="textarea" maxlength="500" placeholder="Content" show-word-limit />
            <van-button class="largeCustomBtn" type="info" size="large" @click="onSubmit">{{$t('form.submit')}}</van-button>
        </van-cell-group>
    </div>
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
        }
    },
    created() {},
    methods: {
        onSubmit() {
            this.form.UserTo = this.$route.query.id
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
        }
    },
}
</script>

<style scoped lang="scss">
.contact {
    .largeCustomBtn {
    }
}
</style>
