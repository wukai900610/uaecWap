<template>
<Layout :title="$t('table.AllOffer')">
    <div class="abroad">
        <van-panel :title="item.Name" :desc="item.Description" v-for="item in tableData" :key="item.ID">
            <div class="info">
                ID:{{item.ID}}
                <br />
                {{$t('table.OfferCategory')}}:{{item.CategoryName}}
                <br />
                {{new Date(item.AddTime).format('yyyy-MM-dd hh:mm')}}
            </div>
            <div slot="footer">
                <van-button type="info" size="small" @click="edit(item)">{{$t('form.edit')}}</van-button>
                <van-button type="danger" size="small" @click="del(item)">{{$t('form.delete')}}</van-button>
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
            url: '/B2BOffer/GetMyList',
            params: {
                page: 1,
                size: 10,
                Title: this.$route.query.title || '',
                ID: this.$route.query.id || '',
                IsCheck: this.$route.query.isCheck || '',
                CatelogID: this.$route.query.catelogID || '',
                Name: this.$route.query.name || '',
                Kind: this.$route.query.kind || ''
            }
        }).then(result => {
            this.tableData = result.data
        })
    },
    methods: {
        edit(item) {
            this.$router.push({
                name: 'offers',
                query: {
                    id: item.ID
                }
            })
        },
        del(data) {
            this.$dialog.confirm({
                message: this.$t('prompt.delete')
            }).then(()=>{
                customRequest({
                    method: 'delete',
                    url: '/B2BOffer/Delete',
                    params:{
                        id: data.ID
                    }
                }).then(result => {
                    this.tableData.map((item,index)=>{
                        if(item.ID == data.ID){
                            this.tableData.splice(index,1)
                        }
                    })
                })
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
