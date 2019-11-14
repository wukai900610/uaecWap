<template>
<Layout :title="$t('table.New')">
    <div class="abroad">
        <van-panel class="abroadItems" :title="item.Subject" v-for="item in tableData" :key="item.ID">
            <div class="info">
                <p>ID:{{item.ID}}</p>
                <p v-if="item.SupplyName">{{$t('table.CompanyName')}}:{{item.SupplyName}}</p>
                <p>{{$t('table.Date')}}:{{new Date(item.Time).format('yyyy-MM-dd hh:mm')}}</p>
            </div>
            <div slot="footer" style=" display:flex;justify-content: flex-end;">
                <van-button type="info" size="small" @click="replyData(item)">{{$t('table.Replay')}}</van-button>
            </div>
        </van-panel>
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
            tableData: [],
        }
    },
    created() {
        customRequest({
            method: 'get',
            url: '/B2BMeet/GetFromList',
            params: {
                page: 1,
                size: 10,
                Title: this.$route.query.title || '',
                SupplyName: this.$route.query.supplyName || '',
                IsReplay: 0
            }
        }).then(result => {
            this.tableData = result.data
        })
    },
    methods: {
        replyData(item) {
            this.$router.push({
                name: 'replyInvitation',
                query: {
                    id: item.ID,
                    type: 'from',
                }
            })
        },
    },
}
</script>

<style scoped lang="scss">
.abroad {
    .abroadItems {
        margin-bottom: 0.2rem;
    }
    .info {
        padding: 0.1rem 0.25rem;
        font-size: 0.22rem;
    }
}
</style>
