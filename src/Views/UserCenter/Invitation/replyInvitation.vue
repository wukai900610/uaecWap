<template>
<Layout :title="$t('table.Replay')">
    <div class="abroad">
        <van-panel :title="$t('table.Subject') + ':' + viewData.Subject">
            <div class="info">
                <p>{{$t('table.CompanyName')}}:{{viewData.SupplyName}}</p>
                <p>{{$t('table.MeetingTime')}}: {{new Date(viewData.Time).format('yyyy-MM-dd hh:mm')}}</p>
                <p>{{$t('table.MeetingPlace')}}: {{viewData.Place}}</p>
                <p>{{$t('table.Remark')}}: {{viewData.Remark}}</p>
            </div>
        </van-panel>
        <van-cell-group>
            <van-field v-model="viewData.ReRemark" rows="3" autosize :label="$t('table.Replay')" type="textarea" maxlength="50" :placeholder="$t('table.Replay')" show-word-limit />

            <div class="mybtns">
                <van-button style="margin-right:.2rem;" type="info" size="small" @click="onSubmit(1)">{{$t('table.agree')}}</van-button>
                <van-button size="small" @click="onSubmit(9)">{{$t('table.refuse')}}</van-button>
            </div>
        </van-cell-group>
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
            viewData: {
                ReRemark: '',
            },
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
            if (result.data.length > 0) {
                this.viewData = result.data[0]
            }
        })
    },
    methods: {
        onSubmit(flag) {
            this.viewData.IsReplay = flag
            customRequest({
                method: 'put',
                url: '/B2BMeet',
                data: this.viewData
            }).then(result => {
                this.$router.back()
            })
        }
    }
}
</script>

<style scoped lang="scss">
.abroad {
    .info {
        padding: 0.1rem 0.25rem;
        font-size: 0.22rem;
    }
    .mybtns {
        display: flex;
        justify-content: flex-end;
        padding: .2rem;
    }
}
</style>
