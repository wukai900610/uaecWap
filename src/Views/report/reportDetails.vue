<template>
<Layout :title="classData.Title">
    <div class="article" v-html="classData.Info"></div>
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
            classData: {},
        }
    },
    created() {
        customRequest({
            method: 'get',
            url: '/WebNews/Get',
            params: {
                ID: this.$route.query.id
            }
        }).then(result => {
            this.classData = result.data.Model
        })
    },
}
</script>

<style lang="scss">
.article {
    padding: 0.25rem;
    background: #fff;
    font-size: 0.26rem;
    a {
        color: #333;
    }
    table{
        width: 100%!important;
    }
    img{
        display: block;
        margin: 0 auto;
    }
}
</style>
