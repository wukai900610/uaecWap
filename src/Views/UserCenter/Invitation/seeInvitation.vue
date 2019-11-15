<template>
<Layout :title="$t($route.query.type == 'from' ? 'table.MeetSupplier' : 'table.MeetSupplier2')">
    <div class="abroad">
        <van-panel class="letter" :title="$t('table.Subject') + ':' + viewData.Subject">
            <div class="info">
                <van-tag plain :type="getStatus(viewData).style">{{$t(getStatus(viewData).status)}}</van-tag>
                <p>{{$t('table.CompanyName')}}:{{viewData.SupplyName}}</p>
                <p>{{$t('table.MeetingTime')}}: {{viewData.Time | dateTime}}</p>
                <p>{{$t('table.MeetingPlace')}}: {{viewData.Place}}</p>
                <p>{{$t('table.Remark')}}: {{viewData.Remark}}</p>
                <p>{{$t('table.CompanyRemark')}}: {{viewData.ReRemark}}</p>
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
            viewData: {}
        }
    },
    created() {
        customRequest({
            method: 'get',
            url: '/B2BMeet/Get',
            params: {
                id: this.$route.query.id,
                type: this.$route.query.type
            }
        }).then(result => {
            if(result.data.length > 0){
                this.viewData = result.data[0]
            }
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
    }
}
</script>

<style scoped lang="scss">
.abroad {
    .letter {
        margin-bottom: 0.4rem;
    }
    .info {
        padding: 0.1rem 0.25rem;
        font-size: 0.22rem;
    }
}
</style>
