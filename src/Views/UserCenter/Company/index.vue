<template>
<Layout :title="$t($route.query.id ? 'table.EditCompany' : 'table.addCompany')">
    <div class="company">
        <div v-if="lan=='zh'">请填写英文信息以供外商查看</div>
        <van-cell-group class="group">
            <van-field :label="$t('form.CompanyName')" label-width="110" v-model="form.Name" :disabled="!edit" />
            <van-field :label="$t('form.ContactPerson')" label-width="110" v-model="form.ManName" :disabled="!edit" />
        </van-cell-group>
        <van-cell-group class="group">
            <h5>{{$t('form.Mobilephone')}}</h5>
            <van-field :label="$t('form.CountryCode')" label-width="150" v-model="form.ManPhoneCountryCode" :disabled="!edit" />
            <van-field :label="$t('form.Mobilephone')" v-model="form.ManPhone" :disabled="!edit" />
        </van-cell-group>
        <van-cell-group class="group">
            <van-field :label="$t('form.WeChat')" v-model="form.ManWeChat" :disabled="!edit" />
            <van-field :label="$t('form.Facebook')" v-model="form.ManFacebook" :disabled="!edit" />
            <van-field :label="$t('form.Whatsapp')" v-model="form.ManWhatsapp" :disabled="!edit" />
            <van-field :label="$t('form.Website')" v-model="form.Website" :disabled="!edit" />
            <van-field :label="$t('form.CompanyDescription')" label-width="140" v-model="form.Description" :disabled="!edit" />
            <van-field :label="$t('form.Summary')" label-width="130" v-model="form.Summary" :disabled="!edit" />
        </van-cell-group>
        <van-row class="actions" type="flex" gutter="20">
            <van-col span="24" v-if="!edit">
                <van-button type="info" size="small" @click="onEdit(true)">{{$t('form.modify')}}</van-button>
            </van-col>
            <van-col span="12" v-if="edit">
                <van-button type="info" size="small" @click="onSubmit">{{$t('form.submit')}}</van-button>
            </van-col>
            <van-col span="12" v-if="edit">
                <van-button type="warning" size="small" @click="onReset">{{$t('form.reset')}}</van-button>
            </van-col>
        </van-row>
        <van-row class="actions" type="flex" gutter="20" v-if="$route.query.id">
            <van-col span="24" v-if="edit">
                <van-button type="primary" size="small" @click="onEdit(false)">{{$t('form.cancel')}}</van-button>
            </van-col>
        </van-row>
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
            lan: Util.getsessionStorage('lang'),
            edit:this.$route.query.id ? false : true,
            copyData:{},
            form: {
                ExhiInfoArr: [],
                NeedInvitation: '',
                BoothArea: '',
            },
        }
    },
    created() {
        if(this.$route.query.id){
            customRequest({
                method: 'get',
                url: '/B2BSupply/GetMyList',
                params: {
                    page: 1,
                    size: 1,
                    Title: this.$route.query.title || '',
                    id: this.$route.query.id || '',
                    IsCheck: this.$route.query.isCheck || ''
                }
            }).then(result => {
                if(result.data.length > 0){
                    this.copyData = result.data[0]
                    this.form = Util.getNewObj(this.copyData)
                }
            })
        }
    },
    methods: {
        toggle(key,index) {
            if(this.edit){
                this.$refs[key][index].toggle();
            }
        },
        radioClick(key,value){
            if(this.edit){
                this.form[key] = value
            }
        },
        onEdit(value){
            this.edit = value
        },
        onSubmit() {
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    this.form['IsExhibitor'] = this.$store.state.app.userInfo.isExhibitor
                    // this.form['Lan'] = 'en'
                    // this.form.ExhiInfo = this.form.ExhiInfoArr.join(',')
                }
            });
        },
        onReset() {
            this.form = Util.getNewObj(this.copyData)
        },
    }
}
</script>

<style scoped lang="scss">
.company {
    overflow: hidden;
    .group {
        margin-bottom: 0.2rem;
        padding-top: 0.2rem;
        h5 {
            margin: 0 0 0 0.3rem;
        }
    }
    .actions {
        margin-bottom: .2rem;
        padding: 0 0.2rem;

        .van-button {
            width: 100%;
        }
    }
}
</style>
