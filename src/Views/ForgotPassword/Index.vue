<template>
<Layout>
    <Fpass v-if="lan == 'zh'" />
    <FpassEn v-else />
</Layout>
</template>

<script>
import Fpass from "./Fpass.vue";
import FpassEn from "./FpassEn.vue";

import Util from "@/assets/service/customUtil";

import Layout from "@/components/Layout";

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
        Layout,
        Fpass,
        FpassEn
    }
}
</script>
