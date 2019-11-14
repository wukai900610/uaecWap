<template>
<Layout :title="$t('table.SentBox')">
    <div class="abroad">
        <van-panel class="letter" :title="'['+(index+1)+']'+ $t('table.Subject') + ':' + item.Subject" v-for="(item,index) in viewData" :key="item.ID">
            <div class="info">
                <p>{{$t('table.FormR')}}:{{item.SupplyNameFrom}}</p>
                <!-- <p>{{$t('table.ToR')}}:{{item.SupplyNameTo}}</p> -->
                <p>{{$t('table.readTime')}}: {{item.ReadTime | dateTime}}</p>
                <p>{{$t('table.Date')}}: {{item.AddTime | dateTime}}</p>
                <van-divider />
                <p>{{$t('table.Content')}}: {{item.Message | dateTime}}</p>
            </div>
        </van-panel>
        <van-cell-group>
            <van-field v-model="form.Subject" :label="$t('table.Subject')" :placeholder="$t('table.Subject')" />
            <van-field v-model="form.Message" rows="3" autosize :label="$t('table.Content')" type="textarea" maxlength="50" :placeholder="$t('table.Content')" show-word-limit />

            <van-row class="actions" type="flex" gutter="20">
                <van-col span="24">
                    <van-button class="largeCustomBtn" type="info" size="large" @click="onSubmit()">{{$t('form.Submit')}}</van-button>
                </van-col>
            </van-row>
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
            form: {
                Subject: '',
                Message: '',
            },
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

            // 标记消息已读
            customRequest({
                method: 'put',
                url: '/B2BMessage',
                data: {
                    id: this.$route.query.id,
                    IsRead: 1
                }
            })
        })
    },
    methods: {
        onSubmit(){
            this.form.ID = this.$route.query.id
            this.form.UserTo = this.$route.query.To
            customRequest({
                method: 'post',
                url: '/B2BMessage',
                data: this.form
            }).then(result => {
                // 重置消息未读
                customRequest({
                    method: 'put',
                    url: '/B2BMessage',
                    data: {
                        id: this.$route.query.id,
                        IsRead: 2
                    }
                }).then(result => {
                    this.$router.back()
                })
            })
        }
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
