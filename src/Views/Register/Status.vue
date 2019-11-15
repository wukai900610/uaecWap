<template>
<Layout :title="$i18n.locale == 'en' ? 'Choose the Status' : '请选择展会身份'">
    <div class="status">
        <div v-if="$i18n.locale == 'en'">
            <router-link :to="{'name': 'exhibitor',query:{isExhibitor:1}}" class="button">
                <van-button class="largeCustomBtn" type="info" size="large">{{$t('table.Exhibitor')}}</van-button>
            </router-link>
            <router-link :to="{'name': 'exhibitor',query:{isExhibitor:0}}" class="button">
                <van-button class="largeCustomBtn" type="default" size="large">{{$t('table.Visitor')}}</van-button>
            </router-link>
        </div>
        <div v-else>
            <!-- <router-link :to="{'name': 'ExhibitorAdd',query:{isExhibitor:1}}" class="button">
                <van-button class="largeCustomBtn" type="info" size="large">参展商</van-button>
            </router-link>
            <router-link :to="{'name': 'VisitorAdd',query:{isExhibitor:0}}" class="button">
                <van-button class="largeCustomBtn" type="info" size="large">观展商</van-button>
            </router-link> -->
        </div>
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
        }
    },
    methods: {},
    created() {
        if (this.$store.state.app.token) {
            // 判断是否有订单
            customRequest({
                method: 'get',
                url: '/WebProduct/GetMyList',
            }).then(result => {
                if (result.data.from.length > 0) {
                    this.$router.push({
                        name: 'UserCenter'
                    })
                }
            })
        }
    },
}
</script>

<style scoped lang="scss">
.status{
    padding: .5rem .5rem 0;
    background: #fff;
    .largeCustomBtn{
        margin-bottom: .5rem;
    }
}
</style>
