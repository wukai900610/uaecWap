<template>
<Layout :title="$t('table.SentBox')">
    <div class="abroad">
        <van-panel :title="item.Subject" v-for="item in tableData" :key="item.ID">
            <div class="info">
                <van-tag plain :type="getStatus(item).style">{{$t(getStatus(item).status)}}</van-tag>
                ID:{{item.ID}}
                <br />
                {{$t('table.CompanyName')}}:{{item.SupplyName}}
                <br />
                {{new Date(item.AddTime).format('yyyy-MM-dd hh:mm')}}
            </div>
            <div slot="footer" style=" display:flex;justify-content: flex-end;">
                <van-button v-if="item.IsRead != 2" type="info" size="small" @click="view(item)">{{$t('table.See')}}</van-button>
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
            url: '/B2BMessage/GetToList',
            params: {
                page: 1,
                size: 10,
                Title: this.$route.query.title || '',
                SupplyName: this.$route.query.supplyName || '',
                IsRead: this.$route.query.isRead || ''
            }
        }).then(result => {
            this.tableData = result.data
        })
    },
    methods: {
        getStatus(data) {
            if (data.IsRead == 1) {
                return {
                    status:'table.Read',
                    style:'primary'
                }
            } else if (data.IsRead == 0) {
                return {
                    status:'table.UnRead',
                    style:'danger'
                }
            } else if (data.IsRead == 2) {
                return {
                    status:'table.Replied',
                    style:'success'
                }
            }
        },
        view(item) {
            this.$router.push({
                name: 'contactLetter',
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
    .info {
        padding: 0.1rem 0.25rem;
        font-size: 0.22rem;
    }
}
</style>
