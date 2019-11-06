<template>
<Layout>
    <div class="reportDetails">
        <h2 v-html="classData.Title"></h2>
        <div class="article" v-html="classData.Info"></div>
    </div>
</Layout>
</template>

<script>
import Util from "@/assets/service/customUtil";
import {
    reportDetails
} from "@/assets/api/api";

import Layout from "@/components/Layout";

export default {
    data() {
        return {
            classData: {},
        }
    },
    methods: {
        go() {
            this.$router.replace('/newView/')
        },
    },
    created() {
        reportDetails({
                ID: this.$route.query.id
            })
            .then(result => {
                this.classData = result.data.Model
            })
    },
    watch: {
        '$i18n.locale'() {
            this.go()
        }
    },
    components:{
        Layout,
    }
}
</script>

<style scoped lang="scss">
.reportDetails {
    width: 1200px;
    margin: 0 auto;
    min-height: 500px;
    padding-bottom: 20px;
    h2 {
        margin: 50px 0;
        text-align: center;
    }
}
</style>
<style lang="scss">
.reportDetails {
    .article {
        a {
            color: #333;
        }
    }
}
</style>
