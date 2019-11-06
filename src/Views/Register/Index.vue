<template>
    <Layout>
        <SignUp v-if="lan == 'zh'" />
        <SignUpEn v-else />
    </Layout>
</template>

<script>
import SignUp from "./SignUp.vue";
import SignUpEn from "./SignUpEn.vue";

import Util from "@/assets/service/customUtil";

import Layout from "@/components/Layout";

export default {
    data() {
        return {
            lan:''
        }
    },
    created() {
        this.lan = Util.getsessionStorage('lang')
    },
    watch: {
        '$i18n.locale'() {
            this.lan = this.$i18n.locale
        }
    },
    components:{
        Layout,
        SignUp,
        SignUpEn
    }
}
</script>
<style scoped lang="scss">
    .router-wrap{
        height: calc(100% - (140px + 357px));
    }
</style>
