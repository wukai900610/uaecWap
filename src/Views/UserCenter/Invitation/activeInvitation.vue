<template>
<Layout :title="$t('table.MyInvitations')">
    <div class="abroad">
        <van-panel class="abroadItems" :title="item.Subject" v-for="item in tableData" :key="item.ID">
            <div class="info">
                <van-tag plain :type="getStatus(item).style">{{$t(getStatus(item).status)}}</van-tag>
                <p>ID:{{item.ID}}</p>
                <p v-if="item.SupplyName">{{$t('table.CompanyName')}}:{{item.SupplyName}}</p>
                <p>{{$t('table.Date')}}:{{new Date(item.AddTime).format('yyyy-MM-dd hh:mm')}}</p>
                <p>{{$t('table.Replay')}}{{$t('table.Date')}}:<span v-if="item.ReplayTime.indexOf('1900')== -1">{{new Date(item.ReplayTime).format('yyyy-MM-dd hh:mm')}}</span></p>
            </div>
            <div slot="footer" style=" display:flex;justify-content: flex-end;">
                <van-button type="info" size="small" @click="view(item)">{{$t('table.See')}}</van-button>
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
            url: '/B2BMeet/GetToList',
            params: {
                page: 1,
                size: 10,
                Title: this.$route.query.title || '',
                SupplyName: this.$route.query.supplyName || '',
                IsReplay: this.$route.query.isReplay || ''
            }
        }).then(result => {
            this.tableData = result.data
        })
    },
    methods: {
        getStatus(data) {
            if (data.IsReplay == 0) {
                return {
                    status:'table.Unanswered',
                    style:'primary'
                }
            } else if (data.IsReplay == 1) {
                return {
                    status:'table.agree',
                    style:'success'
                }
            } else if (data.IsReplay == 9) {
                return {
                    status:'table.refuse',
                    style:'danger'
                }
            }
        },
        view(item) {
            this.$router.push({
                name: 'seeInvitation',
                query: {
                    id: item.ID,
                    type: 'to',
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
