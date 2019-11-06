<template>
<div class="user-editProduct">
    <div class="user-editProduct-view">
        <h2>{{$t('tabel.AddCompany')}}</h2>
        <div v-if="lan=='zh'" style="text-align:center;color:#f00;font-size:12px;">请填写英文信息以供外商查看</div>
        <el-form ref="form" :model="form" :rules="rules" label-width="160px">
            <!--<el-form-item label="Company ID">-->
            <!--<el-input v-model="form.name"></el-input>-->
            <!--</el-form-item>-->
            <el-form-item :label="$t('form.CompanyName')" prop="Name">
                <el-input v-model="form.Name" :placeholder="$t('text.input')+ $t('form.CompanyName')+$t('text.here')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('form.ChooseFair')" prop="Code" v-if="lan == 'zh'">
                <el-select v-model="form.Code" :placeholder="$i18n.locale=='en'?'Please Choose':'请选择'" :disabled="this.fairData.length == 0">
                    <el-option v-for="item in fairData" :label="item.Title" :key="item.SelfExhiCode" :value="item.SelfExhiCode"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('form.CompanyPhoto')" required>
                <el-upload :action="uploadAdd" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-success='handleSuccess' :limit="1" :before-upload='beforeUpload' :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                <div>{{$t('form.imageSize')}}</div>
            </el-form-item>
            <el-form-item class="is-required" :label="$t('form.ContactPerson')" prop="ManName">
                <el-input v-model="form.ManName" :placeholder="$t('text.input')+ $t('form.ContactPerson')+$t('text.here')"></el-input>
            </el-form-item>
            <el-form-item class="is-required" :label="$t('form.Mobilephone')" prop="ManPhone">
                <el-col :span="6">
                    <el-input v-model="form.ManPhoneCountryCode" :placeholder="$t('form.CountryCode')" type="number"></el-input>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="16">
                    <el-input v-model="form.ManPhone" :placeholder="$t('text.input')+ $t('form.Mobilephone')+$t('text.here')" type="number"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item :label="$t('form.WeChat')">
                <el-input v-model="form.ManWeChat" :placeholder="$t('text.input')+ $t('form.WeChat')+$t('text.here')">
                </el-input>
            </el-form-item>
            <el-form-item :label="$t('form.Facebook')">
                <el-input v-model="form.ManFacebook" :placeholder="$t('text.input')+ $t('form.Facebook')+$t('text.here')">
                </el-input>
            </el-form-item>
            <el-form-item :label="$t('form.Whatsapp')">
                <el-input v-model="form.ManWhatsapp" :placeholder="$t('text.input')+ $t('form.Whatsapp')+$t('text.here')">
                </el-input>
            </el-form-item>
            <el-form-item :label="$t('form.Website')" prop="WebSite">
                <el-input v-model="form.WebSite" :placeholder="$t('text.input')+ $t('form.Website')+$t('text.here')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('form.CompanyDescription')" prop="Description">
                <el-input type="textarea" v-model="form.Description" :placeholder="$t('text.input')+ $t('form.CompanyDescription')+$t('text.here')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('form.Summary')" prop="Summary">
                <quill-editor v-model="form.Summary" ref="myQuillEditor" :options="editorOption">
                </quill-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">{{$t('form.Establish')}}</el-button>
                <el-button @click="back">{{$t('form.cancel')}}</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
import {
    getUserIndexTabel,
    getCategories,
    postCompany
} from "@/assets/api/api";
import Util from "@/assets/service/customUtil";
import {
    quillEditor
} from "vue-quill-editor";

export default {
    name: "addCompany",
    data() {
        return {
            form: {},
            dialogImageUrl: '',
            dialogVisible: false,
            uploadAdd: '',
            fairData: [],
            editorOption: {},
            lan:'',
            rules: {
                ...Util.rules(this)
            }
        }
    },
    components: {
        quillEditor
    },
    created() {
        this.lan = Util.getsessionStorage('lang')
        this.showTips()

        if (this.lan == 'en') {
            this.form.Code = this.$store.getters.skin.code
        }

        this.uploadAdd = '/Upload'
        getUserIndexTabel()
            .then(result => {
                this.fairData = result.data
                if (this.fairData.length == 0) {

                    this.$confirm(this.$t('prompt.evN'), 'Notice', {
                        confirmButtonText: this.$t('prompt.confirm'),
                        cancelButtonText: this.$t('prompt.cancel'),
                        type: 'warning'
                    }).then(() => {
                        this.$router.push({
                            name: 'abroad'
                        })
                    });

                    // this.$message({
                    //   message:this.$t('prompt.evN'),
                    //   type:'warning',
                    //   offset:400,
                    //   showClose:true,
                    //   duration:0
                    // })

                }
            })
    },
    methods: {
        showTips(){
            if(this.lan == 'zh'){
                this.$alert('请填写英文信息以供外商查看', {
                    dangerouslyUseHTMLString: true,
                })
            }
        },
        handleRemove(file, fileList) {
            // console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleSuccess(file, fileList) {
            // console.log(file, fileList);
            this.form['Img'] = file.data
        },
        beforeUpload(file) {
            if (file.size > 1024 * 1024 * 2) {
                this.$message(this.$t('form.size'))
                return false
            }
        },
        onSubmit() {
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    if (!this.form['Img']) {
                        this.$msgbox({
                            title: this.$t('prompt.error'),
                            message: this.$t('prompt.img')
                        })
                        return
                    }
                    if (!this.form.ManWeChat && !this.form.ManFacebook && !this.form.ManWhatsapp) {
                        this.$message(this.$t('prompt.Contact'))
                        return false
                    }

                    postCompany(this.form)
                        .then(result => {
                            this.$router.push('/User/myCompany')
                        })
                        .catch(result => {
                            this.$router.push('/User/myCompany')
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
.line {
    text-align: center;
}
.user-editProduct {
    h2 {
        text-align: center;
        margin: 5px;
        width: 100%;
        line-height: 60px;
    }
    .user-editProduct-view {
        overflow: hidden;
        width: 100%;
        margin: 5px;
        background: #fff;
        .el-form {
            width: 600px;
            margin: 20px auto;
            .el-select{
                width: 100%;
            }
        }
    }
}
</style>
