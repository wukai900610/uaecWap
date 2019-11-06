<template>
<div class="body">
    <div class="pressForm-view-item" style="width: 600px; margin: 0 auto;">
        <el-form ref="form" :model="form" :rules="rules">
            <div class="form-item">
                <div class="form-item-head">
                    编辑观展信息
                </div>
                <div class="form-item-view">
                    <div class="form-item-view-flex">
                        <div class="form-item-view-flex-left">公司名称</div>
                        <div class="form-item-view-flex-right">
                            <el-form-item label="中文：" prop="Company">
                                <el-input v-model="form.Company" placeholder="输入中文公司名称"></el-input>
                            </el-form-item>
                            <el-form-item label="英文：" prop="CompanyEn">
                                <el-input v-model="form.CompanyEn" placeholder="输入英文公司名称"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="form-item-view-flex">
                        <div class="form-item-view-flex-left">公司地址</div>
                        <div class="form-item-view-flex-right">
                            <el-form-item label="中文：" prop="Province" class="form-address">
                                <el-input v-model="form.Address" placeholder="详细地址"></el-input>
                            </el-form-item>
                            <el-form-item label="英文：" prop="AddressEn" class="form-address">
                                <el-input v-model="form.AddressEn" placeholder="Address"></el-input>
                            </el-form-item>
                            <el-form-item label="邮编：" prop="PostCode">
                                <el-input v-model="form.PostCode" placeholder="邮编"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="form-item-view-flex">
                        <div class="form-item-view-flex-left">联系人</div>
                        <div class="form-item-view-flex-right">
                            <el-form-item prop="ManFirstName">
                                <el-input v-model="form.ManFirstName" placeholder="姓" style="width:49.5%;"></el-input>
                                <el-input v-model="form.ManLastName" placeholder="名" style="width:49%;"></el-input>
                            </el-form-item>
                            <!-- <el-form-item label="姓 名：" prop="ManName">
                                <el-col :span="10">
                                    <el-radio-group v-model="form.ManSex">
                                        <el-radio label="Mr."></el-radio>
                                        <el-radio label="Ms. "></el-radio>
                                    </el-radio-group>
                                </el-col>
                                <el-col :span="14">
                                    <el-input v-model="form.ManName" placeholder="联系人姓名" size="mini"></el-input>
                                </el-col>
                            </el-form-item> -->
                            <el-form-item label="职 位：" prop="ManPosition">
                                <el-input v-model="form.ManPosition" placeholder="联系人职位"></el-input>
                            </el-form-item>
                            <el-form-item label="电 话：" prop="ManMobile">
                                <el-input v-model="temp.ManMobile1" placeholder="城市区号" type="tel" style="width:90px;"></el-input>
                                <el-input v-model="temp.ManMobile2" placeholder="号码" type="tel" style="width:100px;"></el-input>
                                <el-input v-model="temp.ManMobile3" placeholder="分机" type="tel" style="width:70px;"></el-input>
                            </el-form-item>
                            <el-form-item label="传 真：" prop="ManFax">
                                <el-input v-model="form.ManFax" placeholder="联系人传真"></el-input>
                            </el-form-item>
                            <el-form-item label="邮 箱：" prop="ManEmail">
                                <el-input v-model="form.ManEmail" placeholder="联系人邮箱"></el-input>
                            </el-form-item>
                            <el-form-item label="微信/QQ：" prop="ManWechat">
                                <el-input v-model="form.ManWechat" placeholder="联系人微信/QQ"></el-input>
                            </el-form-item>
                            <el-form-item label="网 站：" prop="WebSite">
                                <el-input v-model="form.WebSite" placeholder="联系人网站"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                </div>
            </div>

            <VisitorContent :form="form" />

            <el-form-item>
                <el-button type="primary" class='btnOK' @click="submitForm('form')">确认提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
import {
    putWebOrderExhi,
    getWebOrderExhi
} from "@/assets/api/api";
import VisitorContent from "./VisitorContent";

