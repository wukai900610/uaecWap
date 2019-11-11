<template>
<Layout :title="(this.$route.query.isExhibitor==1?'Exhibitors':'Visitors') + ' Application'">
    <div class="exhibitors">
        <van-cell-group class="group">
            <van-field label="Company:" v-model="form.Company" placeholder="Company" />
            <van-field label="First/Given Name:" label-width="120" v-model="form.ManFirstName" placeholder="First/Given Name" />
            <van-field label="Last Name/Surname:" label-width="140" v-model="form.ManLastName" placeholder="Last Name/Surname" />
            <van-field label="Job Title:" v-model="form.ManPosition" placeholder="Job Title" />
        </van-cell-group>
        <van-cell-group class="group">
            <h5>Address</h5>
            <van-field label="Address:" v-model="form.AddressEn" placeholder="Address" />
            <van-field label="City:" v-model="form.City" placeholder="City" />
            <van-field label="Province:" v-model="form.Province" placeholder="Province" />
            <van-field label="Country:" v-model="form.Country" placeholder="Country" />
            <van-field label="Postal Code:" v-model="form.PostCode" placeholder="Postal Code" />
        </van-cell-group>
        <van-cell-group class="group">
            <h5>Mobile</h5>
            <van-field label="Country Code:" v-model="form.ManMobileCountryCode" placeholder="Country Code" />
            <van-field label="Area Code:" v-model="form.ManTelAreaCode" placeholder="Area Code" />
            <van-field label="Mobile:" v-model="form.ManMobile" placeholder="Mobile" />
        </van-cell-group>
        <van-cell-group class="group">
            <h5>Telephone</h5>
            <van-field label="Country Code:" v-model="form.ManTelCountryCode" placeholder="Country Code" />
            <van-field label="Area Code:" v-model="form.ManTelAreaCode" placeholder="Area Code" />
            <van-field label="number:" v-model="form.ManTel" placeholder="number" />
            <van-field label="Extension Code:" label-width="110" v-model="form.ManTelExt" placeholder="Extension Code" />
        </van-cell-group>
        <van-cell-group class="group">
            <h5>Fax</h5>
            <van-field label="Country Code:" v-model="form.ManFaxCountryCode" placeholder="Country Code" />
            <van-field label="Area Code:" v-model="form.ManFaxAreaCode" placeholder="Area Code" />
            <van-field label="Fax Code:" v-model="form.ManFax" placeholder="Fax Code" />
        </van-cell-group>
        <van-cell-group class="group">
            <van-field label="Email:" v-model="form.ManEmail" placeholder="Email" />
            <van-field label="Website:" v-model="form.WebSite" placeholder="WebSite" />
        </van-cell-group>
        <van-radio-group v-model="form.NeedInvitation">
            <van-cell-group class="group">
                <h5>Invitation letter</h5>
                <van-cell title="Yes" clickable @click="form.NeedInvitation = '1'">
                    <van-radio slot="right-icon" name="1" />
                </van-cell>
                <van-cell title="No" clickable @click="form.NeedInvitation = '2'">
                    <van-radio slot="right-icon" name="2" />
                </van-cell>
            </van-cell-group>
        </van-radio-group>
        <van-checkbox-group v-model="form.ExhiInfoArr">
            <van-cell-group class="group">
                <h5>Please Choose Your Preferred Products</h5>
                <van-cell v-for="(item, index) in $store.state.app.skin.ExhiInfo" clickable :key="item" :title="item" @click="toggle(index)">
                    <van-checkbox shape="square" :name="item" ref="checkboxes" slot="right-icon" />
                </van-cell>
            </van-cell-group>
        </van-checkbox-group>
        <van-radio-group v-model="form.BoothArea" v-if="$store.state.app.userInfo.isExhibitor == 1">
            <van-cell-group class="group">
                <h5>You Would Like to Reserve</h5>
                <van-cell title="Shell Scheme Package" clickable @click="form.BoothArea = '1'">
                    <van-radio slot="right-icon" name="1" />
                </van-cell>
                <van-cell title="Raw Space" clickable @click="form.BoothArea = '2'">
                    <van-radio slot="right-icon" name="2" />
                </van-cell>
                <van-field label="Raw Space:" v-if="form.BoothArea == 2" v-model="form.LightArea" placeholder="StandardBooth">
                    <span slot="button">sqm</span>
                </van-field>
            </van-cell-group>
        </van-radio-group>
        <van-row class="actions" type="flex" gutter="20">
            <van-col span="12">
                <van-button type="info" size="small" @click="onSubmit">{{$t('form.submit')}}</van-button>
            </van-col>
            <van-col span="12">
                <van-button type="warning" size="small" @click="onReset">{{$t('form.reset')}}</van-button>
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
            form: {
                ExhiInfoArr: [],
                NeedInvitation: '',
                BoothArea: '',
            },
        }
    },
    created() {},
    methods: {
        toggle(index) {
            this.$refs.checkboxes[index].toggle();
        },
        onSubmit() {
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    this.form['IsExhibitor'] = this.$route.query.isExhibitor
                    this.form['Lan'] = 'en'
                    this.form['code'] = this.$route.query.code
                    this.form.ExhiInfo = this.form.ExhiInfoArr.join(',')

                    customRequest({
                        method: 'post',
                        url: '/WebOrderExhi',
                        data: this.form
                    }).then(result => {
                        // 访客才弹出信息
                        if (this.$route.query.isExhibitor == 0) {
                            this.$alert('This is your registration code ' + this.$store.state.app.userInfo.ID +
                                '.<br/>Please take a photo of this page and keep it,then offer this code to employees on-site to redeem a visitor badge on the entrance of Hall 1.', 'Registration successful!', {
                                    dangerouslyUseHTMLString: true,
                                    callback: action => {
                                        this.$store.dispatch('set_isExhibitor', this.$route.query.isExhibitor).then(() => {
                                            this.$router.push({
                                                name: 'abroad'
                                            })
                                        })
                                    }
                                });
                        } else if (this.$route.query.isExhibitor == 1) {
                            this.$store.dispatch('set_isExhibitor', this.$route.query.isExhibitor).then(() => {
                                this.$router.push({
                                    name: 'abroad'
                                })
                            })
                        }
                    })
                }
            });
        },
        onReset() {},
    }
}
</script>

<style scoped lang="scss">
.exhibitors {
    padding-bottom: 0.2rem;
    .group {
        margin-bottom: 0.2rem;
        padding-top: 0.2rem;
        h5 {
            margin: 0 0 0 0.3rem;
        }
    }
    .actions {
        padding: 0 0.2rem;

        .van-button {
            width: 100%;
        }
    }
}
</style>
