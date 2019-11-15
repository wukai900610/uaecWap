<template>
<Layout :title="($store.state.app.userInfo.isExhibitor==1?'参展申请':'观展申请')">
    <div class="exhibitor">
        <van-cell-group class="group">
            <van-field label="Company:" v-model="form.Company" placeholder="Company" :disabled="!edit" />
            <van-field label="First/Given Name:" label-width="120" v-model="form.ManFirstName" placeholder="First/Given Name" :disabled="!edit" />
            <van-field label="Last Name/Surname:" label-width="140" v-model="form.ManLastName" placeholder="Last Name/Surname" :disabled="!edit" />
            <van-field label="Job Title:" v-model="form.ManPosition" placeholder="Job Title" :disabled="!edit" />
        </van-cell-group>
        <van-cell-group class="group">
            <h5>Address</h5>
            <van-field label="Address:" v-model="form.AddressEn" placeholder="Address" :disabled="!edit" />
            <van-field label="City:" v-model="form.City" placeholder="City" :disabled="!edit" />
            <van-field label="Province:" v-model="form.Province" placeholder="Province" :disabled="!edit" />
            <van-field label="Country:" v-model="form.Country" placeholder="Country" :disabled="!edit" />
            <van-field label="Postal Code:" v-model="form.PostCode" placeholder="Postal Code" :disabled="!edit" />
        </van-cell-group>
        <van-cell-group class="group">
            <h5>Mobile</h5>
            <van-field label="Country Code:" v-model="form.ManMobileCountryCode" placeholder="Country Code" :disabled="!edit" />
            <van-field label="Area Code:" v-model="form.ManTelAreaCode" placeholder="Area Code" :disabled="!edit" />
            <van-field label="Mobile:" v-model="form.ManMobile" placeholder="Mobile" :disabled="!edit" />
        </van-cell-group>
        <van-cell-group class="group">
            <h5>Telephone</h5>
            <van-field label="Country Code:" v-model="form.ManTelCountryCode" placeholder="Country Code" :disabled="!edit" />
            <van-field label="Area Code:" v-model="form.ManTelAreaCode" placeholder="Area Code" :disabled="!edit" />
            <van-field label="number:" v-model="form.ManTel" placeholder="number" :disabled="!edit" />
            <van-field label="Extension Code:" label-width="110" v-model="form.ManTelExt" placeholder="Extension Code" :disabled="!edit" />
        </van-cell-group>
        <van-cell-group class="group">
            <h5>Fax</h5>
            <van-field label="Country Code:" v-model="form.ManFaxCountryCode" placeholder="Country Code" :disabled="!edit" />
            <van-field label="Area Code:" v-model="form.ManFaxAreaCode" placeholder="Area Code" :disabled="!edit" />
            <van-field label="Fax Code:" v-model="form.ManFax" placeholder="Fax Code" :disabled="!edit" />
        </van-cell-group>
        <van-cell-group class="group">
            <van-field label="Email:" v-model="form.ManEmail" placeholder="Email" :disabled="!edit" />
            <van-field label="Website:" v-model="form.WebSite" placeholder="WebSite" :disabled="!edit" />
        </van-cell-group>
        <van-radio-group v-model="form.NeedInvitation" :disabled="!edit">
            <van-cell-group class="group">
                <h5>Invitation letter</h5>
                <van-cell title="Yes" clickable @click="radioClick('NeedInvitation','1')">
                    <van-radio slot="right-icon" name="1" />
                </van-cell>
                <van-cell title="No" clickable @click="radioClick('NeedInvitation','2')">
                    <van-radio slot="right-icon" name="2" />
                </van-cell>
            </van-cell-group>
        </van-radio-group>
        <van-checkbox-group v-model="form.ExhiInfoArr" :disabled="!edit">
            <van-cell-group class="group">
                <h5>Please Choose Your Preferred Products</h5>
                <van-cell v-for="(item, index) in $store.state.app.skin.ExhiInfo" clickable :key="item" :title="item" @click="toggle('checkboxes',index)">
                    <van-checkbox shape="square" :name="item" ref="checkboxes" slot="right-icon" />
                </van-cell>
            </van-cell-group>
        </van-checkbox-group>
        <van-radio-group v-model="form.BoothArea" v-if="$store.state.app.userInfo.isExhibitor == 1" :disabled="!edit">
            <van-cell-group class="group">
                <h5>You Would Like to Reserve</h5>
                <van-cell title="Shell Scheme Package" clickable @click="radioClick('BoothArea','1')">
                    <van-radio slot="right-icon" name="1" />
                </van-cell>
                <van-cell title="Raw Space" clickable @click="radioClick('BoothArea','2')">
                    <van-radio slot="right-icon" name="2" />
                </van-cell>
                <van-field label="Raw Space:" v-if="form.BoothArea == 2" v-model="form.LightArea" placeholder="StandardBooth" :disabled="!edit">
                    <span slot="button">sqm</span>
                </van-field>
            </van-cell-group>
        </van-radio-group>
        <van-row class="actions" type="flex" gutter="20">
            <van-col span="24" v-if="!edit">
                <van-button type="info" size="small" @click="onEdit(true)">{{$t('form.modify')}}</van-button>
            </van-col>
            <van-col span="12" v-if="edit">
                <van-button type="info" size="small" @click="onSubmit">{{$t('form.submit')}}</van-button>
            </van-col>
            <van-col span="12" v-if="edit">
                <van-button type="warning" size="small" @click="onInit">{{$t('form.reset')}}</van-button>
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
                url: '/WebOrderExhi/Get',
                params: {
                    id: this.$route.query.id
                }
            }).then(result => {
                result.data.Order.ExhiInfoArr = result.data.Order.ExhiInfo.split(',')
                result.data.Order.LightArea = result.data.Order.LightArea.toString()
                this.copyData = result.data.Order
                this.onInit()
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
            this.form.ExhiInfo = this.form.ExhiInfoArr.toString()

            let method
            if(this.$route.query.id){
                method = 'put'
            }else{
                method = 'post'
                this.form.IsExhibitor = this.$route.query.isExhibitor
            }
            customRequest({
                method: method,
                url: '/WebOrderExhi',
                data: this.form
            }).then(result => {
                // 访客才弹出信息
                if(this.$route.query.id){
                    // 编辑模式
                    this.edit = false
                }else{
                    // 新增模式
                    if (this.$route.query.isExhibitor == 0) {
                        this.$dialog.alert({
                            title: 'Registration successful!',
                            content:'This is your registration code ' + this.$store.state.app.userInfo.ID +
                                '.<br/>Please take a photo of this page and keep it,then offer this code to employees on-site to redeem a visitor badge on the entrance of Hall 1.'
                        }).then(() => {
                            this.$store.dispatch('set_isExhibitor', this.$route.query.isExhibitor).then(() => {
                                this.$router.back()
                            })
                        });
                    } else if (this.$route.query.isExhibitor == 1) {
                        this.$store.dispatch('set_isExhibitor', this.$route.query.isExhibitor).then(() => {
                            this.$router.back()
                        })
                    }
                }
            })
        },
        onInit() {
            this.form = Util.getNewObj(this.copyData)
        },
    }
}
</script>

<style scoped lang="scss">
.exhibitor {
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
