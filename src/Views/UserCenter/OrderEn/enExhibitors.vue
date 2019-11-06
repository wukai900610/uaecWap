<template>
<div class="Exhibitors">
    <h2>
        {{this.$route.query.isExhibitor==1?'Exhibitors':'Visitors'}} Application
    </h2>
    <div class="Exhibitors-view">
        <el-form ref="form" :model="form" :rules="rules">
            <div class="form-item">
                <div class="form-item-view">
                    <div class="form-item-view-flex">
                        <div class="form-item-view-flex-left">Company</div>
                        <div class="form-item-view-flex-right">
                            <el-form-item label="Company：" prop="Company">
                                <el-input v-model="form.Company" placeholder="Company"></el-input>
                            </el-form-item>
                            <el-form-item label="Country：" prop="Country">
                                <el-input v-model="form.Country" placeholder="Country"></el-input>
                            </el-form-item>
                            <el-form-item label="Address：" prop="AddressEn">
                                <el-input v-model="form.AddressEn" placeholder="Address"></el-input>
                                <el-input v-model="form.City" placeholder="City"></el-input>
                                <el-input v-model="form.Province" placeholder="Province"></el-input>
                            </el-form-item>
                            <el-form-item label="Postal Code：" prop="PostCode">
                                <el-input v-model="form.PostCode" placeholder="Postal Code"></el-input>
                            </el-form-item>
                            <el-form-item label="Contact：" prop="ManName">
                                <el-input v-model="form.ManName" placeholder="Contact"></el-input>
                            </el-form-item>
                            <el-form-item label="Job Title：" prop="ManPosition">
                                <el-input v-model="form.ManPosition" placeholder="Job Title"></el-input>
                            </el-form-item>
                            <el-form-item label="Tel：" prop="ManTel">
                                <el-input v-model="form.ManTel" placeholder="Tel" type="number"></el-input>
                            </el-form-item>
                            <el-form-item label="Fax：" prop="ManFax">
                                <el-input v-model="form.ManFax" placeholder="Fax"></el-input>
                            </el-form-item>
                            <el-form-item label="Email：" prop="ManEmail">
                                <el-input v-model="form.ManEmail" placeholder="Email"></el-input>
                            </el-form-item>
                            <el-form-item label="Website：" prop="WebSite">
                                <el-input v-model="form.WebSite" placeholder="Website"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="form-item-view-flex">
                        <div class="form-item-view-flex-left">Invitation letter</div>
                        <div class="form-item-view-flex-right">
                            <el-form-item prop="NeedInvitation">
                                <el-radio-group v-model="form.NeedInvitation">
                                    <el-radio label="1" name="ManPassport">Yes</el-radio>
                                    <el-radio label="0" name="ManPassport">No</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="form-item-view-flex">
                        <div class="form-item-view-flex-left">Please Choose Your Preferred Products</div>
                        <div class="form-item-view-flex-right">
                            <el-form-item prop="ExhiInfoArr" v-if="$route.query.code == 'cc'">
                                <el-checkbox-group v-model="form.ExhiInfoArr">
                                    <el-checkbox label="Textile&Clothing Machine" name="type"></el-checkbox>
                                    <el-checkbox label="Others" name="type"></el-checkbox>
                                    <el-checkbox label="Luggage&Shoes " name="type"></el-checkbox>
                                    <el-checkbox label="Yarns " name="type"></el-checkbox>
                                    <el-checkbox label="Trims & Accessories" name="type"></el-checkbox>
                                    <el-checkbox label="Fabrics" name="type"></el-checkbox>
                                    <el-checkbox label="Textile Chemicals " name="type"></el-checkbox>
                                    <el-checkbox label="Home Textile " name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item prop="ExhiInfoArr" v-if="$route.query.code == 'hc' || $route.query.code == 'hn'">
                                <el-checkbox-group v-model="form.ExhiInfoArr">
                                    <el-checkbox label="Housewares Products" name="type"></el-checkbox>
                                    <el-checkbox label="Home Accessories" name="type"></el-checkbox>
                                    <el-checkbox label="Home Textile" name="type"></el-checkbox>
                                    <el-checkbox label="Gardening & Outdoor" name="type"></el-checkbox>
                                    <el-checkbox label="Gifts&Office Supplies" name="type"></el-checkbox>
                                    <el-checkbox label="Festivals & Parties " name="type"></el-checkbox>
                                    <el-checkbox label="Consumer Electronics " name="type"></el-checkbox>
                                    <el-checkbox label="Sports Beauty " name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item prop="ExhiInfoArr" v-if="$route.query.code == 'an'">
                                <el-checkbox-group v-model="form.ExhiInfoArr">
                                    <el-checkbox label="Components" name="type"></el-checkbox>
                                    <el-checkbox label="Vehicle Electronics" name="type"></el-checkbox>
                                    <el-checkbox label="Accessories Modification" name="type"></el-checkbox>
                                    <el-checkbox label="Repair Equipment" name="type"></el-checkbox>
                                    <el-checkbox label="Vehicle Maintenance" name="type"></el-checkbox>
                                    <el-checkbox label="Others " name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item prop="ExhiInfoArr" v-if="$route.query.code == 'nt'">
                                <el-checkbox-group v-model="form.ExhiInfoArr">
                                    <el-checkbox label="Apparels & Accessories" name="type"></el-checkbox>
                                    <el-checkbox label="Textile Chemicals" name="type"></el-checkbox>
                                    <el-checkbox label="Footwear & Bags" name="type"></el-checkbox>
                                    <el-checkbox label="Yarns" name="type"></el-checkbox>
                                    <el-checkbox label="Trims & Accessories" name="type"></el-checkbox>
                                    <el-checkbox label="Fabrics " name="type"></el-checkbox>
                                    <el-checkbox label="Textile Machinery " name="type"></el-checkbox>
                                    <el-checkbox label="Home Textile" name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="form-item-view-flex" v-if="$route.query.isExhibitor == 1">
                        <div class="form-item-view-flex-left">You Would Like to Reserve</div>
                        <div class="form-item-view-flex-right">
                            <el-form-item prop="BoothArea">
                                <el-radio-group v-model="form.BoothArea">
                                    <el-radio label="Shell Scheme Package" name="Nature"></el-radio>
                                    <el-radio label="Raw Space" name="Nature"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="form-item-view-flex" v-if="$route.query.isExhibitor == 1">
                        <div class="form-item-view-flex-left">Raw Space</div>
                        <div class="form-item-view-flex-right">
                            <el-form-item prop="LightArea">
                                <el-input v-model="form.LightArea" size="mini" placeholder="StandardBooth" type="number">
                                    <span slot="append">sqm</span>
                                </el-input>
                            </el-form-item>
                        </div>
                    </div>
                </div>
            </div>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">{{$t('form.Submit')}}</el-button>
                <el-button @click="back">{{$t('form.cancel')}}</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
