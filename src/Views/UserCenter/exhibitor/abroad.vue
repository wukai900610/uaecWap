<template>
<Layout :title="lan == 'en' ? 'Self-run Exhibition Projects' : '联亚国际自办展报名'">
    <div class="abroad">
        <van-panel :title="item.ExpoName" :desc="$t(item.IsExhibitor == '1' ? 'table.Exhibitors' : 'table.Visitors')" v-for="item in tableData.from" :key="item.ID">
            <div class="info">
                {{$t('table.CompanyName')}}:{{item.Company}}
            </div>
            <div slot="footer">
                <van-button type="info" size="small" @click="edit(item)">{{$t('form.edit')}}</van-button>
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
            lan: Util.getsessionStorage('lang'),
            // isNiCode: Util.isNiCode(),
        }
    },
    created() {
        customRequest({
            method: 'get',
            url: '/WebProduct/GetMyList',
        }).then(result => {
            this.tableData = result.data
        })
    },
    methods: {
        edit(item) {
            this.$router.push({
                name:'exhibitor',
                query:{
                    id:item.ID
                }
            })
            // if (item.Lan == 'en') {
            //     this.$router.push('/User/putEnExhibitors?title=' + item.ExpoName + '&code=' + item.Code + '&isExhibitor=' + item.IsExhibitor + '&id=' + item.ID)
            // } else {
            //     if (item.IsExhibitor == 0) {
            //         this.$router.push('/User/VisitorEdit?code=' + item.Code + '&id=' + item.ID)
            //     } else {
            //         this.$router.push('/User/ExhibitorEdit?code=' + item.Code + '&id=' + item.ID)
            //     }
            // }
        },
    },
}
</script>

<style scoped lang="scss">
.abroad {
    .info{
        padding: .1rem .25rem;
        font-size: .22rem;
    }
}
</style>