export default {
    data() {
        return {
            temp:{
                ManMobile1:'',
                ManMobile2:'',
                ManMobile3:'',
            },
            form: {
                ExhiInfo1: [],
                ExhiInfo2: [],
                ExhiInfo3: [],
                ExhiInfo4: [],
                ExhiInfo5: [],
                ExhiInfo6: [],
                ExhiInfo7: [],
                ExhiInfo8: [],
            },
            rules: {
                Company: [{
                    required: true,
                    message: '必填!',
                    trigger: 'blur'
                }],
                CompanyEn: [{
                    required: true,
                    message: '必填!',
                    trigger: 'blur'
                }],
                Address: [{
                    required: true,
                    message: '必填!',
                    trigger: 'blur'
                }],
                AddressEn: [{
                    required: true,
                    message: '必填!',
                    trigger: 'blur'
                }],
                PostCode: [{
                    required: true,
                    message: '必填!',
                    trigger: 'blur'
                }],
                ManFirstName: [{
                    validator: (rule, value, callback) => {
                        if (!this.form.ManFirstName) {
                            callback(new Error('请填写姓氏!'));
                        } else if (!this.form.ManLastName) {
                            callback(new Error('请填写名称!'));
                        } else {
                            callback();
                        }
                    },
                    trigger: ['blur']
                }],
                ManMobile: [{
                    validator: (rule, value, callback) => {
                        if (!this.temp.ManMobile1 || (this.temp.ManMobile1.length < 3 || this.temp.ManMobile1.length > 4)) {
                            callback(new Error('请输入正确的城市号码'));
                        }
                        if (!this.temp.ManMobile2 || this.temp.ManMobile2.length > 8 || this.temp.ManMobile2.length < 7) {
                            callback(new Error('请输入正确的号码'));
                        }
                        if(this.temp.ManMobile3){
                            this.form.ManMobile = this.temp.ManMobile1 + '-' + this.temp.ManMobile2 + '-' + (this.temp.ManMobile3 || '');
                        }else{
                            this.form.ManMobile = this.temp.ManMobile1 + '-' + this.temp.ManMobile2;
                        }

                        callback();
                    },
                    required: true,
                    trigger: 'blur'
                }],
                ManEmail: [{
                    required: true,
                    message: '必填!',
                    trigger: 'blur'
                }],
            },
            code: ''
        }
    },
    components: {},
    created() {
        this.code = this.$route.query.code
        getWebOrderExhi({
                id: this.$route.query.id
            })
            .then(result => {
                result.data.Order.ExhiInfo = JSON.parse(result.data.Order.ExhiInfo);
                result.data.Order.ExhiInfo1 = result.data.Order.ExhiInfo.ExhiInfo1 || [];
                result.data.Order.ExhiInfo2 = result.data.Order.ExhiInfo.ExhiInfo2 || [];
                result.data.Order.ExhiInfo3 = result.data.Order.ExhiInfo.ExhiInfo3 || [];
                result.data.Order.ExhiInfo4 = result.data.Order.ExhiInfo.ExhiInfo4 || [];
                result.data.Order.ExhiInfo5 = result.data.Order.ExhiInfo.ExhiInfo5 || [];
                result.data.Order.ExhiInfo6 = result.data.Order.ExhiInfo.ExhiInfo6 || [];
                result.data.Order.ExhiInfo7 = result.data.Order.ExhiInfo.ExhiInfo7 || [];
                result.data.Order.ExhiInfo8 = result.data.Order.ExhiInfo.ExhiInfo8 || [];

                this.form = result.data.Order
                this.temp.ManMobile1 = this.form.ManMobile.split('-')[0];
                this.temp.ManMobile2 = this.form.ManMobile.split('-')[1];
                this.temp.ManMobile3 = this.form.ManMobile.split('-')[2];
            })
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let ExhiInfoList = {
                        ExhiInfo1: this.form.ExhiInfo1,
                        ExhiInfo2: this.form.ExhiInfo2,
                        ExhiInfo3: this.form.ExhiInfo3,
                        ExhiInfo4: this.form.ExhiInfo4,
                        ExhiInfo5: this.form.ExhiInfo5,
                        ExhiInfo6: this.form.ExhiInfo6,
                        ExhiInfo7: this.form.ExhiInfo7,
                        ExhiInfo8: this.form.ExhiInfo8,
                    }
                    this.form['ExhiInfo'] = JSON.stringify(ExhiInfoList)
                    // console.log(this.form);
                    putWebOrderExhi(this.form)
                        .then(() => {
                            this.$router.push({
                                name: 'abroad'
                            })
                        })
                }
            });
        }
    },
    components:{
        VisitorContent
    }
}
</script>
<stylescoped lang='scss'>
.body {
    background-color: #fff;
    .btnOK {
        display: block;
        margin: 20px auto 0;
        padding: 0;
        margin-bottom: 30px;
        width: 80px;
        height: 35px;
    }
    .form-item {
        width: 100%;
        .form-item-head {
            height: 80px;
            font-size: 30px;
            font-weight: 600;
            margin: 0 auto;
            text-align: center;
            line-height: 80px;
        }
        .form-item-view {
            width: 800px;
            margin: 0 auto;
            .form-item-view-flex {
                display: flex;
                .form-item-view-flex-left {
                    width: 150px;
                    line-height: 30px;
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