import {
    postWebOrderExhi
} from "@/assets/api/api";

export default {
    name: "hnExhibitors",
    data() {
        let rule = [{
            required: true,
            msg:'required!',
            trigger: 'change'
        }]
        return {
            form: {
                ExhiInfoArr: []
            },
            rules: {
                Company: rule,
                Country: rule,
                AddressEn: rule,
                PostCode: rule,
                ManName:rule,
                ManPosition: rule,
                ManTel:rule,
                ManFax: rule,
                ManEmail: rule,
                WebSite:rule,
                NeedInvitation: rule,
                ExhiInfoArr: [{
                    type: 'array',
                    required: true,
                    msg:'required!',
                    trigger: 'change'
                }],
                BoothArea: rule,
                LightArea: {
                    required: true,
                    msg:'required!',
                    trigger: 'change'
                }
            },
            code: ''
        }
    },
    created() {},
    methods: {
        onSubmit() {
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    this.form['IsExhibitor'] = this.$route.query.isExhibitor
                    this.form['Lan'] = 'en'
                    this.form['code'] = this.$route.query.code
                    this.form.ExhiInfo = this.form.ExhiInfoArr.join(',')
                    postWebOrderExhi(this.form)
                        .then(() => {
                            this.$store.dispatch('set_isExhibitor', this.$route.query.isExhibitor).then(() => {
                                this.$router.push({
                                    name: 'abroad'
                                })
                            })
                        })
                }
            });
        },
        back() {
            this.$router.back()
        }
    }
}
</script>

<style scoped lang="scss">
.Exhibitors {
    h2 {
        text-align: center;
        background: #fff;
        margin: 5px;
        width: 100%;
        line-height: 60px;
    }
    .Exhibitors-view {
        width: 100%;
        margin: 5px;
        background: #fff;
        overflow: hidden;
        .el-form {
            margin: 20px auto;
            padding: 20px;
        }
    }
    .form-item {
        width: 100%;
        .form-item-head {
            height: 100px;
            font-size: 30px;
            font-weight: 600;
        }
        .form-item-view {
            width: 800px;
            margin: 0 auto;
            overflow: hidden;
            .form-item-view-flex {
                display: flex;
                .form-item-view-flex-left {
                    width: 150px;
                    line-height: 40px;
                    font-size: 20px;
                }
                .form-item-view-flex-right {
                    width: 500px;
                }
            }
        }
    }
}
</style>
<style lang="scss">
.Exhibitors {
    .Exhibitors-view {
        .el-form-item__label {
            width: 150px !important;
        }

        .el-form-item__content:last-child {
            margin-left: 150px !important;
        }
    }
    .el-button:first-child {
        margin-left: 225px;
    }
    .el-button {
        margin-left: 10px;
    }
    .el-radio__label {
        line-height: 40px;
    }
    .el-checkbox-group {
        width: 400px;
    }
    .el-date-editor {
        width: 100% !important;
    }
    .line {
        text-align: center;
    }
    .form-address {
        .el-input {
            width: calc(25% - 3px);
        }
    }
}
</style>
