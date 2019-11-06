<template>
<div>
    <SignIn v-if="lan == 'zh'" />
    <SignInEn v-else />
</div>
</template>

<script>
import SignIn from "./SignIn.vue";
import SignInEn from "./SignInEn.vue";

import Util from "@/assets/service/customUtil";

// import Layout from "@/components/Layout";

export default {
    data() {
        return {
            lan: ''
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
    components: {
        // Layout,
        SignIn,
        SignInEn
    }
}
</script>
<style scoped lang="scss">
.router-wrap {
    height: calc(100% - (140px + 357px));
}
</style>
