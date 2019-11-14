<template>
<Layout :title="$t('table.SentBox')">
    <div class="abroad">
        <van-panel class="abroadItems" :title="'['+(viewData.length-index)+']'+item.Subject" v-for="(item,index) in viewData" :key="item.ID">
            <div class="info">
                {{$t('table.FromCompany')}}:{{item.SupplyNameFrom}}
                <br />
                {{new Date(item.AddTime).format('yyyy-MM-dd hh:mm')}}
                <p>{{$t('table.From')}}:{{item.ManFirstNameFrom+item.ManLastNameFrom}}</p>
                <p v-html="$t('table.Content')+':'+item.Message">Dear Sir,</p>
                <van-divider />
                <p>{{$t('table.ToCompany')+':'+item.SupplyNameTo}}</p>
                <p>{{$t('table.ToUser')}}:{{item.ManFirstNameTo+item.ManLastNameTo}}</p>
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
            viewData: []
        }
    },
    created() {
        customRequest({
            method: 'get',
            url: '/B2BMessage/Get',
            params: {
                id: this.$route.query.id,
                type: this.$route.query.type
            }
        }).then(result => {
            this.viewData = result.data
        })
    },
    methods: {
    }
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
