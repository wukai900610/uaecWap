<template>
<Layout :title="($route.query.IsExhibitor==1?'参展申请信息':'观展申请信息')">
    <div class="exhibitor">
        <van-cell-group class="group">
            <van-field label="公司名称:" v-model="form.Company" placeholder="公司名称" :disabled="!edit" />
            <van-field label="公司英文名称:" v-model="form.CompanyEn" placeholder="公司英文名称" :disabled="!edit" />
        </van-cell-group>
        <van-cell-group class="group">
            <h5>公司地址</h5>
            <van-field label="中文地址:" v-model="form.Address" placeholder="中文地址" :disabled="!edit" />
            <van-field label="英文地址:" v-model="form.AddressEn" placeholder="英文地址" :disabled="!edit" />
            <van-field label="邮编:" v-model="form.PostCode" placeholder="邮编" :disabled="!edit" />
        </van-cell-group>
        <van-cell-group class="group">
            <h5>联系人</h5>
            <van-field label="姓:" v-model="form.ManFirstName" placeholder="姓" :disabled="!edit" />
            <van-field label="名:" v-model="form.ManLastName" placeholder="名" :disabled="!edit" />
            <van-field label="职位:" v-model="form.ManPosition" placeholder="职位" :disabled="!edit" />
        </van-cell-group>
        <van-cell-group class="group">
            <h5>手机号</h5>
            <van-field label="国际代码:" v-model="form.ManMobileCountryCode" placeholder="国际代码" :disabled="!edit" />
            <van-field label="手机号:" v-model="form.ManMobile" placeholder="手机号" :disabled="!edit" />
        </van-cell-group>
        <van-cell-group class="group">
            <h5>电话</h5>
            <van-field label="国际代码:" v-model="form.ManTelCountryCode" placeholder="国际代码" :disabled="!edit" />
            <van-field label="区号:" v-model="form.ManTelAreaCode" placeholder="区号" :disabled="!edit" />
            <van-field label="电话号:" v-model="form.ManTel" placeholder="电话号" :disabled="!edit" />
            <van-field label="分机号:" label-width="110" v-model="form.ManTelExt" placeholder="分机号" :disabled="!edit" />
        </van-cell-group>
        <van-cell-group class="group">
            <h5>传真</h5>
            <van-field label="国际代码:" v-model="form.ManFaxCountryCode" placeholder="国际代码" :disabled="!edit" />
            <van-field label="区号:" v-model="form.ManFaxAreaCode" placeholder="区号" :disabled="!edit" />
            <van-field label="传真号:" v-model="form.ManFax" placeholder="传真号" :disabled="!edit" />
        </van-cell-group>
        <van-cell-group class="group">
            <van-field label="邮箱:" v-model="form.ManEmail" placeholder="邮箱" :disabled="!edit" />
            <van-field label="网址:" v-model="form.WebSite" placeholder="网址" :disabled="!edit" />
            <van-field label="微信/QQ:" v-model="form.ManWechat" placeholder="微信/QQ" :disabled="!edit" />
        </van-cell-group>
        
        <van-checkbox-group v-model="form.ExhiInfoArr" :disabled="!edit">
            <van-cell-group class="group">
                <h5>展位区域</h5>
                <van-cell v-for="(item, index) in $store.state.app.skin.ExhiInfo" clickable :key="index" :title="'【'+item.label+'】:'+item.text" @click="toggle('checkboxes',index)">
                    <van-checkbox shape="square" :name="item.text" ref="checkboxes" slot="right-icon" />
                </van-cell>
            </van-cell-group>
        </van-checkbox-group>

        <van-radio-group v-model="form.BoothArea" :disabled="!edit" v-if="$route.query.IsExhibitor == 1">
            <h3 style="margin-left:.3rem;">展位预订</h3>
            <van-cell-group class="group">
                <h5>申请面积</h5>
                <van-cell title="9㎡(3mx3m) ￥41,500" clickable @click="radioClick('BoothArea','9')">
                    <van-radio slot="right-icon" name="9" />
                </van-cell>
                <van-cell title="12㎡(3mx4m) ￥55,334" clickable @click="radioClick('BoothArea','12')">
                    <van-radio slot="right-icon" name="12" />
                </van-cell>
                <van-cell title="15㎡(3mx5m) ￥69,167" clickable @click="radioClick('BoothArea','15')">
                    <van-radio slot="right-icon" name="15" />
                </van-cell>
                <van-cell title="其他" clickable @click="radioClick('BoothArea','0')">
                    <van-radio slot="right-icon" name="0" />
                </van-cell>
                <van-field v-if="form.BoothArea === '0'" v-model="form.BoothAreaOther" placeholder="请填写" />
            </van-cell-group>
        </van-radio-group>

        <van-radio-group v-model="form.StandardBoothCorner" :disabled="!edit" v-if="$route.query.IsExhibitor == 1">
            <van-cell-group class="group">
                <h5>摊位角</h5>
                <van-cell title="是" clickable @click="radioClick('StandardBoothCorner','1')">
                    <van-radio slot="right-icon" name="1" />
                </van-cell>
                <van-cell title="否 (角摊位另加10%)" clickable @click="radioClick('StandardBoothCorner','2')">
                    <van-radio slot="right-icon" name="2" />
                </van-cell>
                <p class="attention">请注意：角摊位不能完全保证。 多媒体宣传费: ￥2,500</p>
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
            this.form.IsExhibitor = this.$route.query.IsExhibitor

            return false;
            customRequest({
                method: this.$route.query.id ? 'put' : 'post',
                url: '/WebOrderExhi',
                data: this.form
            }).then(result => {
                if(this.$route.query.id){
                    // 编辑模式
                    this.edit = false
                }else{
                    // 新增模式
                    this.$store.dispatch('set_isExhibitor', this.$route.query.IsExhibitor).then(() => {
                        this.$router.back()
                    })
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
    .attention{
        padding: .2rem 0;
        text-align: center;
        font-size: .26rem;
    }
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
