<template>
<div class="user-editProduct">
    <div class="user-editProduct-view">
        <h2>{{$t('tabel.EditProduct')}}</h2>
        <div v-if="lan=='zh'" style="text-align:center;color:#f00;font-size:12px;">请填写英文信息以供外商查看</div>
        <el-form ref="form" :model="form" :rules="rules" label-width="160px">
            <!--<el-form-item label="Product ID">-->
            <!--<el-input v-model="form.name"></el-input>-->
            <!--</el-form-item>-->

            <el-form-item :label="$t('form.ChooseFair')" prop="Code" v-if="lan == 'zh'">
                <el-select v-model="form.Code" :placeholder="$t('text.choose')+ $t('form.ChooseFair')+$t('text.here')" @change="checkCategory">
                    <el-option v-for="item in fairData" :label="item.Title" :value="item.SelfExhiCode" :key="item.SelfExhiCode"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('form.ProductName')" prop="Name">
                <el-input v-model="form.Name" :placeholder="$t('text.input')+ $t('form.ProductName')+$t('text.here')"></el-input>
            </el-form-item>
            <!-- <el-form-item :label="$t('form.ProductsCategory')" prop="CatelogID">
                <el-select v-model="form.CatelogID" :placeholder="$t('text.choose')+ $t('form.ProductsCategory')+$t('text.here')">
                    <el-option v-for="item in categoryData" :label="item.Name" :value="item.ID" :key="item.ID"></el-option>
                </el-select>
            </el-form-item> -->
            <el-form-item :label="$t('form.ProductsCategory')" required>
                <el-cascader
                    style="width:100%"
                    v-model="category.select"
                    :options="category.data"
                    @change="cagegoryChanged"
                    :props="category.props"
                    :placeholder="$t('text.choose')+ $t('form.ProductsCategory')+$t('text.here')"
                >
                </el-cascader>
            </el-form-item>
            <el-form-item :label="$t('form.ProductPhoto')">
                <el-upload :action="uploadAdd" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-success='handleSuccess' :limit="1" :file-list="fileList" :before-upload='beforeUpload' :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item :label="$t('form.ProductDescription')" prop="Description">
                <el-input type="textarea" v-model="form.Description" :placeholder="$t('text.input')+ $t('form.ProductDescription')+$t('text.here')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('form.Summary')" prop="Summary">
                <quill-editor v-model="form.Summary" ref="myQuillEditor" :options="editorOption">
                </quill-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">{{$t('form.Edit')}}</el-button>
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
    // putB2BProduct,
    getcompany
} from "@/assets/api/api";
import Util from "@/assets/service/customUtil";
import customRequest from "@/assets/service/customRequest";

import {
    quillEditor
} from "vue-quill-editor";
export default {
    name: "editProduct",
    data() {
        return {
            form: {},
            dialogImageUrl: [],
            dialogVisible: false,
            fairData: [],
            categoryData: [],
            uploadAdd: '',
            oldData: {},
            fileList: [{
                name: '',
                url: ''
            }],
            editorOption: {},
            category:{
                data:[],
                select:[],
                props: {
                    label: 'Name',
                    value:'ID',
                    children: 'children'
                }
            },
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

        this.uploadAdd = '/Upload'
        getUserIndexTabel()
            .then(result => {
                this.fairData = result.data
                if (result.data.length == 0) {
                    this.$message({
                        message: this.$t('prompt.fairNone'),
                        type: 'warning'
                    })
                }
            })
            .then(_ => {
                getcompany({
                        id: this.$route.query.id,
                        url: '/b2bproduct'
                    })
                    .then(result => {
                        this.form = result.data[0]
                        this.fileList[0]['name'] = this.form.Name + '.jpg'
                        this.fileList[0]['url'] = this.form.Img
                        this.fileList[0]['uid'] = this.form.ID
                        this.fileList[0]['status'] = 'success'
                        // 拼接目录树
                        if(!this.form.CatelogID3){
                            this.category.select = [this.form.CatelogID,this.form.CatelogID2]
                        }else{
                            this.category.select = [this.form.CatelogID,this.form.CatelogID2,this.form.CatelogID3]
                        }
                        // 获取目录树
                        this.getCategory()
                    })
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
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleSuccess(file, fileList) {
            this.form['Img'] = file.data
        },
        beforeUpload(file) {
            if (file.size > 1024 * 1024 * 2) {
                this.$message(this.$t('form.size'))
                return false
            }
        },
        cagegoryChanged(val){
            this.form.CatelogID = val[0]
            this.form.CatelogID2 = val[1]
            this.form.CatelogID3 = val[2]
        },
        getCategory(level){
            let that = this
            // 组合分类树
            let get = function (level) {
                return new Promise((resolve, reject)=>{
                    customRequest({
                        method: 'get',
                        url: '/B2BCategory/GetList',
                        params: {
                            CLevel: level
                        }
                    }).then(result => {
                        resolve(result.data)
                    })
                })
            }
            Promise.all([get(1), get(2), get(3)]).then(function(values) {
                let level1 = values[0]
                let level2 = values[1]
                let level3 = values[2]
                let tempData = []
                // 三级目录合成到二级目录
                level2.map((item)=>{
                    item.children = []
                    level3.map((item2)=>{
                        if(item.ID == item2.ParentID && item2.Name != 'N/A'){
                            item.children.push(item2)
                        }
                    })
                    // 没有3级目录 可以选择2级目录
                    if(item.children.length == 0){
                        delete item.children
                    }
                })
                // 二级目录合成到一级目录
                level1.map((item)=>{
                    item.children = []
                    level2.map((item2)=>{
                        if(item.ID == item2.ParentID){
                            item.children.push(item2)
                        }
                    })
                })

                that.category.data = level1
            });
        },
        checkCategory() {
            // getCategories({
            //         code: this.form.Code
            //     })
            //     .then(result => {
            //         console.log(result)
            //         this.categoryData = result.data
            //     })
        },
        onSubmit() {
            this.form['id'] = this.$route.query.id
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    if (!this.form['Img']) {
                        this.$msgbox({
                            title: this.$t('prompt.error'),
                            message: this.$t('prompt.img')
                        })
                        return
                    }
                    if (!this.form.CatelogID || !this.form.CatelogID2) {
                        this.$msgbox({
                            title: this.$t('prompt.error'),
                            message: this.$t('text.input') + this.$t('form.OfferCategory'),
                        })
                        return
                    }

                    customRequest({
                        method: 'put',
                        url: '/B2BProduct',
                        data: this.form
                    }).then(result => {
                        this.$router.push('/user/myProduct')
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
.user-editProduct {
    h2 {
        text-align: center;
        margin: 5px;
        width: 100%;
        line-height: 60px;
    }
    .user-editProduct-view {
        width: 100%;
        margin: 5px;
        background: #fff;
        overflow: hidden;
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
