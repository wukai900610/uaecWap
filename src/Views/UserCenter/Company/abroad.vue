<template>
<Layout :title="$t('table.AllCompany')">
    <div class="abroad">
        <van-panel :title="lan == 'zh' ? item.Title : item.TitleEn" :desc="item.Description" :status="getStatus(item)" v-for="item in tableData" :key="item.ID">
            <div class="info">
                ID:{{item.ID}}
                <br />
                {{$t('table.CompanyName')}}:{{item.Name}}
            </div>
            <div slot="footer">
                <van-button type="warning" size="small" @click="edit(item)">{{$t('form.edit')}}</van-button>
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
            lan: Util.getsessionStorage('lang'),
            isNiCode: Util.isNiCode(),
            form: {
                username: '',
                password: '',
            }
        }
    },
    created() {
        customRequest({
            method: 'get',
            url: '/B2BSupply/GetMyList',
            params: {
                page: 1,
                size: 10,
                Title: this.$route.query.title || '',
                ID: this.$route.query.id || '',
                IsCheck: this.$route.query.isCheck || ''
            }
        }).then(result => {
            this.tableData = result.data
        })
    },
    methods: {
        getStatus(data) {
            if (data.IsCheck == 1) {
                return this.$t('table.pass')
            } else if (data.IsCheck == 0) {
                return this.$t('table.confirmed')
            } else if (data.IsCheck == 7) {
                return this.$t('table.Notpass')
            }
        },
        edit(item) {
            this.$router.push({
                name: 'company',
                query: {
                    id: item.ID
                }
            })
        },
        del(data) {
            this.$dialog.confirm({
                message: this.$t('prompt.deleteTips')
            }).then(()=>{
                customRequest({
                    method: 'delete',
                    url: '/B2BSupply/Delete',
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
